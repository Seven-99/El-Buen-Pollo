import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CatalogPage(){
  const secciones = [
    {
      titulo: "OFERTAS DESTACADAS EN POLLO", // [cite: 3]
      items: [
        { nombre: "2 KG de Supremas de Pollo", precio: "$21.999" }, // [cite: 4, 5]
        { nombre: "3 KG de Pata Muslo", precio: "$11.999" }, // [cite: 6, 7]
        { nombre: "2 KG de Pollo Trozado", precio: "$7.999" }, // [cite: 8, 9]
        { nombre: "Pollo Fresco Entero (unidad)", precio: "$16.900" } // [cite: 12, 13]
      ]
    },
    {
      titulo: "MILANESAS Y CONGELADOS", // [cite: 14]
      items: [
        { nombre: "Milanesas x 2 KG + Maple de Huevo", precio: "$19.999" }, // [cite: 15]
        { nombre: "Milanesas de Pechuga x 2 KG", precio: "$13.900" }, // [cite: 16, 17]
        { nombre: "2 KG de Medallones de Merluza", precio: "$9.900" } // [cite: 20, 21]
      ]
    },
    {
      titulo: "COMBOS ECONÓMICOS", // [cite: 24]
      items: [
        { nombre: "Combo Parrilla (Chori + Morci + Leña)", precio: "$20.900" }, // [cite: 25, 30]
        { nombre: "Combo Pollo Parrillero (2 Pollos + Carbón)", precio: "$23.000" }, // [cite: 31, 34]
        { nombre: "Combo Semanal (Mila + Hambur + Trozado)", precio: "$19.900" } // [cite: 35, 39]
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-stone-50 p-6 md:p-12"
    >
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-orange-600 font-bold hover:underline mb-8 inline-block">
          ← Volver a la página principal
        </Link>
        
        <header className="text-center mb-12">
          <h1 className="text-4xl font-black text-stone-900 uppercase">Catálogo de Ofertas</h1>
          <p className="text-orange-600 font-semibold mt-2">CALIDAD Y PRECIO TODOS LOS DÍAS</p> 
        </header>

        {secciones.map((seccion, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-stone-800 mb-6 border-b-2 border-orange-200 pb-2">
              {seccion.titulo}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {seccion.items.map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-center border border-stone-100">
                  <span className="font-medium text-stone-700">{item.nombre}</span>
                  <span className="text-xl font-black text-orange-600">{item.precio}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <footer className="mt-16 bg-stone-900 text-white p-8 rounded-3xl text-center">
          <p className="text-lg mb-4">Consultá disponibilidad - Ofertas por tiempo limitado</p>
          <a 
            href="https://wa.me/5493584116988" 
            className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-bold inline-block transition"
          >
            Hacé tu pedido por WhatsApp
          </a>
        </footer>
      </div>
    </motion.div>
  );
};