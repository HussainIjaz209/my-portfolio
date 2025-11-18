import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Counter from './components/Counter';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import HireMe from './components/HireMe';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 100,
      easing: 'ease-in-out',
      mirror: false
    });
    
    // Refresh AOS when route changes
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Counter />
        <About />
        <Skills />
        <Services />
        <HireMe />
        <Projects />
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;