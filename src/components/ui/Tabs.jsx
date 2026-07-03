import React, { useState } from 'react';

const Tabs = () => {
    // Aquí controlamos qué pestaña está activa
    const [activeTab, setActiveTab] = useState('caracteristicas');

    return (
        <div className="w-full max-w-4xl mx-auto mt-10 font-sans">
            {/* Botones de las pestañas */}
            <div className="flex">
                <button
                    onClick={() => setActiveTab('caracteristicas')}
                    className={`px-8 py-3 font-bold transition-colors ${activeTab === 'caracteristicas' ? 'bg-cyan-500 text-white' : 'bg-blue-900 text-white hover:bg-blue-800'}`}>
                    Características
                </button>
                <button
                    onClick={() => setActiveTab('requisitos')}
                    className={`px-8 py-3 font-bold transition-colors ${activeTab === 'requisitos' ? 'bg-cyan-500 text-white' : 'bg-blue-900 text-white hover:bg-blue-800'}`}>
                    Requisitos
                </button>
            </div>

            {/* Contenido que cambia según la pestaña */}
            <div className="p-6 bg-gray-50 border-t-4 border-cyan-500 shadow-md">
                {activeTab === 'caracteristicas' && (
                    <div className="text-blue-900">
                        <h3 className="font-bold text-xl mb-4">Financiamos</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Capital de trabajo, compra de mercadería e insumos.</li>
                            <li>Monto mínimo: S/ 300.</li>
                            <li>En soles (S/) de acuerdo al producto seleccionado.</li>
                            <li>Sujeto a evaluación.</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'requisitos' && (
                    <div className="text-blue-900">
                        <h3 className="font-bold text-xl mb-4">Generales</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>DNI del titular y cónyuge.</li>
                            <li>Recibo de luz o agua del domicilio del titular con un máximo de 03 meses de antigüedad.</li>
                            <li>Documentos que sustenten la actividad económica, continuidad y antigüedad del negocio.</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;