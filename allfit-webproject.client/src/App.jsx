import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import AanbodOverzicht from './Components/AanbodOverzicht';
import DetailPagina from './Pages/DetailPagina'; 

function App() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<AanbodOverzicht />} />
                <Route path="/aanbod/:sportNaam" element={<DetailPagina />} />
            </Routes>
        </div>
    );
}

export default App;