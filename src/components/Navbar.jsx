import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo">
        <span className="logo-bracket">&lt;</span>
        <span className="logo-name">PJ</span>
        <span className="logo-bracket">/&gt;</span>
      </a>

      <button
        className={`navbar__burger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
