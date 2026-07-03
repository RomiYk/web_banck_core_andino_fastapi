// src/components/layout/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white border-b-4 border-cyan-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-900">A LOS ANDES</div>
                <ul className="flex space-x-8 text-blue-900 font-semibold">
                    <li>Productos</li>
                    <li>Promociones</li>
                    <li>Canales de atención</li>
                    <li>Consulta tu saldo</li>
                    <li>Blog</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;