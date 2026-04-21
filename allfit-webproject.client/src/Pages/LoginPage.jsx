import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/account';

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    // Nep frotnend-validatie.
    if (!formData.email || !formData.password) {
      setError('Vul zowel e-mailadres als wachtwoord in.');
      return;
    }

    login({
      token: 'temporary-step-1-token',
      user: {
        name: 'Test Gebruiker',
        email: formData.email,
        role: 'Member',
      },
    });

    navigate(from, { replace: true });
  };

  return (
    <main className="page-container">
      <section className="auth-card">
        <h1>Inloggen</h1>
        <p>Log in om toegang te krijgen tot je account en persoonlijke omgeving.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">E-mailadres</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Wachtwoord</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="auth-button">
            Inloggen
          </button>
        </form>

        <p className="auth-note">
          Dit is nog de voorbereiding.
        </p>
      </section>
    </main>
  );
}

export default LoginPage;