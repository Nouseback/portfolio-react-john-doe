import "./styles/Portfolio.css";

import freshFood from "../assets/images/portfolio/fresh-food.jpg";
import akira from "../assets/images/portfolio/restaurant-japonais.jpg";
import bienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";
import seo from "../assets/images/portfolio/seo.jpg";
import api from "../assets/images/portfolio/coder.jpg";
import maquette from "../assets/images/portfolio/screens.jpg";

function Portfolio() {
  const projects = [
    {
      img: freshFood,
      title: "Fresh Food",
      desc: "Site de vente de produits frais en ligne",
      tech: "Site réalisé avec PHP et MySQL",
    },
    {
      img: akira,
      title: "Restaurant Akira",
      desc: "Site de vente de produits frais en ligne",
      tech: "Site réalisé avec WordPress",
    },
    {
      img: bienEtre,
      title: "Espace bien-être",
      desc: "Site de vente de produits frais en ligne",
      tech: "Site réalisé avec LARAVEL",
    },
    {
      img: seo,
      title: "SEO",
      desc: "Amélioration du référencement d’un site e-commerce",
      tech: "Utilisation des outils SEO",
    },
    {
      img: api,
      title: "Création d'une API",
      desc: "Création d’une API RESTFULL publique",
      tech: "PHP - SYMFONY",
    },
    {
      img: maquette,
      title: "Maquette d’un site web",
      desc: "Création du prototype d’un site",
      tech: "Réalisé avec FIGMA",
    },
  ];

  return (
    <main className="portfolio-page">
      <section className="portfolio-container">
        <h1>Portfolio</h1>
        <p className="subtitle">Voici quelques-unes de mes réalisations.</p>
        <span className="blue-line"></span>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article className="portfolio-card" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="card-body">
                <h2><strong>{project.title}</strong></h2>
                <p>{project.desc}</p>
                <button>Voir le site</button>
              </div>
              <div className="card-footer">
                <p>{project.tech}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;