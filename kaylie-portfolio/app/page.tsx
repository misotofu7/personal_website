import styles from "./HomePage.module.css";

export default function HomePage() {
  return(
    <>
    {/* Navbar */}
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <a className={styles.logo} href="#home">Kaylie Chang</a>

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
            <h1 className={styles.name} id="home">Kaylie Chang</h1>
            <p className={styles.heroDescription}>
              Computer Science Student -- Aspiring Software Engineer (AI/ML)
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
        <section className={styles.card}>
          <h3 className={styles.sectionTitle} id="projects">Projects</h3>
          <ul className={styles.bulletPoints}>
            <li>This Portfolio Website!</li>
            <li>(Completed - testing) Password Generator Website</li>
            <li>(in-progress) Spam Email Classifier using Machine Learning</li>
          </ul>
        </section>

      <div className={styles.sections}>
        <section className={styles.card}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <ul className={styles.bulletPoints}>
            <li>University of California, Santa Cruz (Class of 2029)</li>
            <li>B.S. in Computer Science</li>
            <li>GPA: 4.0/4.0</li>
            <li>Relevant Courses:
              CSE 30 (Abstractions of Python Programming),
              Coursera - Univeristy of Michigan Introduction to HTML5
            </li>
            <li>Honors: Dean's List</li>
          </ul>
        </section>

        <section className={styles.card}>
          <h3 className={styles.sectionTitle} id="skills">Skills</h3>
          <ul className={styles.bulletPoints}>
            <li>Programming Languages: Python, Java, HTML, CSS</li>
            <li>Frameworks/Libraries: React, Next.js</li>
            <li>Tools: Git, GitHub, VS Code</li>
            <li>Others: critical thinking, adaptable/flexible, continuous learning, teamwork, communication</li>
          </ul>
        </section>

        <section className={styles.card}>
          <h3 className={styles.sectionTitle}>Hobbies</h3>
          <ul className={styles.bulletPoints}>
            <li>Playing the guitar</li>
            <li>Dancing</li>
            <li>Reading</li>
            <li>Making iMovies</li>
          </ul>
        </section>
      </div>
    </main>
    </>
  );
}