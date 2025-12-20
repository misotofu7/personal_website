import styles from "./HomePage.module.css";

export default function HomePage() {
  /*
  Add a profile picture of yourself on that same page
  Add some coloring to them if you want!
  */

  return(
    <main className={styles.page}>
      <h1 className={styles.title}>Kaylie Chang's Portfolio</h1>

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
    </main>
  );
}