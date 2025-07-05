import React from "react";
import { SiTypescript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiJavascript, SiCplusplus, SiGithub, SiRender, SiNetlify } from "react-icons/si";

const skillBadges = [
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" />, color: "#e3f0fa" },
  { name: "React.js", icon: <SiReact color="#61dafb" />, color: "#e0f7fa" },
  { name: "HTML", icon: <SiHtml5 color="#e34c26" />, color: "#fae3e3" },
  { name: "CSS", icon: <SiCss3 color="#1572b6" />, color: "#e3eafd" },
  { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" />, color: "#e0f6fa" },
  { name: "Node.js", icon: <SiNodedotjs color="#3c873a" />, color: "#e3fae7" },
  { name: "Express", icon: <SiExpress color="#000" />, color: "#f0f0f0" },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" />, color: "#e3fae7" },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, color: "#e3eafd" },
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" />, color: "#fdfae3" },
  { name: "C++", icon: <SiCplusplus color="#00599c" />, color: "#e3eafd" },
  { name: "GitHub", icon: <SiGithub color="#24292e" />, color: "#f0f0f0" },
  { name: "Render", icon: <SiRender color="#46e3b7" />, color: "#e0f7f4" },
  { name: "Netlify", icon: <SiNetlify color="#00c7b7" />, color: "#e0f7f4" },
];

export default function Skills() {
  return (
    <section className="skills-float-section center-content skills-fadein">
      <h2 className="skills-title float">Skills</h2>
      <p className="skills-intro float">Technologies and tools I use, each with its own unique power!</p>
      <div className="skills-float-badges">
        {skillBadges.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-float-badge skill-badge-animate"
            style={{
              background: skill.color,
              animationDelay: `${i * 0.13 + 0.2}s`,
              boxShadow: `0 4px 18px 0 rgba(56,189,248,0.10)`
            }}
            aria-label={skill.name}
          >
            <span className="skill-float-icon">{skill.icon}</span>
            <span className="skill-float-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 