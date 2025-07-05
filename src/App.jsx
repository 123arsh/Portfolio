import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import emailjs from '@emailjs/browser';

// Tech icons inside colorful blobs with staggered pop-in animation
const techIcons = [
  {
    name: 'Node.js',
    svg: (
      <svg viewBox="0 0 60 60" width="60" height="60" fill="none">
        <defs>
          <radialGradient id="nodeBlob" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b9fbc0" />
            <stop offset="100%" stopColor="#27ae60" />
          </radialGradient>
        </defs>
        <ellipse cx="30" cy="30" rx="28" ry="24" fill="url(#nodeBlob)" />
        <g>
          <path d="M30 16l12 7v14l-12 7-12-7V23l12-7z" fill="#fff" />
        </g>
      </svg>
    ),
    style: { left: 0, top: 10, animationDelay: '0s', zIndex: 1 },
  },
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 60 60" width="60" height="60" fill="none">
        <defs>
          <radialGradient id="reactBlob" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b3ecff" />
            <stop offset="100%" stopColor="#00d8ff" />
          </radialGradient>
        </defs>
        <ellipse cx="30" cy="30" rx="28" ry="24" fill="url(#reactBlob)" />
        <g>
          <g fill="none" stroke="#fff" strokeWidth="2">
            <ellipse cx="30" cy="30" rx="12" ry="5" />
            <ellipse cx="30" cy="30" rx="5" ry="12" />
            <ellipse cx="30" cy="30" rx="12" ry="5" transform="rotate(60 30 30)" />
            <ellipse cx="30" cy="30" rx="12" ry="5" transform="rotate(120 30 30)" />
          </g>
          <circle cx="30" cy="30" r="3" fill="#fff" />
        </g>
      </svg>
    ),
    style: { left: 70, top: -20, animationDelay: '0.15s', zIndex: 1 },
  },
  {
    name: 'MongoDB',
    svg: (
      <svg viewBox="0 0 60 60" width="60" height="60" fill="none">
        <defs>
          <radialGradient id="mongoBlob" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d1fae5" />
            <stop offset="100%" stopColor="#13aa52" />
          </radialGradient>
        </defs>
        <ellipse cx="30" cy="30" rx="28" ry="24" fill="url(#mongoBlob)" />
        <g>
          <path d="M30 16c2 8 4 10 4 14s-2 6-4 10c-2-4-4-6-4-10s2-6 4-14z" fill="#fff" />
        </g>
      </svg>
    ),
    style: { right: 70, top: -20, animationDelay: '0.3s', zIndex: 1 },
  },
  {
    name: 'Express',
    svg: (
      <svg viewBox="0 0 60 60" width="60" height="60" fill="none">
        <defs>
          <radialGradient id="expressBlob" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e0e7ef" />
            <stop offset="100%" stopColor="#22223b" />
          </radialGradient>
        </defs>
        <ellipse cx="30" cy="30" rx="28" ry="24" fill="url(#expressBlob)" />
        <g>
          <text x="30" y="38" textAnchor="middle" fontSize="20" fill="#fff" fontFamily="Arial">Ex</text>
        </g>
      </svg>
    ),
    style: { right: 0, top: 10, animationDelay: '0.45s', zIndex: 1 },
  },
  {
    name: 'Postgres',
    svg: (
      <svg viewBox="0 0 70 60" width="70" height="60" fill="none">
        <defs>
          <radialGradient id="pgBlob" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b3c6ff" />
            <stop offset="100%" stopColor="#336791" />
          </radialGradient>
        </defs>
        <ellipse cx="35" cy="30" rx="28" ry="24" fill="url(#pgBlob)" />
        <g>
          <text x="35" y="38" textAnchor="middle" fontSize="18" fill="#fff" fontFamily="Arial">PG</text>
        </g>
      </svg>
    ),
    style: { left: '50%', bottom: 0, transform: 'translateX(-50%)', animationDelay: '0.6s', zIndex: 1 },
  },
];

const ContactModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID with your EmailJS credentials
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, 'YOUR_USER_ID');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{ background: '#111827', color: '#fff', borderRadius: '1.5rem', padding: '2rem', minWidth: 320, boxShadow: '0 4px 32px rgba(0,0,0,0.3)', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer' }}>&times;</button>
        <h2 style={{ marginBottom: 16, fontSize: '1.3rem', fontWeight: 600 }}>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={{ width: '100%', marginBottom: 12, padding: 8, borderRadius: 8, border: 'none' }} />
          <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={{ width: '100%', marginBottom: 12, padding: 8, borderRadius: 8, border: 'none' }} />
          <textarea placeholder="Message" required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ width: '100%', marginBottom: 12, padding: 8, borderRadius: 8, border: 'none', minHeight: 80 }} />
          <button type="submit" className="contact-btn" style={{ width: '100%' }} disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
        </form>
        {status === 'success' && <div style={{ color: '#38bdf8', marginTop: 12, textAlign: 'center', fontWeight: 600 }}>Message sent successfully!</div>}
        {status === 'error' && <div style={{ color: '#f87171', marginTop: 12, textAlign: 'center', fontWeight: 600 }}>Request not sent. Please try again.</div>}
      </div>
    </div>
  );
};

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [contactOpen, setContactOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Calculate transform for magnet effect, combining with floating
  const getCombinedTransform = (iconIdx, iconRef) => {
    let float = '';
    // Floating effect (same as float-pop keyframes)
    if (!hoveredIcon || hoveredIcon !== iconIdx) {
      float = `translateY(${Math.sin(Date.now() / 700 + iconIdx) * 12}px)`;
    }
    if (hoveredIcon !== iconIdx || !iconRef.current) return float;
    const rect = iconRef.current.getBoundingClientRect();
    const iconCenter = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    const dx = iconCenter.x - mousePos.x;
    const dy = iconCenter.y - mousePos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const move = Math.max(20, Math.min(40, 12000 / (dist + 1)));
    const angle = Math.atan2(dy, dx);
    const magnet = `translate(${Math.cos(angle) * move}px, ${Math.sin(angle) * move}px)`;
    return magnet;
  };

  // Refs for each icon
  const iconRefs = techIcons.map(() => React.createRef());

  return (
    <div className="center-content" style={{ width: '100vw', minHeight: '100vh', justifyContent: 'flex-start' }}>
      <Navbar currentSection={currentSection} onNavClick={setCurrentSection} />
      <section id="home" className="center-content" style={{ marginTop: '2rem', marginBottom: '2rem', position: 'relative', width: '100%', minHeight: 220 }}>
        <div
          className="floating-icons"
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 350,
            maxWidth: '90vw',
            height: 160,
            zIndex: 1,
          }}
        >
          {techIcons.map((icon, idx) => (
            <div
              key={icon.name}
              className="floating-icon pop-in-icon"
              ref={iconRefs[idx]}
              style={{
                ...icon.style,
                animationDelay: icon.style.animationDelay,
                pointerEvents: 'auto',
                transition: hoveredIcon === idx ? 'transform 0.35s cubic-bezier(.4,2,.6,1)' : 'transform 0.7s cubic-bezier(.4,2,.6,1)',
                transform: getCombinedTransform(idx, iconRefs[idx]),
              }}
              aria-label={icon.name}
              onMouseEnter={e => {
                setHoveredIcon(idx);
                setMousePos({ x: e.clientX, y: e.clientY });
              }}
              onMouseMove={e => {
                if (hoveredIcon === idx) setMousePos({ x: e.clientX, y: e.clientY });
              }}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {icon.svg}
            </div>
          ))}
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-title">Full Stack developer</div>
          <div className="hero-subtitle">With Backend focused technologies</div>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Footer onContactClick={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default App;