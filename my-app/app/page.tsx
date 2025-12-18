export default function HomePage() {
  /*
  Add a profile picture of yourself on that same page
  Add some coloring to them if you want!
  */

  return(
    <main>
      <h1>Kaylie Chang's Portfolio</h1>

      {/* profile image here */}
      <img 
        src="/profile_picture.jpeg"
        alt="Profile Picture of Kaylie Chang"
        style={{ borderRadius: '50%', width: '200px', height: '200px', border: '5px solid #4A90E2' }} 
      />

      <section>
        <h2>About Me</h2>

        <h3>
          Education
        </h3>
        <p>
          University of California, Santa Cruz
          Computer Science Major
          Freshman (Class of 2029)
        </p>

      </section>
    </main>
  );
}