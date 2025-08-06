import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Services } from './components/services'
import { Registration } from './components/registration'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { ThemeProvider } from './components/theme-provider'
import { SEO } from './components/seo'
import { InstructorsPage } from './pages/InstructorsPage'
import './App.css'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Registration />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
