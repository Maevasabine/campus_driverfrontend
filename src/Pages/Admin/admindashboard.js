import { Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#1e293b",
        color: "white",
        padding: "20px"
      }}>
        <h2>Admin Panel</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/Admin/ajouterEnseignant" style={linkStyle}>Ajouter Enseignant</Link></li>
          <li><Link to="/Admin/Ajouter_cours" style={linkStyle}>Ajouter Cours</Link></li>
          <li><Link to="/Admin/ajouterSection" style={linkStyle}>Ajouter Section</Link></li>
          <li><Link to="/Admin/ajouterLecon" style={linkStyle}>Ajouter Leçon</Link></li>

        </ul>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "40px" }}>
        <h1>Bienvenue dans l'espace Admin</h1>
        <p>Sélectionne une action dans le menu à gauche.</p>
      </div>

    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  display: "block",
  padding: "10px 0"
};
