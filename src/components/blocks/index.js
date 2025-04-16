import { lazy, Suspense } from 'react'

// Componentes acima da dobra (carregados imediatamente)
import Hero from './Hero'
import CallToAction from './CallToAction'

// Componentes abaixo da dobra (carregados sob demanda)
const Gallery = lazy(() => import('./Gallery'))
const VideoSlider = lazy(() => import('./VideoSlider'))
const MethodSection = lazy(() => import('./MethodSection'))
// const TimelineSection = lazy(() => import('./TimelineSection')) // Componente desativado
const ResultsSection = lazy(() => import('./ResultsSection'))
const ComparisonSection = lazy(() => import('./ComparisonSection'))
const DemonstrationSection = lazy(() => import('./DemonstrationSection'))
const ParaQuemSection = lazy(() => import('./ParaQuemSection'))
const EntregaveisSection = lazy(() => import('./EntregaveisSection'))
const SuporteComunidadeGarantiaSection = lazy(() => import('./SuporteComunidadeGarantiaSection'))
const MediaSection = lazy(() => import('./MediaSection'))
const FAQSection = lazy(() => import('./FAQSection'))
const FinalCTASection = lazy(() => import('./FinalCTASection'))

// Componente de fallback para o lazy loading
const LazyLoadFallback = () => (
  <div className="w-full py-12 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-md w-full max-w-4xl h-64"></div>
  </div>
)


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
// Função auxiliar para envolver componentes lazy em Suspense
const withSuspense = (Component, priority = 'low') => {
  // Componentes de alta prioridade usam um fallback mais simples para carregar mais rápido
  const fallback = priority === 'high' ? 
    <div className="w-full py-4"></div> : 
    <LazyLoadFallback />;
  
  return (props) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export const pageBlocks = [
  // Componentes prioritários (carregados imediatamente)
  { id: 10, name: 'Hero', component: Hero },
  { id: 20, name: 'CallToAction', component: CallToAction },
  
  // Componentes carregados sob demanda
  { id: 30, name: 'Gallery', component: withSuspense(Gallery, 'high') },
  { id: 40, name: 'VideoSlider', component: withSuspense(VideoSlider) },
  { id: 50, name: 'MethodSection', component: withSuspense(MethodSection) },
  // { id: 60, name: 'TimelineSection', component: withSuspense(TimelineSection) }, // Componente desativado
  { id: 70, name: 'ResultsSection', component: withSuspense(ResultsSection) },
  { id: 80, name: 'ComparisonSection', component: withSuspense(ComparisonSection) },
  { id: 85, name: 'DemonstrationSection', component: withSuspense(DemonstrationSection) },
  { id: 87, name: 'ParaQuemSection', component: withSuspense(ParaQuemSection) },
  { id: 88, name: 'EntregaveisSection', component: withSuspense(EntregaveisSection) },
  { id: 89, name: 'SuporteComunidadeGarantiaSection', component: withSuspense(SuporteComunidadeGarantiaSection) },
  { id: 90, name: 'MediaSection', component: withSuspense(MediaSection) },
  { id: 100, name: 'FAQSection', component: withSuspense(FAQSection) },
  { id: 110, name: 'FinalCTASection', component: withSuspense(FinalCTASection) }
]
