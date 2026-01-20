function Home() {
  return (
    <main>
      {/* Section présentation */}
      <section className="container my-5">
        <h1>Bienvenue sur mon portfolio</h1>

        <p>
          Je m’appelle John Doe et je suis développeur web en formation.
          Ce portfolio présente mes compétences, mes services et une sélection
          de projets réalisés avec React.
        </p>
      </section>

      {/* Section compétences */}
      <section className="container my-5">
        <h2>Compétences principales</h2>

        <ul>
          <li>HTML5 / CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Responsive Design</li>
          <li>Git & GitHub</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;