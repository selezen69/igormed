import { processSteps } from '../data'

export default function Process() {
  return (
    <section id="process" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Как работаем</p>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900">Этапы работы</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {processSteps.map((step, i) => (
            <div key={step.num} className="relative p-8 border-b border-stone-200 last:border-r-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(4)]:border-r-0">
              <p className="text-6xl font-light text-stone-200 mb-6">{step.num}</p>
              <h3 className="text-xl font-light text-stone-900 mb-3">{step.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{step.text}</p>
              {i < processSteps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-stone-300 z-10" />}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-stone-500 mb-6 text-sm">Среднее время реализации проекта — 6–12 месяцев</p>
          <a href="#contact" className="inline-block px-8 py-4 bg-stone-900 text-white text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors">Начать проект</a>
        </div>
      </div>
    </section>
  )
}
