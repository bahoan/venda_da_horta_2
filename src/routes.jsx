import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import StyleGuide from './pages/StyleGuide';
import { trackPageView } from './utils/gtm';

export default function AppRoutes() {
  const location = useLocation();

  // Rastreia mudanças de página
  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/style-guide" element={<StyleGuide />} />
    </Routes>
  );
}
