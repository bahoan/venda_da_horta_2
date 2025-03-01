import Hero from './components/Hero'
import CallToAction from './components/CallToAction'
import Gallery from './components/Gallery'
import VideoSlider from './components/VideoSlider'
import MethodSection from './components/MethodSection'
import TimelineSection from './components/TimelineSection'
import ResultsSection from './components/ResultsSection'
import ScenariosSection from './components/ScenariosSection'
import MediaSection from './components/MediaSection'
import FAQSection from './components/FAQSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'
import { VERSION } from './version.js'

export default function App() {
  return (
    <>
      <div className="fixed bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 z-50">
        Version: {VERSION}
      </div>
      <main className="min-h-screen">
        <Hero />
        <CallToAction />
        <Gallery />
        <VideoSlider />
        <MethodSection />
        <TimelineSection />
        <ResultsSection />
        <ScenariosSection />
        <MediaSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
