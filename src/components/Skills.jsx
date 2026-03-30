import { MotionDiv, MotionH2, MotionSpan } from '../motionComponents';
import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#00ffff',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Three.js / WebGL', level: 78 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    category: 'Backend',
    color: '#ff00ff',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Python / Django', level: 72 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 68 },
    ],
  },
  {
    category: 'Tools & Cloud',
    color: '#39ff14',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Git / GitHub', level: 92 },
      { name: 'AWS / Vercel', level: 72 },
    ],
  },
];

const techBadges = [
  'React', 'Node.js', 'Three.js', 'MongoDB', 'PostgreSQL',
  'Docker', 'Python', 'TypeScript', 'GraphQL', 'AWS',
  'Vite', 'Git', 'Tailwind', 'Express', 'WebGL',
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <MotionH2
          className="section-title neon-text-magenta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills &amp; Technologies
        </MotionH2>

        <div className="skills__groups">
          {skillGroups.map(({ category, color, skills }, gi) => (
            <MotionDiv
              key={category}
              className="skill-group"
              style={{ '--group-color': color }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
            >
              <h3 className="skill-group__title">{category}</h3>
              <div className="skill-list">
                {skills.map(({ name, level }, i) => (
                  <div key={name} className="skill-item">
                    <div className="skill-item__header">
                      <span className="skill-item__name">{name}</span>
                      <span className="skill-item__level">{level}%</span>
                    </div>
                    <div className="skill-bar">
                      <MotionDiv
                        className="skill-bar__fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: gi * 0.1 + i * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Tech badge cloud */}
        <MotionDiv
          className="tech-badges"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {techBadges.map((tech, i) => (
            <MotionSpan
              key={tech}
              className="tech-badge"
              whileHover={{ scale: 1.1, y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.04 }}
            >
              {tech}
            </MotionSpan>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
