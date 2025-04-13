import Hero from './Hero'
import CallToAction from './CallToAction'
import Gallery from './Gallery'
import VideoSlider from './VideoSlider'
import MethodSection from './MethodSection'
// import TimelineSection from './TimelineSection' // Componente desativado
import ResultsSection from './ResultsSection'
import ComparisonSection from './ComparisonSection'
import DemonstrationSection from './DemonstrationSection'
import ParaQuemSection from './ParaQuemSection'
import EntregaveisSection from './EntregaveisSection'
import SuporteComunidadeGarantiaSection from './SuporteComunidadeGarantiaSection'
import MediaSection from './MediaSection'
import FAQSection from './FAQSection'
import FinalCTASection from './FinalCTASection'


export { 
  Hero,
  CallToAction,
  Gallery,
  VideoSlider,
  MethodSection,
  // TimelineSection, // Componente desativado
  ResultsSection,
  ComparisonSection,
  DemonstrationSection,
  ParaQuemSection,
  EntregaveisSection,
  SuporteComunidadeGarantiaSection,
  MediaSection,
  FAQSection,
  FinalCTASection
}

// Export ordered page blocks with metadata
export const pageBlocks = [
  { id: 10, name: 'Hero', component: Hero },
  { id: 20, name: 'CallToAction', component: CallToAction },
  { id: 30, name: 'Gallery', component: Gallery },
  { id: 40, name: 'VideoSlider', component: VideoSlider },
  { id: 50, name: 'MethodSection', component: MethodSection },
  // { id: 60, name: 'TimelineSection', component: TimelineSection }, // Componente desativado
  { id: 70, name: 'ResultsSection', component: ResultsSection },
  { id: 80, name: 'ComparisonSection', component: ComparisonSection },
  { id: 85, name: 'DemonstrationSection', component: DemonstrationSection },
  { id: 87, name: 'ParaQuemSection', component: ParaQuemSection },
  { id: 88, name: 'EntregaveisSection', component: EntregaveisSection },
  { id: 89, name: 'SuporteComunidadeGarantiaSection', component: SuporteComunidadeGarantiaSection },
  { id: 90, name: 'MediaSection', component: MediaSection },
  { id: 100, name: 'FAQSection', component: FAQSection },
  { id: 110, name: 'FinalCTASection', component: FinalCTASection }
]
