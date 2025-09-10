// SoftwareDeveloperPortfolio.jsx
import React, { useState, useEffect } from "react";
import "./App.css";

export default function SoftwareDeveloperPortfolio() {
  const [theme, setTheme] = useState("light");

  // Apply theme to <html> element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const projects = [
    {
      title: "Smart Online Gym Platform",
      year: 2025,
      tech: "React, Node.js, MongoDB",
      url: "https://github.com/Chandramouli001/SmartGym",
      description:
        "A web platform for online gym management, workout assignment, gamified rewards, and progress tracking."
    },
    {
      title: "IoT-Based Smart Solar Charging Bag",
      year: 2023,
      tech: "Arduino, IoT, Sensors",
      description:
        "Smart bag with solar charging, security alerts, and emergency SOS integrated with IoT sensors."
    },
    {
      title: "Face Recognition Attendance System",
      year: 2024,
      tech: "Python, OpenCV, React",
      description:
        "A real-time attendance system using face recognition and webcam capture integrated with a web dashboard."
    },
  ];

  const skills = [
    "JavaScript (React, Node.js)",
    "Python (OpenCV, AI/ML)",
    "C/C++",
    "IoT & Embedded Systems",
    "Database Design (MongoDB, SQL)",
    "Web Development (HTML, CSS, REST APIs)",
    "Git & Version Control",
    "Agile & Scrum Practices",
  ];

  return (
    <div className={`portfolio-container ${theme}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGGZ-v9U2nylA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728062431795?e=2147483647&v=beta&t=8ThumINCZb8nZ_zUCkzyWH0elH5hdIrbsayRk-8sc5c"
          alt="Profile"
          className="profile-pic"
        />
        <h1 className="name">Chandramouli Haldar</h1>
        <p className="role">Software Developer | Full Stack | IoT Enthusiast</p>
        <p className="location">📍 Kolkata, India</p>

        <div className="social-links">
          <a href="mailto:Chandramoulihaldar@gmail.com" className="no-hover">
            📧 Chandramoulihaldar@gmail.com
          </a>
          <a href="https://github.com/Chandramouli001" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/chandramouli01/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.youtube.com/@Chandram0uli" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>

        {/* Language Switch Flags */}
        <div className="language-switch">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
            alt="English"
            onClick={() => window.location.reload()}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
            alt="Japanese"
            onClick={() => window.location.reload()}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Bio Section */}
        <section className="bio-section">
          <div className="bio-header">
            <h2>Bio</h2>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="theme-toggle-btn"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Lite"}
            </button>
          </div>
          <p className="bio-text">
            Chandramouli Haldar is a passionate software developer with experience in full-stack web development, IoT projects, and AI/ML applications. He enjoys building real-world solutions using modern technologies and continuously learning new frameworks.
          </p>
        </section>

        {/* Experience Section */}
        <section>
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Full Stack Developer</strong> – NovaTech Innovative Solutions (2024-Present)
            </li>
            <li>
              <strong>Junior Technical Faculty</strong> – Euphoria GenX (2023-2024)
            </li>
          </ul>
        </section>

        {/* Education Section */}
        <section>
          <h2>Education</h2>
          <ul>
            <li>B.Tech in Computer Science & Engineering, GNIT, Kolkata, 2026</li>
            <li>Diploma in Electronics & Telecommunication Engineering, GNIT, Kolkata, 2023</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section>
          <h2>Skills</h2>
          <div className="grid">
            {skills.map((skill, i) => (
              <div key={i} className="card">{skill}</div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2>Projects</h2>
          <ul>
            {projects.map((project, i) => (
              <li key={i} className="card">
                <h3>{project.title}</h3>
                <p><strong>Year:</strong> {project.year}</p>
                {project.tech && <p><strong>Tech:</strong> {project.tech}</p>}
                {project.url && (
                  <p>
                    <strong>Link:</strong>{" "}
                    <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
                  </p>
                )}
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements Section */}
        <section>
          <h2>Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3>Best Developer Award</h3>
              <p>NovaTech 2025</p>
            </div>
            <div className="card">
              <h3>Hackathon Winner</h3>
              <p>TechFest 2024</p>
            </div>
          </div>
        </section>

        {/* Courses & Certifications Section */}
        <section>
          <h2>Courses & Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card">Full Stack Web Development - Apnacollege</div>
            <div className="card">Object Oriented C++ – Coursera</div>
            <div className="card">IoT & Embedded Systems - NPTEL</div>
            <div className="card">Python AI/ML - Udemy</div>
          </div>
        </section>
      </main>
    </div>
  );
}
