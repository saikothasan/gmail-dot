import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Generator } from './components/Generator';
import { Features } from './components/sections/Features';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Privacy } from './components/sections/Privacy';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const theme = {
    isDark,
    toggle: () => setIsDark(!isDark)
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header theme={theme} />
      <Hero />
      <Generator />
      <Features />
      <About />
      <FAQ />
      <Privacy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;