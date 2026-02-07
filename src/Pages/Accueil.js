import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import WelcomeSlider from "./slider";
import "./styles.css";
import { motion } from "framer-motion";

export default function Accueil() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://campusdriver-production.up.railway.app/cours/api/cours")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Erreur récupération cours:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-wrapper">
      <Header />

      {/* SECTION BANNIÈRE SEULE */}
      <WelcomeSlider />

      {/* SECTION FORMATIONS */}
      <section className="section-courses">
        <div className="section-header">
          <h2 className="section-title">Nos Formations</h2>
          <p className="section-description">
            Apprenez à votre rythme avec des cours modernes et adaptés à vos besoins.
          </p>
        </div>

        {loading ? (
          <p className="loading">Chargement des formations...</p>
        ) : (
          <div className="courses-grid">
            {courses.map((cours, index) => (
              <motion.div
                key={cours.id}
                className="course-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-image-wrapper">
                  <img
                    src={`https://campusdriver-production.up.railway.app${cours.image}`}
                    className="card-image"
                    alt={cours.titre}
                  />
                </div>

                <h3 className="course-title">{cours.titre}</h3>

                <p className="course-description">
                  {cours.description?.substring(0, 100)}...
                </p>

                <Link className="course-btn" to={`/cours/${cours.id}`}>
                  Voir plus →
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
