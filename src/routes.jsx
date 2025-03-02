import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import StyleGuide from './pages/StyleGuide';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/style-guide" element={<StyleGuide />} />
    </Routes>
  );
}
