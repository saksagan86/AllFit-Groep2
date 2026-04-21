import { useAuth } from '../context/AuthContext.jsx';

function AccountPage() {
  const { user } = useAuth();

  return (
    <main className="page-container">
      <section className="auth-card">
        <h1>Mijn account</h1>
        <p>Welkom in het ledenportaal van AllFit.</p>

        <div className="account-details">
          <p>
            <strong>Naam:</strong> {user?.name || 'Onbekend'}
          </p>
          <p>
            <strong>E-mailadres:</strong> {user?.email || 'Onbekend'}
          </p>
          <p>
            <strong>Rol:</strong> {user?.role || 'Onbekend'}
          </p>
        </div>

        <p className="auth-note">
          Deze pagina is nu nog een placeholder.
        </p>
      </section>
    </main>
  );
}

export default AccountPage;