import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import ShowcasePage from '@/pages/ShowcasePage'; // Assuming ShowcasePage is in '@/pages/ShowcasePage'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/showcase" element={<ShowcasePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
