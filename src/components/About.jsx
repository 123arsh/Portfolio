import React from 'react';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="center-content about-fadein" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>About Me</h2>
      <p style={{ maxWidth: 650, textAlign: 'center', marginBottom: '1rem', lineHeight: 1.7 }}>
        I am a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. I specialize in building modern, scalable web applications using React, TypeScript, Node.js, Express, MongoDB, and PostgreSQL. My focus is on creating seamless user experiences and robust APIs, always prioritizing performance, security, and maintainability. I thrive on learning new technologies and collaborating to turn ideas into impactful digital products.<br /><span className="about-punch">Let's build something amazing together.</span>
      </p>
      <button className="resume-btn" onClick={handleDownload}>Download Resume</button>
    </section>
  );
};

export default About;
