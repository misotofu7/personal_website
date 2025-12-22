import styles from "./HomePage.module.css";

export default function HomePage() {
  /*
  Hero / Intro
  Projects
  Skills
  Experience (optional)
  About
  Contact
  */

  return(
    <>
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div className={styles.logo}>Kaylie Chang</div>

        <ul className={styles.navLinks}>
          <li>Projects</li>
          <li>Skills</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>

    <main className={styles.page}>
      <h1 className={styles.name}>Kaylie Chang</h1>

      <section id={styles.hero}>
        <h1>Computer Science Student</h1>
        <p>Happy to code and learn new things! XD</p>
      </section>

      {/* profile image here */}
      <img 
        src="/profile_picture.jpeg"
        alt="Profile Picture of Kaylie Chang"
        className={styles.profileImage} 
      />

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        <h3 className={styles.subTitle}>Education</h3>
        <p className={styles.text}>
          University of California, Santa Cruz
          <br/>
          Computer Science Major
          <br/>
          Freshman (Class of 2029)
        </p>
      </section>

      <section className={styles.card}>
        <h3 className={styles.subTitle}>Personal Projects</h3>
        <p className={styles.text}>
          - This Portfolio Website!
          <br/>
          - (in progress) Password Generator Website
          <br/>
          - (in progress) Spam Email Classifier using Machine Learning
        </p>
      </section>

      <section className={styles.card}>
        <h3 className={styles.subTitle}>Skills</h3>
        <p className={styles.text}>
          - Programming Languages: Python, Java, HTML, CSS
          <br/>
          - Frameworks/Libraries: React, Next.js
          <br/>
          - Tools: Git, GitHub, VS Code
        </p>
      </section>

      <section className={styles.card}>
        <h3 className={styles.subTitle}>Hobbies</h3>
        <p className={styles.text}>
          - Playing the guitar
          <br/>
          - Dancing
          <br/>
          - Reading webnovels
        </p>
      </section>
    </main>
    </>
  );
}