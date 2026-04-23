import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const closeMenu = () => setIsOpen(false);

  const getLinkClass = ({ isActive }) =>
        isActive ? 'nav-link active' : 'nav-link'

  const handleLogout = () => {
      logout();
      closeMenu();
      navigate('/');
  }



  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          AllFit
        </NavLink>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        <nav className={isOpen ? 'nav-menu open' : 'nav-menu'}>
          <NavLink to="/" end className={getLinkClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/locaties" className={getLinkClass} onClick={closeMenu}>
            Locaties
          </NavLink>

          <NavLink to="/aanbod" className={getLinkClass} onClick={closeMenu}>
            Aanbod
          </NavLink>

          <NavLink to="/contact" className={getLinkClass} onClick={closeMenu}>
            Contact
          </NavLink>

          {!isAuthenticated ? (
            <NavLink to="/login" className={getLinkClass} onClick={closeMenu}>
              Inloggen
            </NavLink>
          ) : (
            <>
              <NavLink to="/account" className={getLinkClass} onClick={closeMenu}>
                Account
              </NavLink>

              <button
                type="button"
                className="nav-link logout-button"
                onClick={handleLogout}
              >
                Uitloggen
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar