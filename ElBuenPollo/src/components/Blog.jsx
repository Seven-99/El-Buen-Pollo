import { motion } from "framer-motion";

export default function Blog() {
  const noticias = [
    { id: 1, fecha: "05 Feb", titulo: "¡Nuevas Milanesas de Soja!", resumen: "Incorporamos opciones para todos..." },
    { id: 2, fecha: "01 Feb", titulo: "Horarios de Verano", resumen: "Conocé nuestros nuevos horarios de atención..." }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-brand mb-10">Últimas Novedades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {noticias.map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
            >
              <span className="text-highlight text-xs font-bold uppercase">{post.fecha}</span>
              <h3 className="text-xl font-bold text-brand mt-2 mb-3">{post.titulo}</h3>
              <p className="text-gray-500 text-sm mb-4">{post.resumen}</p>
              <button className="text-brand font-bold text-sm underline">Leer más</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}