import { MotionDiv, MotionH2 } from '../motionComponents';
import './About.css';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '25+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '100%', label: 'Dedication' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <MotionH2
          className="section-title neon-text-cyan"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </MotionH2>

        <div className="about__layout">
          {/* Terminal-style info card */}
          <MotionDiv
            className="about__terminal"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="terminal__header">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__title">palash@portfolio:~</span>
            </div>
            <div className="terminal__body">
              <p><span className="cmd-prompt">$ </span><span className="cmd-text">whoami</span></p>
              <p className="cmd-output">Palash Jana</p>
              <p><span className="cmd-prompt">$ </span><span className="cmd-text">cat about.txt</span></p>
              <p className="cmd-output">
                Hey! I&apos;m a passionate Full Stack Developer who loves building
                scalable web applications and immersive 3D experiences. I thrive
                at the intersection of creativity and technology.
              </p>
              <p className="cmd-output">
                When I&apos;m not coding, you&apos;ll find me exploring new tech stacks,
                contributing to open source, or diving deep into Three.js and
                WebGL to push the boundaries of the web.
              </p>
              <p><span className="cmd-prompt">$ </span><span className="cmd-text">cat location.txt</span></p>
              <p className="cmd-output">India 🇮🇳</p>
              <p><span className="cmd-prompt">$ </span><span className="cmd-text">echo $STATUS</span></p>
              <p className="cmd-output neon-text-green">Open to opportunities ✓</p>
              <p className="cmd-cursor"><span className="cmd-prompt">$ </span><span className="blink-cursor">▋</span></p>
            </div>
          </MotionDiv>

          {/* Stats cards */}
          <div className="about__stats">
            {stats.map(({ value, label }, i) => (
              <MotionDiv
                key={label}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-card__value neon-text-magenta">{value}</span>
                <span className="stat-card__label">{label}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
