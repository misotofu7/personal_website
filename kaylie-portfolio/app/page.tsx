"use client";

import styles from "./HomePage.module.css";
import { useEffect, useRef, useState } from "react";
import ProjectsSection from "./ProjectsSection";

export default function HomePage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );
  
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return(
    <>
    {/* Navbar */}
    <header className={styles.header} id="home">
      <nav className={styles.navBar}>
        <button
          className={styles.homeButton}
          onClick={() => {
            window.scrollTo({top: 0, behavior: "smooth"});
          }}
        >
          Kaylie Chang
        </button>

        <ul className={styles.navLinks}>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li>
            <a href="https://www.linkedin.com/in/kayliechang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/misotofu7" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </nav>
    </header>

    {/* Hero */}
    <main className={styles.main}>
      <section id={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.name}>Kaylie Chang</h1>
            <p className={styles.heroDescription}>
              Computer Science Student
            </p>
            <br />
            <p className={styles.heroDescription}>
              Aspiring Software Engineer (AI/ML)
            </p>
            <br />
            <p className={styles.heroDescription}>
              Excited to code and learn new things!
            </p>
          </div>

          <div className={styles.imageWrap}>
            <img
              className={styles.heroImage}
              src="/profile_picture.jpeg"
              alt="Profile Picture of Kaylie Chang in hero"
            />
          </div>
        </div>
      </section>

      {/* Note for later --> emphasize this part the most */}
      <ProjectsSection />

      <div
        className={styles.sections}
      >
        <section
          id="skills"
          className={styles.card}
        >
          <h3 className={styles.sectionTitle}>Skills</h3>
          <ul className={styles.bulletPoints}>
            <li>Programming Languages: Python, Java, HTML, CSS</li>
            <li>Frameworks/Libraries: React, Next.js</li>
            <li>Tools: Git, GitHub, VS Code</li>
            <li>Others: critical thinking, adaptable/flexible, continuous learning, teamwork, communication</li>
          </ul>
        </section>

        <section
          id="education"
          className={styles.card}
        >
          <h3 className={styles.sectionTitle}>Education</h3>
          <ul className={styles.bulletPoints}>
            <li>University of California, Santa Cruz (Class of 2029)</li>
            <li>B.S. in Computer Science</li>
            <li>GPA: 4.0/4.0</li>
            <li>Relevant Courses:
              <ul className={styles.sublist}>
                <li>(in-progress) CSE 30 (Abstractions of Python Programming)</li>
                <li>Coursera - Univeristy of Michigan Introduction to HTML5</li>
                <li>(upcoming) CodePath WEB102 - Intro to Web Development</li>
                <li>AP Computer Science Principles (Python)</li>
                <li>AP Computer Science A (Java)</li>
              </ul>
            </li>
            <li>Honors: Dean's List</li>
          </ul>
        </section>
      </div>
    </main>
    </>
  );
}