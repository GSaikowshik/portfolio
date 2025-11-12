// src/App.js

import React from 'react';

// Make sure this file exists in src/ and is named portfolioData.js
import { 
  personalData, 
  projects, 
  hackathons,
  experience,
  skills,
  certifications,
  leadership,
  education 
} from './portfolio.js'; 

// This is the full React component
function App() {
  return (
    <div className="App">
      
      {/* --- HEADER --- */}
      <header>
        <h1>{personalData.name}</h1>
        <p>
          {personalData.phone} | 
          <a href={`mailto:${personalData.email}`}>{personalData.email}</a> | 
          <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </p>
      </header>

      <main>
        
        {/* --- SUMMARY --- */}
        <section id="summary">
          <h2>Summary</h2>
          {personalData.summary.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {/* --- SKILLS --- */}
        <section id="skills">
            <h2>Skills</h2>
            <div>
              <strong>Languages:</strong> {skills.languages.join(', ')}
            </div>
            <div>
              <strong>Technologies:</strong> {skills.technologies.join(', ')}
            </div>
            <div>
              <strong>Developer Tools:</strong> {skills.developerTools.join(', ')}
            </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience">
          <h2>Technical Experience</h2>
          {experience.map((job, index) => (
            <div key={index} className="item">
              <h3>{job.role}</h3>
              <p>{job.company} | {job.date}</p>
            </div>
          ))}
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="item">
              <h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p>{project.description}</p>
            </div>
          ))}
        </section>

        {/* --- HACKATHONS --- */}
        <section id="hackathons">
            <h2>Hackathons</h2>
            {hackathons.map((hack, index) => (
                <div key={index} className="item">
                    <h3>
                        {/* Check if URL exists, if not, just show text */}
                        {hack.url ? (
                            <a href={hack.url} target="_blank" rel="noopener noreferrer">
                                {hack.title}
                            </a>
                        ) : (
                            hack.title
                        )}
                    </h3>
                    <p>{hack.description}</p>
                </div>
            ))}
        </section>

        {/* --- CERTIFICATIONS --- */}
        <section id="certifications">
            <h2>Certifications</h2>
            <ul>
                {certifications.map((cert, index) => (
                    <li key={index}>
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            {cert.title}
                        </a> - {cert.issuer}
                    </li>
                ))}
            </ul>
        </section>

        {/* --- LEADERSHIP --- */}
        <section id="leadership">
            <h2>Leadership & Volunteering</h2>
            {leadership.map((item, index) => (
                <div key={index} className="item">
                    <h3>{item.role}</h3>
                    <p>{item.organization} | {item.date}</p>
                    <ul>
                        {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>

        {/* --- EDUCATION --- */}
        <section id="education">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} className="item">
                    <h3>{edu.degree}</h3>
                    <p>{edu.institution} | {edu.date}</p>
                </div>
            ))}
        </section>
        
      </main>

    </div>
  );
}

// This line exports the App component
export default App;