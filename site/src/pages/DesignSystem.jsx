const colors = [
  { cls: 'bg-stone-50', hex: '#fafaf9', use: 'Фон секций About, Process' },
  { cls: 'bg-stone-100', hex: '#f5f5f4', use: 'Hover-фон светлых кнопок' },
  { cls: 'bg-stone-200', hex: '#e7e5e4', use: 'Границы карточек, разделители Process' },
  { cls: 'bg-stone-300', hex: '#d6d3d1', use: 'Границы (фильтр портфолио, outline-кнопка About)' },
  { cls: 'bg-stone-400', hex: '#a8a29e', use: 'Приглушённый текст, лейблы' },
  { cls: 'bg-stone-500', hex: '#78716c', use: 'Второстепенный текст' },
  { cls: 'bg-stone-600', hex: '#57534e', use: 'Текст абзацев' },
  { cls: 'bg-stone-700', hex: '#44403c', use: 'Границы полей формы, hover-текст в Nav' },
  { cls: 'bg-stone-800', hex: '#292524', use: 'Граница футера' },
  { cls: 'bg-stone-900', hex: '#1c1917', use: 'Основной тёмный: заголовки, кнопки, фон Contact' },
  { cls: 'bg-white', hex: '#ffffff', use: 'Фон карточек, светлые кнопки' },
  { cls: 'bg-black', hex: '#000000', use: 'Оверлеи (/50, /30, /90)' },
  { cls: 'bg-red-500', hex: '#ef4444', use: 'Граница поля с ошибкой' },
  { cls: 'bg-red-400', hex: '#f87171', use: 'Текст ошибки' },
]

const customColors = [
  { hex: '#fafaf8', use: 'body { background }, index.css:13', near: 'stone-50 (#fafaf9)' },
  { hex: '#1a1a1a', use: 'body { color }, index.css:14', near: 'stone-900 (#1c1917)' },
]

const typeScale = [
  { cls: 'text-xs', px: '12px', use: 'Мелкие подписи, бейджи, ошибки формы' },
  { cls: 'text-sm', px: '14px', use: 'Nav, кнопки, второстепенный текст' },
  { cls: 'text-base', px: '16px', use: 'Абзацы (по умолчанию, без класса)' },
  { cls: 'text-lg', px: '18px', use: 'Подзаголовок Hero, цена услуги' },
  { cls: 'text-xl', px: '20px', use: 'Заголовок этапа в Process' },
  { cls: 'text-2xl', px: '24px', use: 'Заголовок в модалке, карточке услуги' },
  { cls: 'text-3xl', px: '30px', use: 'Цифры статистики About' },
  { cls: 'text-4xl md:text-5xl', px: '36→48px', use: 'Заголовки секций (H2) — основной паттерн' },
  { cls: 'text-5xl md:text-7xl', px: '48→72px', use: 'Заголовок Hero (H1)' },
  { cls: 'text-6xl', px: '60px', use: 'Декоративные номера этапов Process' },
]

const tracking = [
  { cls: 'tracking-[0.4em]', token: 'кастом', use: 'Эйбрау-подписи секций + подзаголовок Hero', count: '7 мест', verdict: 'ok' },
  { cls: 'tracking-[0.3em]', token: 'кастом', use: 'Логотип в Nav', count: '1 место', verdict: 'warn' },
  { cls: 'tracking-widest', token: 'Tailwind 0.1em', use: 'Кнопки, ссылки Nav, большинство badge', count: '~8 мест', verdict: 'ok' },
  { cls: 'tracking-wider', token: 'Tailwind 0.05em', use: 'Кнопки About, подписи статистики, badge типа проекта', count: '~4 места', verdict: 'warn' },
]

