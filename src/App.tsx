import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PetList from './pages/PetList';
import AIAnalysis from './pages/AIAnalysis';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex min-h-screen bg-surface-subtle selection:bg-primary-100 transition-colors duration-base">
        <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow p-8 dark:bg-surface-subtle">
          <div className="max-w-[1280px] mx-auto space-y-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pets" element={<PetList />} />
              <Route path="/analysis" element={<AIAnalysis />} />
              <Route path="/settings" element={<div className="text-h1">Settings</div>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
