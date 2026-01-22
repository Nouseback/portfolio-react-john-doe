import "./styles/Home.css";
import heroBg from "../assets/images/hero-bg.jpg";
import aboutImg from "../assets/images/john-doe-about.jpg";

function Home() {
  return (
    <main>

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button>En savoir plus</button>
        </div>
      </section>

      {/* A PROPOS + COMPETENCES */}
<section className="about-skills">
  <div className="about-skills-card">

    {/* A PROPOS */}
    <div className="about">
      <h3><strong>A propos</strong></h3>
      <span className="blue-line"></span>

      <p>
        Passionné par l'informatique et les nouvelles technologies,
        j’ai suivi une formation d’intégrateur développeur web.
      </p>

      <p>
        Aujourd’hui, je maîtrise les différentes étapes techniques
        de la création d’un site ou d’une application web.
      </p>

      <img src={aboutImg} alt="John Doe" />
    </div>

    {/* COMPETENCES */}
    <div className="skills">
      <h3><strong>Mes compétences</strong></h3>
      <span className="blue-line"></span>

      <div className="skill">
        <span>HTML5 90%</span>
        <div className="bar html"></div>
      </div>

      <div className="skill">
        <span>CSS3 80%</span>
        <div className="bar css"></div>
      </div>

      <div className="skill">
        <span>JAVASCRIPT 70%</span>
        <div className="bar js"></div>
      </div>

      <div className="skill">
        <span>PHP 60%</span>
        <div className="bar php"></div>
      </div>

      <div className="skill">
        <span>REACT 50%</span>
        <div className="bar react"></div>
      </div>
    </div>

  </div>
</section>

    </main>
  );
}

export default Home;