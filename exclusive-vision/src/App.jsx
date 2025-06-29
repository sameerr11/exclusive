import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Workflow from './components/Workflow'
import Services from './components/Services'
import Industries from './components/Industries'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIEffects from './components/AIEffects'
import './App.css'

function App() {
  return (
    <div className="App">
      <AIEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Workflow />
        <Services />
        <Industries />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
