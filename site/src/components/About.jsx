import { contact } from '../data'

export default function About() {
  const stats = [
    { num: '12', label: 'лет опыта' },
    { num: '80+', label: 'проектов' },
    { num: '15', label: 'наград' },
    { num: '100%', label: 'рекомендуют' },
  ]

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Наталья Селезнёва — дизайнер интерьеров"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg hidden md:block">
              <p className="text-4xl font-light text-stone-900">12</p>
              <p className="text-sm tracking-wider uppercase text-stone-500 mt-1">лет практики</p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-4">О дизайнере</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight mb-6">
              Наталья
              <br />
              <span className="italic text-stone-500">Селезнёва</span>
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Создаю пространства, в которых хочется жить. Не следую трендам — ищу характер каждого дома и каждого человека.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Образование: МГХПА им. Строганова, стажировка в студии Patricia Urquiola (Милан). Работаю с объектами от 150 м² в Москве и Подмосковье.
            </p>
            <p className="text-stone-600 leading-relaxed mb-10">
              Минимальный бюджет проекта — 5 млн ₽. Принимаю не более 4 объектов одновременно, чтобы уделять каждому максимум внимания.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-stone-200">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-light text-stone-900">{s.num}</p>
                  <p className="text-xs tracking-wider uppercase text-stone-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href={contact.telegramUrl}
                className="flex items-center gap-2 px-5 py-3 border border-stone-300 text-stone-700 text-sm tracking-wider uppercase hover:border-stone-900 hover:text-stone-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.43 13.847l-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.72.712z" />
                </svg>
                Telegram
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 bg-stone-900 text-white text-sm tracking-wider uppercase hover:bg-stone-700 transition-colors"
              >
                Написать
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
