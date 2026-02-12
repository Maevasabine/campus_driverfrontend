import { useState, useEffect } from "react";

export default function AjouterLecon() {
  const [sections, setSections] = useState([]);

  const [form, setForm] = useState({
    section: "", 
  });

  useEffect(() => {
    fetch("https://campusdriver-production.up.railway.app/cours/api/section/")
      .then(res => res.json())
      .then(data => setSections(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.set("is_preview", e.target.is_preview.checked ? "true" : "false");

    await fetch(
      "https://campusdriver-production.up.railway.app/cours/api/creer_lessons/",
      {
        method: "POST",
        body: formData,
      }
    );

    alert("Leçon ajoutée !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter Leçon</h2>

      <div>
        <label>Section</label>
        <select
          name="section"
          required
          value={form.section} 
          onChange={(e) =>
            setForm({ ...form, section: parseInt(e.target.value) })
          }
        >
          <option value="">-- Choisir une section --</option>
          {sections.map((sect) => (
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
