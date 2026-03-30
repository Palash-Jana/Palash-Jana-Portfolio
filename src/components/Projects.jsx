import { MotionDiv, MotionArticle, MotionH2 } from '../motionComponents';
import './Projects.css';

const projects = [
  {
    title: 'NeuroShop',
    description:
      'AI-powered e-commerce platform with real-time recommendations and dynamic pricing. Built with React, Node.js and Python ML service.',
    tags: ['React', 'Node.js', 'Python', 'MongoDB', 'AI/ML'],
    color: '#00ffff',
    icon: '🛍️',
    demo: '#',
    source: '#',
  },
  {
    title: 'CyberTask',
    description:
      'Futuristic project management tool with real-time collaboration, Kanban board, and WebSocket sync across devices.',
    tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    color: '#ff00ff',
    icon: '⚡',
    demo: '#',
    source: '#',
  },
  {
    title: 'NeonVerse',
    description:
      'Immersive 3D portfolio template built with Three.js, featuring interactive avatars, shader animations, and neon aesthetics.',
    tags: ['Three.js', 'WebGL', 'GLSL', 'React', 'Vite'],
    color: '#39ff14',
    icon: '🌐',
    demo: '#',
    source: '#',
  },
  {
    title: 'DataFlow',
    description:
      'Data pipeline dashboard for monitoring ETL workflows, visualizing metrics in real-time with animated charts and alerts.',
    tags: ['React', 'D3.js', 'GraphQL', 'Docker', 'AWS'],
    color: '#bf00ff',
    icon: '📊',
    demo: '#',
    source: '#',
  },
  {
    title: 'CryptoScan',
    description:
      'Crypto portfolio tracker with live price feeds, profit/loss analytics, and AI-driven market sentiment analysis.',
    tags: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
    color: '#ff6b00',
    icon: '💹',
    demo: '#',
    source: '#',
  },
  {
    title: 'DevCollab',
    description:
      'Real-time collaborative code editor with syntax highlighting, video chat, and GitHub integration for pair programming.',
    tags: ['React', 'Monaco', 'WebRTC', 'Socket.io'],
    color: '#00ffff',
    icon: '👨‍💻',
    demo: '#',
    source: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <MotionH2
          className="section-title neon-text-green"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </MotionH2>

        <div className="projects__grid">
          {projects.map(({ title, description, tags, color, icon, demo, source }, i) => (
            <MotionArticle
              key={title}
              className="project-card"
              style={{ '--card-color': color }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-card__icon">{icon}</div>
              <h3 className="project-card__title">{title}</h3>
              <p className="project-card__desc">{description}</p>
              <div className="project-card__tags">
                {tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-card__links">
                <a href={demo} className="project-link project-link--demo">
                  Live Demo ↗
                </a>
                <a href={source} className="project-link project-link--source">
                  Source ⌥
                </a>
              </div>
              <MotionDiv className="project-card__glow" />
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
}
