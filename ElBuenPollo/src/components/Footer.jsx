import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4a1414] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
        
        {/* Info Marca */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">El Buen Pollo</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Calidad premium en productos avícolas, artículos de almacén y congelados. 
            Frescura garantizada en tu mesa.
          </p>
        </div>

        {/* Horarios */}
        <div className="space-y-4">
          <h4 className="text-orange-400 font-bold uppercase tracking-widest text-xs">Horarios</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Lunes a Sábado: 09:00 - 13:30 | 17:00 - 21:00</li>
            <li>Domingos: 09:00 - 13:30</li>
          </ul>
        </div>

        {/* Contacto Rápido */}
        <div className="space-y-4">
          <h4 className="text-orange-400 font-bold uppercase tracking-widest text-xs">Contacto</h4>
          <motion.a 
            href="https://wa.me/5493584116988"
            target="_blank"
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 text-green-400 font-bold"
          >
            <span className="bg-green-500 text-white p-2 rounded-full">
              {/* Icono simple de WhatsApp (podes usar Lucide o un emoji) */}
              📞
            </span>
            Hacé tu pedido por WhatsApp
          </motion.a>
          <p className="text-sm text-gray-300">📍 Vélez Sarsfield 802, Rio Cuarto</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <p>© {currentYear} El Buen Pollo - Todos los derechos reservados.</p>
        <p>Diseño por <span className="text-white font-medium underline underline-offset-4 cursor-pointer">Pupa Lab</span></p>
      </div>
    </footer>
  );
}