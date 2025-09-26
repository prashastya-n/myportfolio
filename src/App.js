import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy-loaded components
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>

        <Suspense fallback={<div className="text-center py-10">Loading About...</div>}>
          <section id="about">
            <About />
          </section>
        </Suspense>

        <Suspense fallback={<div className="text-center py-10">Loading Projects...</div>}>
          <section id="projects">
            <Projects />
          </section>
        </Suspense>

        <Suspense fallback={<div className="text-center py-10">Loading Skills...</div>}>
          <section id="skills">
            <Skills />
          </section>
        </Suspense>

        <Suspense fallback={<div className="text-center py-10">Loading Contact...</div>}>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;
