import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [mot_de_passe, setMotDePasse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://campusdriver-production.up.railway.app/cours/api/connexion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, mot_de_passe }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      // On stocke l'utilisateur
      localStorage.setItem("user", JSON.stringify(data));

      // 🔥 Redirection selon rôle
      if (data.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Connexion</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setMotDePasse(e.target.value)}
        required
      />
      <button type="submit">Se connecter</button>
    </form>
  );
}
