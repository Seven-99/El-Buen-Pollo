import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavHashLink } from 'react-router-hash-link'; // Importante: usar este
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Productos", href: "/#productos" },
    { name: "Ofertas", href: "/CatalogPage", isSpecial: true },
    { name: "Nosotros", href: "/#nosotros" }, // Asegurate que en App.jsx el id sea "nosotros"
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="flex flex-col cursor-pointer">
            <span className="text-2xl font-black tracking-tighter text-[#4a1414]">
              EL BUEN <span className="text-[#facc15]">POLLO</span>
            </span>
          </div>
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <NavHashLink 
              smooth // Esto activa el scroll suave
              key={item.name} 
              to={item.href}
              className={`text-sm font-semibold transition-colors ${
                item.isSpecial ? 'text-orange-600 hover:text-orange-700' : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              {item.name}
            </NavHashLink>
          ))}
          <NavHashLink 
            smooth 
            to="/#contacto"
            className="bg-[#4a1414] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            Contacto
          </NavHashLink>
        </nav>

        {/* Botón Sandwich (Mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl p-2">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 flex flex-col p-6 gap-6"
          >
            {menuItems.map((item) => (
              <NavHashLink
                smooth
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-gray-800"
              >
                {item.name}
              </NavHashLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}