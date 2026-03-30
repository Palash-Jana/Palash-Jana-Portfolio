import { useEffect, useRef } from 'react';
import { MotionDiv } from '../motionComponents';
import Avatar3D from './Avatar3D';
import './Hero.css';

const TYPED_STRINGS = [
  'Full Stack Developer',
  'React & Node.js Expert',
  '3D Web Enthusiast',
  'UI/UX Craftsman',
];

function TypedText() {
  const el = useRef(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;

    function tick() {
      const current = TYPED_STRINGS[indexRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        if (el.current) el.current.textContent = current.slice(0, charRef.current);
        if (charRef.current === current.length) {
          deletingRef.current = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        charRef.current--;
        if (el.current) el.current.textContent = current.slice(0, charRef.current);
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % TYPED_STRINGS.length;
        }
      }
      timeout = setTimeout(tick, deletingRef.current ? 60 : 90);
    }

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="typed-text">
      <span ref={el} />
      <span className="cursor">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__layout">
        {/* Left: text content */}
        <MotionDiv
          className="hero__content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="hero__greeting">
            <span className="hero__greeting-bracket">&gt;</span> Hello, World!
          </p>

          <h1 className="hero__name neon-text-cyan">
            Palash Jana
          </h1>

          <h2 className="hero__role">
            <TypedText />
          </h2>

          <p className="hero__bio">
            Crafting immersive digital experiences with cutting-edge technology.
            Passionate about clean code, stunning visuals, and innovative solutions.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--outline">
              Hire Me
            </a>
          </div>

          <div className="hero__social">
            <a href="https://github.com/Palash-Jana" target="_blank" rel="noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/palash-jana" target="_blank" rel="noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:palashjana@example.com" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.909 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </a>
          </div>
        </MotionDiv>

        {/* Right: 3D Avatar */}
        <MotionDiv
          className="hero__avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="avatar-glow-ring" />
          <Avatar3D />
          <p className="avatar-hint">Drag to rotate</p>
        </MotionDiv>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="hero__scroll-cue">
        <span className="scroll-cue__text">Scroll</span>
        <span className="scroll-cue__arrow">↓</span>
      </a>
    </section>
  );
}
