import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { portfolioItems } from '../data'

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-5xl bg-white" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 flex items-center justify-center text-stone-900 hover:bg-white transition-colors" aria-label="Закрыть">✕</button>
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="w-full aspect-[4/3]">
          {project.photos.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`${project.title} — фото ${i + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <span className="text-xs tracking-widest uppercase text-stone-400">{project.type}</span>
              <h3 className="text-2xl font-light text-stone-900 mt-1">{project.title}</h3>
            </div>
            <div className="flex gap-6 text-sm text-stone-500">
              <span>{project.area}</span>
              <span>{project.year}</span>
            </div>
          </div>
          <p className="text-stone-600 leading-relaxed">{project.description}</p>
          <a href="#contact" onClick={onClose} className="mt-6 inline-block px-6 py-3 bg-stone-900 text-white text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors">
            Обсудить похожий проект
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('Все')
  const [selected, setSelected] = useState(null)
  const types = ['Все', 'Квартира', 'Загородный дом']
  const filtered = filter === 'Все' ? portfolioItems : portfolioItems.filter(p => p.type === filter)

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Работы</p>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900">Портфолио</h2>
        </div>
        <div className="flex justify-center gap-2 mb-12">
          {types.map(t => (
            <button key={t} onClick={() => setFilter(t)} className={`px-5 py-2 text-sm tracking-widest uppercase border transition-all ${filter === t ? 'bg-stone-900 text-white border-stone-900' : 'border-stone-300 text-stone-500 hover:border-stone-900 hover:text-stone-900'}`}>{t}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <article key={project.id} className="group cursor-pointer overflow-hidden" onClick={() => setSelected(project)}>
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={project.photos[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm tracking-widest uppercase border border-white px-4 py-2">Смотреть</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-stone-700 text-xs tracking-wider uppercase px-3 py-1">{project.type}</span>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-light text-stone-900">{project.title}</h3>
                  <span className="text-sm text-stone-400">{project.year}</span>
                </div>
                <p className="text-sm text-stone-500 mt-1">{project.area}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
