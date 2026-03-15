import { Link } from 'react-router-dom';
import videoSrc from '../assets/66a3c3e1-ba5d-4278-8ec4-0b9a7a3ea23f.mp4';

export default function AxiomeRoute() {
  return (
    <div className="axiome-container">
      {/* ── Cinematic Video Background ── */}
      <video
        className="axiome-video"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ── Subtle Dark Overlay ── */}
      <div className="axiome-overlay" />

      {/* ── Global Navigation Overlay ── */}
      <header className="axiome-header">
        <Link to="/" className="axiome-back-link">
          <span className="axiome-back-arrow">←</span>
          Back to Home
        </Link>

        {/* ── Narrative Menu ── */}
        <nav className="axiome-menu">
          <Link to="/axiome/process" className="axiome-menu-link">THE PROCESS</Link>
          <Link to="/axiome/maison" className="axiome-menu-link">LA MAISON</Link>
          <Link to="/axiome/collection" className="axiome-menu-link">THE COLLECTION</Link>
        </nav>
      </header>
    </div>
  );
}
