import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import NotFound from './Pages/NotFound/NotFound';

const titles = {
  '/': 'Art By Maryam — Contemporary Calligraphy & Figurative Art',
  '/about': 'About the Artist — Art By Maryam',
};

// Resets scroll and document title on route changes (hash links scroll natively).
const RouteEffects = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] ?? 'Page Not Found — Art By Maryam';
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App = () => {
  return (
    <Router>
      <RouteEffects />
      <a href="#main" className="skip-link">Skip to content</a>
      <NavBar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
