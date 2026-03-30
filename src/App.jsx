import GridBackground from './components/GridBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          Crafted with ❤️ &amp; ⚡ by <span>Palash Jana</span> &mdash; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
