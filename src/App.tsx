import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
    <HelmetProvider>
      <Helmet>
        <title>Gmail Dot Trick Generator</title>
        <meta
          name="description"
          content="Generate unique Gmail addresses using the Gmail dot trick. Enhance your email usage with unlimited variations while keeping the same inbox."
        />
        <meta
          name="keywords"
          content="Gmail dot trick, email generator, Gmail hacks, email variations, Gmail tips"
        />
        <meta name="author" content="Your Name or Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Gmail Dot Trick Generator" />
        <meta
          property="og:description"
          content="Generate unlimited Gmail address variations effortlessly. Use the Gmail dot trick for improved email management."
        />
        <meta property="og:url" content="https://gmail-dot-trick.pages.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://gmail-dot-trick.pages.dev/og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gmail Dot Trick Generator" />
        <meta
          name="twitter:description"
          content="Generate unlimited Gmail address variations effortlessly. Use the Gmail dot trick for improved email management."
        />
        <meta name="twitter:image" content="https://gmail-dot-trick.pages.dev/og.jpg" />
      </Helmet>

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
    </HelmetProvider>
  );
}

export default App;
