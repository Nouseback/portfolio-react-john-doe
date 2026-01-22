import React from "react";
import banner from "../assets/images/banner.jpg";
import "./Services.css";

function Services() {
  return (
    <main>

      {/* IMAGE BANNER */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${banner})` }}
      ></section>

      {/* TITRE PAGE */}
      <section className="services-header">
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <span className="blue-line"></span>
      </section>

      {/* CARTES SERVICES */}
      <section className="services-list container">
        <div className="row justify-content-center">

          {/* UX DESIGN */}
          <div className="col-md-4 mb-4">
            <article className="card service-card text-center">
              <div className="card-body">
                <i className="fas fa-paint-brush service-icon"></i>
                <h2 className="h5"><strong>UX Design</strong></h2>
                <p>
                  L'UX Design consiste à concevoir des produits en plaçant
                  l’utilisateur au centre des préoccupations afin de rendre
                  l’expérience la plus fluide et agréable possible.
                </p>
              </div>
            </article>
          </div>

          {/* DEVELOPPEMENT WEB */}
          <div className="col-md-4 mb-4">
            <article className="card service-card text-center">
              <div className="card-body">
                <i className="fas fa-code service-icon"></i>
                <h2 className="h5"><strong>Développement web</strong></h2>
                <p>
                  Le développement web consiste à créer des sites et applications
                  à l’aide de langages et frameworks modernes comme HTML, CSS,
                  JavaScript, PHP, React ou Bootstrap.
                </p>
              </div>
            </article>
          </div>

          {/* REFERENCEMENT */}
          <div className="col-md-4 mb-4">
            <article className="card service-card text-center">
              <div className="card-body">
                <i className="fas fa-search service-icon"></i>
                <h2 className="h5"><strong>référencement</strong></h2>
                <p>
                  Le référencement naturel (SEO) permet d’optimiser la visibilité
                  d’un site sur les moteurs de recherche afin d’attirer un
                  maximum de visiteurs qualifiés.
                </p>
              </div>
            </article>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Services;