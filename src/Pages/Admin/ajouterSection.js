import { useState, useEffect } from "react";

export default function AjouterSection() {
  const [cours, setCours] = useState([]);

  const [form, setForm] = useState({
    cours_id: "",
    titre: "",
    ordre: 0,
  });
    useEffect(() => {
      fetch("https://campusdriver-production.up.railway.app/cours/api/cours/")
        .then(res => res.json())
        .then(data => setCours(data));
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://campusdriver-production.up.railway.app/cours/api/creer_section/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Section ajoutée !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter Section</h2>
       <div>
          <label>Cours</label>
          <select name="cours" required
            value={form.cours_id}
            onChange={(e) => setForm({ ...form, cours_id: parseInt(e.target.value) })}>
            <option value="">-- Aucun --</option>
            {cours.map((cour) => (
              <option key={cour.id} value={cour.id}>
                {cour.titre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Titre </label>
          <input name="titre" placeholder="Titre" onChange={(e)=>setForm({...form, titre:e.target.value})}/>
        </div>
         <div>
          <label>Ordre </label>
          <input name="ordre" type="number" onChange={(e)=>setForm({...form, ordre:Number(e.target.value)})}/>
        </div>
      
      <button type="submit">Créer</button>
    </form>
  );
}
