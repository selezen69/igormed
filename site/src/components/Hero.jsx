export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.4em] uppercase text-stone-300 mb-6">
          Дизайн интерьеров премиум-класса
        </p>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
          Пространства,
          <br />
          <span className="italic">которые живут</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-300 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Квартиры и загородные дома с характером.
          Бюджет проектов — от 5 млн ₽.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all duration-300"
          >
            Смотреть работы
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-stone-900 text-sm tracking-widest uppercase hover:bg-stone-100 transition-all duration-300"
          >
            Обсудить проект
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Листать</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
