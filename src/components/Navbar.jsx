import React from 'react';

const Navbar = ({ currentSection, onNavClick }) => {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
  ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}>
      <nav className="light-navbar fixed-navbar">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`navbar-link${currentSection === item.id ? ' active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onNavClick(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;