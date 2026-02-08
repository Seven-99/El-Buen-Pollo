import { motion } from "framer-motion";
import fotoLocal from "../assets/Local1.jpeg";

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src={fotoLocal} 
            alt="Local El Buen Pollo Centro" 
            className="rounded-[40px] shadow-2xl w-full aspect-[4/5] object-cover"
          />
          {/* Badge flotante */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl hidden lg:block">
            <p className="text-[#4a1414] font-black text-2xl">Río Cuarto</p>
            <p className="text-orange-500 font-bold uppercase text-xs">Sede Central</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-[#4a1414] mb-6 leading-tight">
            Somos una distinguida pollería en la zona.
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Al igual que los mejores comercios de Río Cuarto, en El Buen Pollo estamos comprometidos con la frescura. Elegimos cuidadosamente nuestros productos para ofrecerle un sabor inigualable en su mesa.
          </p>
          
          <div className="space-y-4">
            {['Atención personalizada', 'Ingredientes seleccionados', 'Ambiente familiar'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✔</div>
                <span className="font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}