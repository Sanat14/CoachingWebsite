import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Services } from './components/services'
import { Registration } from './components/registration'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { ThemeProvider } from './components/theme-provider'
import { SEO } from './components/seo'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Registration />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
