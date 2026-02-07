import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <h1 className="logo">Campus Driver</h1>

      <nav>
        <Link to="/admin">📊 Dashboard</Link>
        <Link to="/admin/courses">🎓 Cours</Link>
        <Link to="/admin/sections">📚 Sections</Link>
        <Link to="/admin/lessons">🎬 Leçons</Link>
        <Link to="/login">🚪 Déconnexion</Link>
      </nav>
    </aside>
  );
}
