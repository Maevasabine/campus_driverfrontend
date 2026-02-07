import { useState } from "react";
import './courscontent.css';

export default function CoursContent({ sections, onPreview }) {
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="course-content">
      <h2>Contenu du cours</h2>

      {sections.map((section) => (
        <div key={section.id} className="section">
          <button
            className="section-header"
            onClick={() =>
              setOpenSection(
                openSection === section.id ? null : section.id
              )
            }
          >
            <span>{section.titre}</span>
            <span>{openSection === section.id ? "−" : "+"}</span>
          </button>

          {openSection === section.id && (
            <ul className="lesson-list">
              {section.lecons.map((lecon) => (
                <li
                  key={lecon.id}
                  className={`lesson ${
                    lecon.is_preview ? "preview" : "locked"
                  }`}
                  onClick={() =>
                    lecon.is_preview && onPreview(lecon)
                  }
                >
                  <span>▶ {lecon.titre}</span>
                  {!lecon.is_preview && <span className="lock">🔒</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
