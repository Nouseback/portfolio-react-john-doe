import React from "react";
import "../styles/Portfolio.css";
import banner from "../assets/images/banner.jpg";

import freshFood from "../assets/images/portfolio/fresh-food.jpg";
import restaurant from "../assets/images/portfolio/restaurant-japonais.jpg";
import bienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";
import seo from "../assets/images/portfolio/seo.jpg";
import api from "../assets/images/portfolio/coder.jpg";
import maquette from "../assets/images/portfolio/screens.jpg";

function Portfolio() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <section
        className="portfolio-hero"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="portfolio-hero-content">
          <h1>Portfolio</h1>
          <p>Voici quelques-unes de mes réalisations</p>
          <span className="blue-line"></span>
        </div>
      </section>

      {/* ===== CARDS ===== */}
      <section className="portfolio-section">
        <div className="portfolio-container">

          <article className="portfolio-card">
            <img src={freshFood} alt="Fresh Food" />
            <div className="card-body">
              <h3><b>Fresh Food</b></h3>
              <p>Site de vente de produits frais en ligne</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">Site réalisé avec PHP et MySQL</div>
          </article>

          <article className="portfolio-card">
            <img src={restaurant} alt="Restaurant Akira" />
            <div className="card-body">
              <h3><b>Restaurant Akira</b></h3>
              <p>Site de vente de produits frais en ligne</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">Site réalisé avec WordPress</div>
          </article>

          <article className="portfolio-card">
            <img src={bienEtre} alt="Espace bien-être" />
            <div className="card-body">
              <h3><b>Espace bien-être</b></h3>
              <p>Site de vente de produits frais en ligne</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">Site réalisé avec Laravel</div>
          </article>

          <article className="portfolio-card">
            <img src={seo} alt="SEO" />
            <div className="card-body">
              <h3><b>SEO</b></h3>
              <p>Amélioration du référencement d’un site e-commerce</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">Utilisation des outils SEO</div>
          </article>

          <article className="portfolio-card">
            <img src={api} alt="API" />
            <div className="card-body">
              <h3><b>Création d’une API</b></h3>
              <p>Création d’une API RESTFULL publique</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">PHP – Symfony</div>
          </article>

          <article className="portfolio-card">
            <img src={maquette} alt="Maquette site web" />
            <div className="card-body">
              <h3><b>Maquette d’un site web</b></h3>
              <p>Création du prototype d’un site</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">Réalisé avec Figma</div>
          </article>

        </div>
      </section>

    </main>
  );
}

export default Portfolio;