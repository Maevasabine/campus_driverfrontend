import { useState } from "react";

export default function Ajouter_Enseignant() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    mot_de_passe: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://campusdriver-production.up.railway.app/cours/api/creer_enseignant/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Enseignant ajouté !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter Enseignant</h2>
      <input name="nom" placeholder="Nom" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="mot_de_passe" type="password" placeholder="Mot de passe" onChange={handleChange} required />
      <button type="submit">Créer</button>
    </form>
  );
}
