import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Applications from './pages/Applications.jsx'
import Modules from './pages/Modules.jsx'
import Features from './pages/Features.jsx'
import UseCases from './pages/UseCases.jsx'
import About from './pages/About.jsx'
import Roadmap from './pages/Roadmap.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import ScrollToTop from './components/ScrollToTop';
import Dams from "./pages/applications/Dams";
import Mining from "./pages/applications/Mining";
import DigitalTwin from "./pages/modules/DigitalTwin.jsx";
import OurAIAssistant from "./pages/modules/OurAIAssistant.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Faq from "./pages/Faq.jsx";
import Tunnels from './pages/applications/Tunnels.jsx'
import Bridges from './pages/applications/Bridges.jsx'





export default function App() {
 
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-cloud text-ink">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/features" element={<Features />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/applications/dams" element={<Dams />} />
            <Route path="/applications/mining" element={<Mining />} />
            <Route path="/applications/tunnels" element={<Tunnels />} />
            <Route path="/applications/bridges" element={<Bridges/>} />
            <Route path="/modules/digital-twin" element={<DigitalTwin />} />
            <Route path="/modules/ada" element={<OurAIAssistant />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<Faq />} />

         
              
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
