using Microsoft.AspNetCore.Mvc;
using Allfit_Webproject.Server.Data;
using Allfit_Webproject.Server.Services;

namespace Allfit_Webproject.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly ITokenService _tokenService;

        public AccountController(ApplicationDbContext db, ITokenService tokenService)
        {
            _db = db;
            _tokenService = tokenService;
        }

        public class LoginDto
        {
            public string Email { get; set; } = string.Empty;
            public string Password { get; set; } = string.Empty;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto dto)
        {
            var user = _db.Lidmaatschappen.SingleOrDefault(u => u.email == dto.Email);
            if (user == null) return Unauthorized("Invalid credentials");

            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.wacthwoord))
                return Unauthorized("Invalid credentials");

            var token = _tokenService.CreateToken(user.id.ToString(), user.email);

            // Return token and basic user info so the client can display the account
            return Ok(new
            {
                token,
                user = new
                {
                    name = user.naam,
                    email = user.email,
                    id = user.id
                }
            });
        }
    }
}
