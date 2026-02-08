import { motion } from "framer-motion";

const categorias = [
  { title: "Pollería", items: "Pollo entero, supremas, milanesas preparadas, alitas y más.", icon: "🍗" },
  { title: "Almacén", items: "Aceites, harinas, condimentos y productos de primera necesidad.", icon: "🛒" },
  { title: "Congelados", items: "Hamburguesas, medallones, vegetales y papas pre-fritas.", icon: "❄️" },
  { title: "Especialidades", items: "Arrollados de pollo, brochettes y pollos condimentados.", icon: "✨" }
];

export default function ProductCard() {
  return (
    <section id="productos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#4a1414] mb-4">Lo que ofrecemos</h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            Trabajamos con proveedores seleccionados para asegurar la máxima calidad en Río Cuarto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-[#4a1414] mb-3">{cat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {cat.items}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-orange-50 rounded-4xl border border-orange-100 text-center">
          <p className="text-orange-800 font-medium">
            ¿Buscás algo específico? Consultanos por WhatsApp y te confirmamos disponibilidad.
          </p>
        </div>
      </div>
    </section>
  );
}