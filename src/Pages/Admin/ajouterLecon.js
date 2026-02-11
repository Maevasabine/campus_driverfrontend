export default function AjouterLecon() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("https://campusdriver-production.up.railway.app/cours/api/creer_lessons/", {
      method: "POST",
      body: formData,
    });

    alert("Leçon ajoutée !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter Leçon</h2>
      <input name="section" placeholder="ID Section" required />
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
