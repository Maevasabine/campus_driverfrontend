import React, { useState } from "react";
import PaypalButton from "./PaypalButon"; // composant PayPal
import "./inscription.css";

export default function InscriptionPage({ onClose, cours }) {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    mot_de_passe: "",
  });

  const [showPaypal, setShowPaypal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Passer à l'étape PayPal
    setShowPaypal(true);
  };

  return (
    <div className="inscription-wrapper">
      {!showPaypal ? (
        <>
          <h2 className="form-title">Inscription au cours</h2>
          <p className="form-subtitle">Remplissez les informations ci-dessous</p>

          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Nom complet"
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Téléphone"
              value={form.telephone}
              onChange={(e) => setForm({ ...form, telephone: e.target.value })}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={form.mot_de_passe}
              onChange={(e) => setForm({ ...form, mot_de_passe: e.target.value })}
            />

            <button type="submit" className="submit-btn">
              Continuer vers le paiement
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className="form-title">Récapitulatif du cours</h2>
          <p><strong>{cours.titre}</strong></p>
          <p>{cours.description?.substring(0, 100)}...</p>
          <p><strong>Prix : {cours.montant} $ CAD</strong></p>

          <PaypalButton
            amount={cours.montant}
            onSuccess={() => {
              alert("Paiement réussi !");
              onClose();
            }}
          />
        </>
      )}

      <button className="close-btn" onClick={onClose}>
        ✕ Fermer
      </button>
    </div>
  );
}
