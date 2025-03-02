import Hero from './Hero'
import CallToAction from './CallToAction'
import Gallery from './Gallery'
import VideoSlider from './VideoSlider'
import MethodSection from './MethodSection'
import TimelineSection from './TimelineSection'
import ResultsSection from './ResultsSection'
import ScenariosSection from './ScenariosSection'
import MediaSection from './MediaSection'
import FAQSection from './FAQSection'
import FinalCTASection from './FinalCTASection'


export { 
  Hero,
  CallToAction,
  Gallery,
  VideoSlider,
  MethodSection,
  TimelineSection,
  ResultsSection,
  ScenariosSection,
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
  { id: 60, name: 'TimelineSection', component: TimelineSection },
  { id: 70, name: 'ResultsSection', component: ResultsSection },
  { id: 80, name: 'ScenariosSection', component: ScenariosSection },
  { id: 90, name: 'MediaSection', component: MediaSection },
  { id: 100, name: 'FAQSection', component: FAQSection },
  { id: 110, name: 'FinalCTASection', component: FinalCTASection }
]
