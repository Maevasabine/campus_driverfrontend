import { useEffect, useState } from "react";
import AdminLayout from "./adminlayout";

export default function AdminLessons() {
  const [sections, setSections] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [sectionId, setSectionId] = useState("");

  useEffect(() => {
    fetch("https://campusdriver-production.up.railway.app/cours/api/sections/")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);

  useEffect(() => {
    if (!sectionId) return;

    fetch(
      `http://127.0.0.1:8000/cours/api/lecons/?section=${sectionId}`
    )
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, [sectionId]);

  return (
    <AdminLayout>
      <h1>🎬 Leçons</h1>

      <select onChange={(e) => setSectionId(e.target.value)}>
        <option value="">-- Choisir une section --</option>
        {sections.map((s) => (
          <option key={s.id} value={s.id}>
            {s.titre}
          </option>
        ))}
      </select>

      {lessons.map((l) => (
        <div key={l.id} className="lesson-row">
          ▶ {l.titre}
        </div>
      ))}
    </AdminLayout>
  );
}
