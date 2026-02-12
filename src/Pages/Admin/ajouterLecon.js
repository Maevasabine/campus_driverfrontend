import { useState, useEffect } from "react";
export default function AjouterLecon() {
  const [section, setSection] = useState([]);

      useEffect(() => {
      fetch("https://campusdriver-production.up.railway.app/cours/api/section/")
        .then(res => res.json())
        .then(data => setSection(data));
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.set("is_preview", e.target.is_preview.checked ? "true" : "false");

    await fetch("https://campusdriver-production.up.railway.app/cours/api/creer_lessons/", {
      method: "POST",
      body: formData,
    });

    alert("Leçon ajoutée !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter Leçon</h2>
     <div>
          <label>Section</label>
          <select name="section" required>
            <option value="">-- Aucun --</option>
            {section.map((sect) => (
              <option key={sect.id} value={sect.id}>
                {sect.titre}
              </option>
            ))}
          </select>
        </div>
      <input name="titre" placeholder="Titre" required />
      <input name="video" type="file" required />
      <label>
        Preview
        <input name="is_preview" type="checkbox" />
      </label>
      <button type="submit">Créer</button>
    </form>
  );
}
