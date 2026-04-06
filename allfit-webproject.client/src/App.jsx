import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import AanbodPage from './pages/AanbodPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LocatiesPage from './pages/LocatiesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './App.css'

function App() {
    return (
        <>
            <Navbar />
            <main className="page-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/aanbod" element={<AanbodPage />} />
                    <Route path="/locaties" element={<LocatiesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
        </>
    )
}

export default App