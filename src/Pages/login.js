import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://campusdriver-production.up.railway.app/cours/api/connexion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mot_de_passe: password }),
      });

      if (!res.ok) {
        throw new Error("Identifiants incorrects");
      }

      const data = await res.json();

      // data = { user: {...}, token: "..." }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // REDIRECTION PAR ROLE
      if (data.user.role === "Admin") {
        navigate("/Pages/Admin");
      } else {
        navigate("/Pages/Utilisateur");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Connexion</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
