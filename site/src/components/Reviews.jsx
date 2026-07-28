import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Keyboard } from 'swiper/modules'
import { reviews } from '../data'

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Клиенты</p>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900">Отзывы</h2>
        </div>
        <Swiper modules={[Pagination, Autoplay, Keyboard]} pagination={{ clickable: true }} autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }} keyboard={{ enabled: true }} loop spaceBetween={32} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }} className="pb-12 [--swiper-theme-color:#1c1917]">
          {reviews.map(review => (
            <SwiperSlide key={review.id}>
              <div className="bg-stone-50 p-8 h-full flex flex-col">
                <div className="flex mb-4" aria-hidden="true">{[...Array(5)].map((_, i) => <span key={i} className="text-stone-400 text-sm">★</span>)}</div>
                <span className="sr-only">Оценка 5 из 5</span>
                <p className="text-stone-600 leading-relaxed flex-1 mb-6 italic">«{review.text}»</p>
                <div className="flex items-center gap-4 pt-6 border-t border-stone-200">
                  <div className="w-10 h-10 bg-stone-900 flex items-center justify-center text-white text-sm font-light" aria-hidden="true">{review.avatar}</div>
                  <div>
                    <p className="text-stone-900 font-light">{review.name}</p>
                    <p className="text-xs text-stone-400">{review.project}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
