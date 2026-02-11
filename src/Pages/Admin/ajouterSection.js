export default function Ajouter_Section() {
  const [form, setForm] = useState({
    cours: "",
    titre: "",
    ordre: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://campusdriver-production.up.railway.app/cours/api/creer_section", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Section ajoutée !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter Section</h2>
      <input name="cours" placeholder="ID Cours" onChange={(e)=>setForm({...form, cours:e.target.value})}/>
      <input name="titre" placeholder="Titre" onChange={(e)=>setForm({...form, titre:e.target.value})}/>
      <input name="ordre" type="number" onChange={(e)=>setForm({...form, ordre:e.target.value})}/>
      <button type="submit">Créer</button>
    </form>
  );
}