export default function DesignSystem() {
  return (
    <div className="bg-[#fafaf8] text-[#1a1a1a] min-h-screen" style={{ fontFamily: 'Georgia, serif' }}>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-sm tracking-[0.3em] uppercase font-light text-stone-900">
            Дизайн-система
          </a>
          <nav className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase text-stone-500">
            <a href="#colors" className="hover:text-stone-900 transition-colors">Цвета</a>
            <a href="#type" className="hover:text-stone-900 transition-colors">Типографика</a>
            <a href="#buttons" className="hover:text-stone-900 transition-colors">Кнопки</a>
            <a href="#cards" className="hover:text-stone-900 transition-colors">Карточки</a>
            <a href="#forms" className="hover:text-stone-900 transition-colors">Форма</a>
            <a href="#spacing" className="hover:text-stone-900 transition-colors">Отступы</a>
            <a href="#summary" className="hover:text-stone-900 transition-colors">Итог</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        <section>
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Справка</p>
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight">Дизайн-система сайта</h1>
          <p className="text-stone-600 leading-relaxed mt-4 max-w-2xl">
            Реальные значения, взятые из компонентов проекта. Ничего не придумано — только то, что уже используется.
            Места, где стиль разошёлся, отмечены жёлтой рамкой и комментарием.
          </p>
        </section>

        {/* COLORS */}
        <section id="colors">
          <SectionTitle eyebrow="01" title="Цвета" />
          <p className="text-sm text-stone-500 mb-6">Палитра — стандартный Tailwind <code className="text-stone-700">stone</code>, кастомных цветов в конфиге нет.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-stone-200 border border-stone-200">
            {colors.map(c => (
              <div key={c.cls} className="bg-white p-4">
                <div className={`h-16 w-full ${c.cls} border border-stone-200`} />
                <p className="text-xs font-sans mt-3 text-stone-900">{c.cls}</p>
                <p className="text-xs text-stone-400">{c.hex}</p>
                <p className="text-xs text-stone-500 mt-1 leading-snug">{c.use}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-amber-400 bg-amber-50 p-6">
            <p className="text-xs tracking-widest uppercase text-amber-700 mb-3">⚠ Расхождение</p>
            <p className="text-sm text-stone-700 mb-4">
              В <code>index.css</code> фон и текст страницы заданы кастомным hex вместо токенов Tailwind — оба почти совпадают с уже существующими stone-цветами:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {customColors.map(c => (
                <div key={c.hex} className="flex items-center gap-4 bg-white p-4 border border-stone-200">
                  <div className="w-12 h-12 flex-shrink-0 border border-stone-200" style={{ background: c.hex }} />
                  <div className="text-xs">
                    <p className="text-stone-900">{c.hex}</p>
                    <p className="text-stone-500">{c.use}</p>
                    <p className="text-amber-700 mt-1">≈ {c.near}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-700 mt-4">
              <strong>Эталон:</strong> заменить на <code>bg-stone-50</code> / <code>text-stone-900</code> в index.css, чтобы не плодить второй «почти чёрный» и «почти белый».
            </p>
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section id="type">
          <SectionTitle eyebrow="02" title="Типографика" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">Шрифт и начертания</p>
              <p className="text-3xl mb-2" style={{ fontFamily: 'Georgia, serif' }}>Georgia, serif — единственный шрифт сайта</p>
              <div className="mt-6 space-y-2">
                <p className="text-2xl font-light text-stone-900">font-light (300) — заголовки, кнопки, цифры</p>
                <p className="text-2xl italic text-stone-500">italic — акцентные вставки (Hero, About, Contact)</p>
                <p className="text-2xl text-stone-900">обычное начертание (400) — текст абзацев</p>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">Шкала размеров</p>
              <div className="divide-y divide-stone-200 border-t border-stone-200">
                {typeScale.map(t => (
                  <div key={t.cls} className="flex items-baseline justify-between gap-4 py-3">
                    <span className={`${t.cls} font-light text-stone-900 whitespace-nowrap`}>Aa</span>
                    <span className="text-xs text-stone-400 font-sans flex-1">{t.cls}</span>
                    <span className="text-xs text-stone-400 font-sans w-16 text-right">{t.px}</span>
                    <span className="text-xs text-stone-500 font-sans hidden sm:block w-40 text-right">{t.use}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border border-amber-400 bg-amber-50 p-6">
            <p className="text-xs tracking-widest uppercase text-amber-700 mb-3">⚠ Расхождение — межбуквенный интервал (tracking)</p>
            <p className="text-sm text-stone-700 mb-4">Четыре разных значения делают одну и ту же работу — «мелкая капс-подпись»:</p>
            <div className="space-y-3">
              {tracking.map(t => (
                <div key={t.cls} className={`flex flex-wrap items-center gap-4 p-3 bg-white border ${t.verdict === 'warn' ? 'border-amber-300' : 'border-stone-200'}`}>
                  <span className={`${t.cls} uppercase text-xs text-stone-900 w-40 flex-shrink-0`}>Подпись</span>
                  <code className="text-xs text-stone-500 w-40">{t.cls}</code>
                  <span className="text-xs text-stone-400 w-32">{t.token}</span>
                  <span className="text-xs text-stone-500 flex-1">{t.use}</span>
                  <span className="text-xs text-stone-400">{t.count}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-700 mt-4">
              <strong>Эталон:</strong> <code>tracking-[0.4em]</code> для эйбрау-подписей секций, <code>tracking-widest</code> для интерактивных элементов (кнопки, навигация). <code>tracking-wider</code> и одиночный <code>tracking-[0.3em]</code> в логотипе — убрать, заменить на эти два.
            </p>
          </div>
        </section>

        {/* BUTTONS */}
        <section id="buttons">
          <SectionTitle eyebrow="03" title="Кнопки и состояния" />
          <p className="text-sm text-stone-500 mb-6">Наведите курсор — hover-состояния настоящие, из компонентов.</p>

          <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">Крупные CTA — px-8 py-4 (Hero, Process)</p>
          <div className="flex flex-wrap gap-4 mb-10 p-8 bg-stone-900">
            <a href="#_" onClick={e => e.preventDefault()} className="px-8 py-4 bg-white text-stone-900 text-sm tracking-widest uppercase hover:bg-stone-100 transition-all duration-300">Обсудить проект</a>
            <a href="#_" onClick={e => e.preventDefault()} className="px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all duration-300">Смотреть работы</a>
          </div>

          <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">Средние — px-5/6 py-3 (Services, Portfolio modal, About)</p>
          <div className="flex flex-wrap gap-4 mb-4 p-8 bg-white border border-stone-200">
            <a href="#_" onClick={e => e.preventDefault()} className="px-5 py-3 bg-stone-900 text-white text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors">Написать (Services)</a>
            <a href="#_" onClick={e => e.preventDefault()} className="px-5 py-3 border border-stone-900 text-stone-900 text-sm tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-all">Outline (Services)</a>
            <a href="#_" onClick={e => e.preventDefault()} className="px-5 py-3 border border-stone-300 text-stone-700 text-sm tracking-wider uppercase hover:border-stone-900 hover:text-stone-900 transition-colors">Telegram (About)</a>
          </div>
          <div className="border border-amber-400 bg-amber-50 p-4 mb-10 text-sm text-stone-700">
            ⚠ Кнопка «Telegram» из About использует <code>tracking-wider</code> и <code>border-stone-300</code> вместо <code>tracking-widest</code> и <code>border-stone-900</code>, как в Services — визуально мягче при одинаковой роли (второстепенное действие). <strong>Эталон:</strong> outline-кнопка = <code>border-stone-900 text-stone-900 tracking-widest hover:bg-stone-900 hover:text-white</code>.
          </div>

          <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">Малые — фильтр Portfolio (px-5 py-2)</p>
          <div className="flex flex-wrap gap-2 p-8 bg-white border border-stone-200">
            <button type="button" className="px-5 py-2 text-sm tracking-widest uppercase border bg-stone-900 text-white border-stone-900">Активная</button>
            <button type="button" className="px-5 py-2 text-sm tracking-widest uppercase border border-stone-300 text-stone-500 hover:border-stone-900 hover:text-stone-900 transition-all">Неактивная</button>
            <button type="button" disabled className="px-5 py-2 text-sm tracking-widest uppercase bg-white text-stone-900 opacity-50 border border-stone-300">Disabled (submit form)</button>
          </div>
        </section>

        {/* CARDS */}
        <section id="cards">
          <SectionTitle eyebrow="04" title="Карточки" />
          <p className="text-sm text-stone-500 mb-6">Скругления углов нигде не используются — во всём проекте нет ни одного <code>rounded-*</code>. Это эталон.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-stone-200 p-8">
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Тип А — с рамкой</p>
              <p className="text-sm text-stone-500">Services (обычная), Process step. <code>border-stone-200</code>, без фона и тени.</p>
            </div>
            <div className="bg-stone-50 p-8">
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Тип Б — с фоном</p>
              <p className="text-sm text-stone-500">Reviews. Заливка <code>bg-stone-50</code>, без рамки.</p>
            </div>
            <div className="bg-white p-6 shadow-lg">
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Тип В — с тенью</p>
              <p className="text-sm text-stone-500">Единственный случай — плашка «12 лет практики» в About, лежит поверх фото.</p>
            </div>
          </div>
          <div className="mt-6 border border-amber-400 bg-amber-50 p-4 text-sm text-stone-700">
            ⚠ Два равнозначных способа оформить карточку-в-сетке (А и Б) без единого критерия, когда какой применять. <strong>Эталон:</strong> тип А (рамка, без фона) — для карточек на белом фоне; тип Б (заливка) — только на белом фоне, где рамка неразличима на фоне секции. Тип В — не карточка, а исключение для плавающих элементов поверх фото.
          </div>
        </section>

        {/* FORMS */}
        <section id="forms">
          <SectionTitle eyebrow="05" title="Поля формы" />
          <p className="text-sm text-stone-500 mb-6">Все поля — <code>px-5 py-4 border-stone-700 focus:border-stone-400</code>. Кликните, чтобы увидеть настоящий focus.</p>
          <div className="bg-stone-900 p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Обычное поле" className="w-full bg-transparent border px-5 py-4 text-white placeholder-stone-500 focus:outline-none transition-colors border-stone-700 focus:border-stone-400" />
            <input placeholder="Поле с ошибкой" className="w-full bg-transparent border px-5 py-4 text-white placeholder-stone-500 focus:outline-none transition-colors border-red-500" />
            <select defaultValue="" className="w-full bg-stone-900 border border-stone-700 px-5 py-4 text-stone-400 focus:outline-none focus:border-stone-400 transition-colors">
              <option value="">Select (непрозрачный фон)</option>
            </select>
            <textarea placeholder="Textarea" rows={1} className="w-full bg-transparent border border-stone-700 px-5 py-4 text-white placeholder-stone-500 focus:outline-none focus:border-stone-400 transition-colors resize-none" />
          </div>
          <p className="text-xs text-stone-400 mt-3">Единственное отличие — у <code>&lt;select&gt;</code> непрозрачный <code>bg-stone-900</code> вместо <code>bg-transparent</code>: необходимость (нативный выпадающий список), а не расхождение.</p>
        </section>

        {/* SPACING */}
        <section id="spacing">
          <SectionTitle eyebrow="06" title="Отступы и сетка" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 text-sm">
              <Row label="Контейнер" value="max-w-7xl mx-auto px-6 — одинаково во всех секциях" />
              <Row label="Вертикальный ритм секции" value="py-24 — во всех секциях без исключений" />
              <Row label="Блок заголовка секции" value="mb-16 перед контентом" />
              <Row label="Отступ под эйбрау-подписью" value="mb-3 (Portfolio/Services/Process/Reviews) vs mb-4 (About/Contact)" warn />
              <Row label="Внутренний отступ карточки" value="p-8 — стандарт; p-6 — компактные/плавающие блоки" />
            </div>
            <div className="space-y-3 text-sm">
              <Row label="Зазор сетки, плотная" value="gap-6 — Portfolio" />
              <Row label="Зазор сетки, средняя" value="gap-8 — Services" />
              <Row label="Зазор двух колонок" value="gap-16 — About, Contact" />
            </div>
          </div>
          <div className="mt-6 border border-amber-400 bg-amber-50 p-4 text-sm text-stone-700">
            ⚠ <code>mb-3</code> vs <code>mb-4</code> под подписью-эйбрау — незначительное, но беспричинное расхождение. <strong>Эталон:</strong> <code>mb-4</code> везде.
          </div>
        </section>

        {/* SUMMARY */}
        <section id="summary" className="bg-stone-900 text-white p-8 md:p-12">
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-4">Итог</p>
          <h2 className="text-3xl font-light mb-6">Что взять за эталон</h2>
          <ul className="space-y-3 text-stone-300 text-sm leading-relaxed">
            <li>— Фон/текст страницы: <code className="text-white">stone-50</code> / <code className="text-white">stone-900</code> вместо кастомных <code className="text-white">#fafaf8</code> / <code className="text-white">#1a1a1a</code>.</li>
            <li>— Капс-подписи: <code className="text-white">tracking-[0.4em]</code> для эйбрау-лейблов секций, <code className="text-white">tracking-widest</code> для кнопок и навигации. Убрать <code className="text-white">tracking-wider</code> и одиночный <code className="text-white">tracking-[0.3em]</code>.</li>
            <li>— Второстепенная (outline) кнопка: <code className="text-white">border-stone-900 text-stone-900 tracking-widest hover:bg-stone-900 hover:text-white</code>.</li>
            <li>— Карточка-в-сетке: рамка <code className="text-white">border-stone-200</code> на белом фоне; заливка <code className="text-white">bg-stone-50</code> — только когда рамка сольётся с фоном секции.</li>
            <li>— Отступ под эйбрау-подписью: <code className="text-white">mb-4</code> везде.</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-2">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-light text-stone-900">{title}</h2>
    </div>
  )
}

function Row({ label, value, warn }) {
  return (
    <div className={`flex flex-col gap-1 p-3 border ${warn ? 'border-amber-300 bg-amber-50' : 'border-stone-200'}`}>
      <span className="text-xs tracking-widest uppercase text-stone-400">{label}</span>
      <span className="text-stone-700">{value}</span>
    </div>
  )
}
