import styles from "./HomePage.module.css";

export default function HomePage() {
  return(
    <>
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

    <main className={styles.main}>
      <section id={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.name} id="home">Kaylie Chang</h1>
            <p className={styles.heroDescription}>Computer Science Student & Aspiring Software Engineer (AI/ML focus)</p>
            <p className={styles.heroDescription}>Excited to code and learn new things!</p>
          </div>

          <div className={styles.image}>
            <img 
              src="/profile_picture.jpeg"
              alt="Profile Picture of Kaylie Chang in hero"
              className={styles.profileImage}
            />
          </div>
        </div>
      </section>

      <div className={styles.sections}>
        <section className={styles.card}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <p className={styles.text}>
            University of California, Santa Cruz
            <br/>
            Computer Science Major
            <br/>
            Freshman (Class of 2029)
          </p>
        </section>

        <section className={styles.card}>
          <h3 className={styles.sectionTitle} id="projects">Projects</h3>
          <p className={styles.text}>
            - This Portfolio Website!
            <br/>
            - (Completed - testing) Password Generator Website
            <br/>
            - (in progress) Spam Email Classifier using Machine Learning
          </p>
        </section>

        <section className={styles.card}>
          <h3 className={styles.sectionTitle} id="skills">Skills</h3>
          <p className={styles.text}>
            - Programming Languages: Python, Java, HTML, CSS
            <br/>
            - Frameworks/Libraries: React, Next.js
            <br/>
            - Tools: Git, GitHub, VS Code
          </p>
        </section>

        <section className={styles.card}>
          <h3 className={styles.sectionTitle}>Hobbies</h3>
          <p className={styles.text}>
            - Playing the guitar
            <br/>
            - Dancing
            <br/>
            - Reading
            <br />
            - Making iMovies
          </p>
        </section>
      </div>

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Contact Me</h2>
        <p className={styles.text}>
          Email: ...
        </p>
      </section>

    </main>
    </>
  );
}