import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "./coursDetails.css";
import InscriptionPage from "./inscription";
import VideoPreviewModal from "./videomodal";
import CoursContent from "./courscontent";

export default function CoursDetail() {
  const { id } = useParams();
  const [cours, setCours] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [Cours, setautresCours] = useState([]);
  const [sections, setSections] = useState([]);
  const [previewVideo, setPreviewVideo] = useState(null);

  useEffect(() => {
    fetch(`https://campusdriver-production.up.railway.app/cours/api/cours/${id}`)
      .then((res) => res.json())
      .then((data) => setCours(data));

    fetch("https://campusdriver-production.up.railway.app/cours/api/cours")
      .then((res) => res.json())
      .then((data) =>
        setautresCours(data.filter((item) => item.id !== parseInt(id)))
      );
      fetch(`https://campusdriver-production.up.railway.app/cours/api/contenu/${id}`)
      .then((res) => res.json())
      .then((data) => setSections(data));

  }, [id]);

  if (!cours) return <p>Chargement...</p>;

  return (
    <>
      <Header />

      {/* ===== HERO STYLE UDEMY ===== */}
      <section className="course-hero">
        <div className="course-hero-content">
          <h1>{cours.titre}</h1>
          <p className="hero-description">{cours.description}</p>

          <div className="hero-meta">
            <span>★★★★☆</span>
            <span>• Débutant</span>
            <span>• 12 heures</span>
          </div>

          <button className="btn-primary" onClick={() => setShowModal(true)}>
            S'inscrire
          </button>
        </div>
      </section>

      {/* ===== CORPS DU COURS ===== */}
      <section className="course-body">
        <div className="course-main">
          <h2>Ce que vous allez apprendre</h2>
          <ul className="learning-list">
            <li>✔ Comprendre les bases du métier</li>
            <li>✔ Appliquer les concepts en pratique</li>
            <li>✔ Réaliser des projets concrets</li>
          </ul>

          <h2>Description</h2>
          <p>{cours.description}</p>
        </div>

        <aside className="course-sidebar">
          <img
            src={`https://campusdriver-production.up.railway.app${cours.image}`}
            alt={cours.titre}
          />

          <h3>{cours.montant} $ CAD</h3>

          <button className="btn-primary" onClick={() => setShowModal(true)}>
            S'inscrire maintenant
          </button>

          <p className="guarantee">
            Garantie satisfait ou remboursé sous 30 jours
          </p>
        </aside>
      </section>

      <CoursContent
         sections={sections}
         onPreview={(lecon) => setPreviewVideo(lecon)}
      />


      {/* ===== AUTRES FORMATIONS ===== */}
      <section className="other-courses-section">
        <h2>Autres formations</h2>

        <div className="other-courses-grid">
          {Cours.map((item) => (
            <Link
              to={`/cours/${item.id}`}
              key={item.id}
              className="other-course-card"
            >
              <img
                src={`https://campusdriver-production.up.railway.app${item.image}`}
                alt={item.titre}
              />
              <h3>{item.titre}</h3>
            </Link>
          ))}
        </div>
      </section>

      <Footer />

      {/* ===== MODAL INSCRIPTION ===== */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <InscriptionPage
              cours={cours}
              onClose={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
       {/*====Video Modal =====*/}
      {previewVideo && (
        <VideoPreviewModal
          lecon={previewVideo}
          onClose={() => setPreviewVideo(null)}
        />
     )}


    </>
  );
}
