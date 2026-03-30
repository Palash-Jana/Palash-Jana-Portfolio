import { useState } from 'react';
import { MotionDiv, MotionForm, MotionH2, MotionButton } from '../motionComponents';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sent' | 'error' | null

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending — replace with your backend or EmailJS
    if (form.name && form.email && form.message) {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <MotionH2
          className="section-title neon-text-cyan"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </MotionH2>

        <div className="contact__layout">
          {/* Info column */}
          <MotionDiv
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="contact__intro">
              Whether you have a project idea, a job opportunity, or just want
              to say hi — my inbox is always open!
            </p>

            <div className="contact__details">
              <div className="contact-detail">
                <span className="contact-detail__icon">📧</span>
                <a href="mailto:palashjana@example.com" className="contact-detail__link">
                  palashjana@example.com
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon">🐙</span>
                <a href="https://github.com/Palash-Jana" target="_blank" rel="noreferrer" className="contact-detail__link">
                  github.com/Palash-Jana
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon">💼</span>
                <a href="https://linkedin.com/in/palash-jana" target="_blank" rel="noreferrer" className="contact-detail__link">
                  linkedin.com/in/palash-jana
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon">📍</span>
                <span className="contact-detail__text">India 🇮🇳</span>
              </div>
            </div>
          </MotionDiv>

          {/* Form */}
          <MotionForm
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                id="name"
                className="form-input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                id="email"
                className="form-input"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-input form-textarea"
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            {status === 'sent' && (
              <p className="form-status form-status--success">
                ✅ Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status form-status--error">
                ❌ Please fill out all fields.
              </p>
            )}

            <MotionButton
              type="submit"
              className="btn btn--primary form-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message →
            </MotionButton>
          </MotionForm>
        </div>
      </div>
    </section>
  );
}
