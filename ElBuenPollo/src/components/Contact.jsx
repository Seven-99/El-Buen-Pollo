import ErrorBoundary from "./ErrorBoundary";


export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Datos de Contacto */}
        <div className="space-y-8">
          <h2 className="text-4xl font-black text-brand">Contáctenos</h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-highlight uppercase text-xs tracking-widest mb-2">Dirección</h4>
              <p className="text-gray-700 text-lg font-medium">Vélez Sarsfield 802, (5800) Río Cuarto - Córdoba</p>
            </div>
            
            <div>
              <h4 className="font-bold text-highlight uppercase text-xs tracking-widest mb-2">Horarios</h4>
              <p className="text-gray-600">Lunes a sábado: 09:00 a 13:30 y 17:00 a 21:00 hs.</p>
              <p className="text-gray-600">Domingos: 09:00 - 13:00 hs.</p>
            </div>

            <div className="flex gap-4">
              <a href="https://wa.me/5493584116988" className="bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition-colors flex items-center gap-2">
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mapa / Iframe */}
        <div className="h-100 bg-gray-100 rounded-[40px] overflow-hidden shadow-inner border border-gray-200">
<ErrorBoundary>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6682.691644557072!2d-64.3406169!3d-33.12627820000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2012432c92395%3A0x3038f53bbc7de1fb!2sEl%20Buen%20Pollo!5e0!3m2!1ses!2sar!4v1770516845934!5m2!1ses!2sar" // El link que copiaste de Google
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación El Buen Pollo"
          ></iframe>
        </div>
      </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}