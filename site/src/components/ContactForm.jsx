import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { contact } from '../data'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 800))
    console.log('Form data:', data)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-4">Контакт</p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">Обсудим<br /><span className="italic text-stone-400">ваш проект</span></h2>
            <p className="text-stone-400 leading-relaxed mb-8">Оставьте заявку — отвечу в течение дня. Расскажите о задаче, и я подготовлю предварительную концепцию.</p>
            <div className="space-y-4 text-sm text-stone-400">
              <div className="flex items-center gap-3"><span className="w-8 h-px bg-stone-600" /><span>{contact.address}</span></div>
              <div className="flex items-center gap-3"><span className="w-8 h-px bg-stone-600" /><a href={contact.telegramUrl} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Telegram: {contact.telegramHandle}</a></div>
              <div className="flex items-center gap-3"><span className="w-8 h-px bg-stone-600" /><a href={contact.phoneHref} className="hover:text-white transition-colors">{contact.phone}</a></div>
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="text-center py-16 border border-stone-700">
                <p className="text-4xl mb-4">✓</p>
                <h3 className="text-2xl font-light mb-3">Заявка отправлена</h3>
                <p className="text-stone-400 text-sm">Отвечу в течение дня в рабочее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                <div>
                  <input {...register('name', { required: 'Введите имя' })} placeholder="Имя *" className={`w-full bg-transparent border px-5 py-4 text-white placeholder-stone-500 focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-stone-700 focus:border-stone-400'}`} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register('phone', { required: 'Введите телефон', pattern: { value: /^[\d\s\+\-\(\)]{7,20}$/, message: 'Неверный формат телефона' } })} placeholder="Телефон *" type="tel" className={`w-full bg-transparent border px-5 py-4 text-white placeholder-stone-500 focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-stone-700 focus:border-stone-400'}`} />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <input {...register('email', { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Неверный формат email' } })} placeholder="Email" type="email" className={`w-full bg-transparent border px-5 py-4 text-white placeholder-stone-500 focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-stone-700 focus:border-stone-400'}`} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <select {...register('budget')} className="w-full bg-stone-900 border border-stone-700 px-5 py-4 text-stone-400 focus:outline-none focus:border-stone-400 transition-colors">
                  <option value="">Бюджет проекта</option>
                  <option value="5-10">5–10 млн ₽</option>
                  <option value="10-20">10–20 млн ₽</option>
                  <option value="20+">Более 20 млн ₽</option>
                </select>
                <textarea {...register('message')} placeholder="Расскажите о проекте (площадь, локация, пожелания)" rows={4} className="w-full bg-transparent border border-stone-700 px-5 py-4 text-white placeholder-stone-500 focus:outline-none focus:border-stone-400 transition-colors resize-none" />
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-white text-stone-900 text-sm tracking-widest uppercase hover:bg-stone-100 disabled:opacity-50 transition-all">
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </button>
                <p className="text-xs text-stone-600 text-center">Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
