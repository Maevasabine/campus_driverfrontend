import { useEffect, useState } from "react";
import AdminLayout from "./adminlayout";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/cours/api/cours/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <AdminLayout>
      <h1>🎓 Gestion des cours</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.titre}</td>
              <td>{c.montant} $</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
