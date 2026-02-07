import './videomodal.css';
export default function VideoPreviewModal({ lecon, onClose }) {
  if (!lecon) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>✕</button>

        <h3>{lecon.titre}</h3>

        <video
          src={`http://127.0.0.1:8000${lecon.video}`}
          controls
          autoPlay
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}
