import Nav from './components/Nav'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Process />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
