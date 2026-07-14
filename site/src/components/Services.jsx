import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Что предлагаю</p>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900">Услуги</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={service.title} className={`p-8 border ${service.featured ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200'}`}>
              <p className="text-xs tracking-[0.3em] uppercase mb-6 opacity-50">0{i + 1}</p>
              <h3 className={`text-2xl font-light mb-2 ${service.featured ? 'text-white' : 'text-stone-900'}`}>{service.title}</h3>
              <p className={`text-lg font-light mb-6 ${service.featured ? 'text-stone-300' : 'text-stone-500'}`}>{service.price}</p>
              <p className={`text-sm leading-relaxed mb-8 ${service.featured ? 'text-stone-400' : 'text-stone-600'}`}>{service.description}</p>
              <ul className="space-y-3">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-stone-400" />
                    <span className={service.featured ? 'text-stone-300' : 'text-stone-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-block w-full text-center px-5 py-3 text-sm tracking-widest uppercase transition-all ${service.featured ? 'bg-white text-stone-900 hover:bg-stone-100' : 'border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'}`}>
                Узнать подробнее
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
