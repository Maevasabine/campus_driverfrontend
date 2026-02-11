import { useEffect, useState } from "react";

export default function Ajoutercours() {
  const [enseignants, setEnseignants] = useState([]);

  useEffect(() => {
    fetch("https://campusdriver-production.up.railway.app/cours/api/enseignants/")
      .then(res => res.json())
      .then(data => setEnseignants(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch(
      "https://campusdriver-production.up.railway.app/cours/api/creer_cours/",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      alert("Cours ajouté avec succès !");
      e.target.reset();
    } else {
      alert("Erreur lors de la création du cours");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Ajouter un cours</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Titre</label>
          <input type="text" name="titre" required />
        </div>

        <div>
          <label>Montant</label>
          <input type="number" step="0.01" name="montant" required />
        </div>

        <div>
          <label>Description</label>
          <textarea name="description" required />
        </div>

        <div>
          <label>Image</label>
          <input type="file" name="image" accept="image/*" />
        </div>

        <div>
          <label>Enseignant</label>
          <select name="enseignant">
            <option value="">-- Aucun --</option>
            {enseignants.map((ens) => (
              <option key={ens.id} value={ens.id}>
                {ens.nom}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Créer le cours</button>
      </form>
    </div>
  );
}
