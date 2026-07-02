import { contact } from '../data'

export default function Footer() {
  return (
    <footer className="py-8 bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Наталья Селезнёва. Дизайн интерьеров.</p>
        <p>{contact.address}</p>
      </div>
    </footer>
  )
}
