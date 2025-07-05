import React, { useEffect, useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Car Rental Web App',
    description: 'A full-featured platform for renting cars online, with real-time availability, booking, and payment integration.',
    image: 'https://source.unsplash.com/500x250/?car,rental',
    demo: 'https://example.com/car-rental',
  },
  {
    title: 'Hotel Management System',
    description: 'A comprehensive system for managing hotel bookings, rooms, staff, and customer check-ins/outs.',
    image: 'https://source.unsplash.com/500x250/?hotel,room',
    demo: 'https://example.com/hotel-management',
  },
  {
    title: 'Chat App',
    description: 'A real-time chat application with group and private messaging, emoji support, and notifications.',
    image: 'https://source.unsplash.com/500x250/?chat,app',
    demo: 'https://example.com/chat-app',
  },
  {
    title: 'Course Selling Web App',
    description: 'A platform for instructors to sell courses, manage content, and for students to enroll and track progress.',
    image: 'https://source.unsplash.com/500x250/?online,course',
    demo: 'https://example.com/course-selling',
  },
];

const useScrollAnimation = () => {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadein');
          }
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  return refs;
};

const Projects = () => {
  const refs = useScrollAnimation();
  return (
    <section id="projects" className="center-content" style={{ marginTop: '2rem', marginBottom: '2rem', width: '100%' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Projects</h2>
      <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {projects.map((project) => {
          const CardContent = (
            <>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-gradient" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.6rem', color: '#fff', letterSpacing: 0.2 }}>{project.title}</h3>
              <p style={{ fontSize: '1.05rem', color: '#e5e7eb', marginBottom: 0, textAlign: 'center', lineHeight: 1.6 }}>{project.description}</p>
            </>
          );
          return project.demo ? (
            <a
              key={project.title}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              ref={el => refs.current[projects.findIndex(p => p.title === project.title)] = el}
              className="project-card opacity-0 project-card-hoverable"
            >
              {CardContent}
            </a>
          ) : (
            <div
              key={project.title}
              ref={el => refs.current[projects.findIndex(p => p.title === project.title)] = el}
              className="project-card opacity-0 project-card-hoverable"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
      <style>{`
        .animate-fadein {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .project-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1), box-shadow 0.3s, border-color 0.3s;
          margin: 0 auto;
          width: 100%;
          max-width: 900px;
          border: 2px solid #23293a;
          border-radius: 1.5rem;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          color: #fff;
          min-height: 120px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: transparent;
          box-shadow: 0 2px 24px 0 rgba(0,0,0,0.10);
          cursor: pointer;
          text-decoration: none;
        }
        .project-card-hoverable:hover {
          box-shadow: 0 8px 32px 0 rgba(56,189,248,0.18);
          border-color: #38bdf8;
          transform: scale(1.025) translateY(-4px);
        }
        .project-image-wrapper {
          width: 100%;
          height: 320px;
          position: relative;
          border-radius: 1.1rem;
          overflow: hidden;
          margin-bottom: 1.2rem;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.1rem;
          display: block;
        }
        .project-image-gradient {
          position: absolute;
          left: 0; right: 0; bottom: 0; top: 0;
          border-radius: 1.1rem;
          background: linear-gradient(180deg, rgba(30,41,59,0.00) 60%, rgba(30,41,59,0.18) 100%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
