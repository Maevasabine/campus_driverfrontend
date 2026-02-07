import { useEffect, useState } from "react";
import AdminLayout from "./adminlayout";

export default function AdminSections() {
  const [courses, setCourses] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/cours/api/cours/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  useEffect(() => {
    if (!selectedCourse) return;

    fetch(
      `http://127.0.0.1:8000/cours/api/sections/?cours=${selectedCourse}`
    )
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, [selectedCourse]);

  return (
    <AdminLayout>
      <h1>📚 Sections</h1>

      <select onChange={(e) => setSelectedCourse(e.target.value)}>
        <option value="">-- Choisir un cours --</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.titre}
          </option>
        ))}
      </select>

      <ul className="section-list">
        {sections.map((s) => (
          <li key={s.id}>
            {s.ordre}. {s.titre}
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
}
