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




import BlogPostGeotechnical from './blog/terastamp-joins-aetos.jsx'

import Transportation from './pages/applications/Transportation.jsx'
import Construction from './pages/applications/Construction.jsx'
import EnergyInfrastructure from './pages/applications/Energy.jsx'
import EnvironmentalMonitoring from './pages/applications/Environment.jsx'
import LandslidesAndDisasterManagement from './pages/applications/Landslides.jsx'
import Pipelines from './pages/applications/Pipelines.jsx'
import SmartCities from './pages/applications/SmartCities.jsx'
import StructuralHealthMonitoring from './pages/applications/StructuralHealth.jsx'
import NewsletterSection from './pages/NewsletterSection.jsx'
import LegalNoticePage from './pages/Legalnotice.jsx'
import PurpleLineSection2 from './use-cases/purplelinesection2.jsx'
import PurpleLine3Stations from './use-cases/PurpleLine3Stations.jsx'
import PurpleLine3Tunnels from './use-cases/PurpleLine3Tunnels.jsx'
import VtaBartPhase2 from './use-cases/VtaBartPhase2.jsx'
import TunnelMonitoringBlog from './blog/tunnel-monitoring-made-simple.jsx'
import DigitalTransformationBlog from './blog/digital-transformation-construction.jsx'
import HelpCenter from './pages/Helpcenter.jsx'
import JoinUs from './pages/joinus.jsx'
import PrivacyPolicyPage from './pages/Privacypolicy.jsx'
import TermsOfUsePage from './pages/Termsofuses.jsx'
import CookiePolicyPage from './pages/Cookies.jsx'
import CopyrightPolicyPage from './pages/Copyright.jsx'
import AccessibilityPage from './pages/Accessibility.jsx'





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
             <Route path="/applications/dams" element={<Dams />} />
            <Route path="/applications/mining" element={<Mining />} />
            <Route path="/applications/tunnels" element={<Tunnels />} />
            <Route path="/applications/bridges" element={<Bridges/>} />
            <Route path="/applications/transportation" element={<Transportation/>} />
            <Route path="/applications/construction" element={<Construction/>} />
            <Route path="/applications/energy" element={<EnergyInfrastructure/>} />
            <Route path="/applications/environment" element={<EnvironmentalMonitoring/>} />
            <Route path="/applications/landslides" element={<LandslidesAndDisasterManagement/>} />
            <Route path="/applications/pipelines" element={<Pipelines/>} />
            <Route path="/applications/smart-cities" element={<SmartCities/>} />
            <Route path="/applications/structural-health" element={<StructuralHealthMonitoring/>} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/features" element={<Features />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/use-cases/purplelinesection2" element={<PurpleLineSection2/>} />
            <Route path="/use-cases/vtaBartPhase2" element={<VtaBartPhase2 />} />
            <Route path="/use-cases/purpleline3station" element={<PurpleLine3Stations/>} />
            <Route path="/use-cases/purpleline3tunnels" element={<PurpleLine3Tunnels/>} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/blog" element={<Blog />} />
            
            <Route path="/blog/digital-transformation-construction" element={<DigitalTransformationBlog/>} />
            <Route path="/blog/tunnel-monitoring-made-simple" element={<TunnelMonitoringBlog/>} />
            <Route path="/blog/digitalmonitoring" element={<BlogPostGeotechnical/>} />
            <Route path="/contact" element={<Contact />} />
           
            <Route path="/modules/digital-twin" element={<DigitalTwin />} />
            <Route path="/modules/ada" element={<OurAIAssistant />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/Helpcenter" element={<HelpCenter/>} />
            <Route path="/joinus" element={<JoinUs/>} />
             <Route path="/newsletter" element={<NewsletterSection/>} />
             <Route path="/legal-notice" element={<LegalNoticePage/>} />
             <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
             <Route path="/terms" element={<TermsOfUsePage/>} />
              <Route path="/cookies" element={<CookiePolicyPage/>}/>
              <Route path="/copyright" element={<CopyrightPolicyPage/>}/>
              <Route path="/accessibility" element={<AccessibilityPage/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
