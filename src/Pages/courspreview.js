import "./courspreview.css";

export default function CoursePreview({ previews }) {
  return (
    <section className="preview-section">
      <h2 className="preview-title">Aperçu du cours</h2>

      <div className="preview-grid">
        {previews.map((video, index) => (
          <div className="preview-card">
                <video
                    src={video.url}
                    muted
                    preload="metadata"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                    }}
                    onClick={(e) => {
                    e.target.muted = false;
                    e.target.controls = true;
                    e.target.play();
                    }}
                />
                <p>{video.titre}</p>
            </div>
        ))}
      </div>
    </section>
  );
}
