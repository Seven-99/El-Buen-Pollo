import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo o Nombre */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-2xl font-black tracking-tighter text-[#4a1414]">
            EL BUEN <span className="text-[#facc15]">POLLO</span>
          </span>
          <span className="text-[10px] uppercase tracking-[3px] font-bold text-orange-500 -mt-1">
            Pollería • Almacén
          </span>
        </motion.div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {["Inicio", "Productos", "Nosotros"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors"
            >
              {item}
            </a>
          ))}
            <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#4a1414] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-orange-900/20 cursor-pointer flex items-center justify-center"
            >
            Contacto
            </motion.a>
        </nav>
      </div>
    </header>
  );
}