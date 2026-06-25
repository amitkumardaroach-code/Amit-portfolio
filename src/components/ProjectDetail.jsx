// ProjectDetail.jsx
import { useState } from "react";
import {
  FaArrowLeft,
  FaExpand,
  FaPlay,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  FiTag,
  FiCalendar,
  FiTool,
  FiZap,
  FiLayers,
  FiCheck,
} from "react-icons/fi";
import { BsMouseFill } from "react-icons/bs";

const PIPELINE_ICONS = ["✏️", "🗿", "🔺", "📐", "🎨", "🖥️"];

export default function ProjectDetail({ project, onBack }) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [lightbox, setLightbox] = useState(null); // index of open panel, or null

  const openLightbox = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);

  const prevPanel = () =>
    setLightbox(
      (prev) => (prev - 1 + project.panels.length) % project.panels.length,
    );
  const nextPanel = () =>
    setLightbox((prev) => (prev + 1) % project.panels.length);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  return (
    <div className="pd-root">
      {/* ── NAVBAR ── */}
      <nav className="pd-nav">
        <div className="pd-nav-left">
          <span className="pd-logo">
            AKD<span>.</span>
          </span>
          <button className="pd-back-btn" onClick={onBack}>
            <FaArrowLeft /> Back to Home
          </button>
        </div>
        {/* <ul className="pd-nav-links">
          {["Home", "About", "Works", "Skills", "Contact"].map((l) => (
            <li key={l} className={l === "Works" ? "pd-nav-active" : ""}>
              {l}
            </li>
          ))}
        </ul> */}
      </nav>

      {/* ── MAIN 3-COL GRID ── */}
      <div className="pd-body">
        {/* COL 1 — Main viewer + thumbnails */}
        <div className="pd-col-viewer">
          <div className="pd-main-img-wrap">
            <img
              src={project.thumbnails[activeThumb] || project.mainImage}
              alt={project.title}
              className="pd-main-img"
            />
            <div className="pd-main-gradient" />

            {/* Thumbnails overlaid on the left edge */}
            <div className="pd-thumbs">
              {project.thumbnails.map((t, i) => (
                <div
                  key={i}
                  className={`pd-thumb ${activeThumb === i ? "pd-thumb-active" : ""}`}
                  onClick={() => setActiveThumb(i)}
                >
                  <img src={t} alt={`view-${i}`} />
                </div>
              ))}
            </div>

            {/* <div className="pd-drag-hint">
              <BsMouseFill /> Drag to Rotate
            </div> */}
            {/* <button className="pd-expand-btn">
              <FaExpand />
            </button> */}
          </div>
        </div>

        {/* COL 2 — Four panels grid */}
        <div className="pd-col-panels">
          {project.panels.map((panel, i) => (
            <div className="pd-panel" key={i} onClick={() => openLightbox(i)}>
              <div className="pd-panel-top">
                <span className="pd-panel-label">
                  {i === 0 && <span className="pd-panel-dot" />}
                  {panel.label}
                </span>
              </div>

              <div className="pd-panel-img-wrap">
                <img
                  src={panel.image}
                  alt={panel.label}
                  className="pd-panel-img"
                />
                {/* Hover expand hint */}
                <div className="pd-panel-hover-hint">
                  <FaExpand size={16} />
                </div>
              </div>

              {/* Stats overlay — wireframe panel only */}
              {i === 0 && (
                <div className="pd-mesh-stats">
                  {project.stats.map((s) => (
                    <div className="pd-mesh-stat" key={s.label}>
                      <span className="pd-mesh-label">{s.label}</span>
                      <span className="pd-mesh-val">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Turntable hint */}
              {/* {panel.hasDrag && (
                <div className="pd-turntable-hint">
                  Drag to Rotate <FaPlay size={9} />
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* COL 3 — Info sidebar */}
        <div className="pd-col-info">
          <div className="pd-info-top">
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-category">{project.category}</p>
            <p className="pd-desc">{project.description}</p>
          </div>

          {/* Meta table */}
          
          <div className="pd-meta-table">
            <div className="pd-meta-row">
              
              <FiTag /> <span>Category</span>{" "}
              <strong>{project.category}</strong>
            </div>
            <div className="pd-meta-row">
              <FiCalendar /> <span>Texture Resolution</span>{" "}
              <strong>{project.Texture}</strong>
            </div>
            <div className="pd-meta-row">
              <FiTool /> <span>Software</span>{" "}
              <strong>{project.software}</strong>
            </div>
            <div className="pd-meta-row">
              <FiZap /> <span>Render Engine</span>{" "}
              <strong>{project.renderEngine}</strong>
            </div>
            <div className="pd-meta-row">
              <FiLayers /> <span>Triangle Count</span>{" "}
              <strong>{project.TriangleCount}</strong>
            </div>
          </div>

          {/* Texture maps */}
          <div className="pd-tex-section">
            <h3 className="pd-tex-heading">Texture Maps</h3>
            <div className="pd-tex-grid">
              {project.textures.map((t) => (
                <div className="pd-tex-item" key={t.label}>
                  <img src={t.image} alt={t.label} />
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="pd-bottom">
        <div className="pd-bottom-card">
          <h3>About the Project</h3>
          <p>{project.about}</p>
        </div>

        <div className="pd-bottom-card">
          <h3>Key Features</h3>
          <ul className="pd-features">
            {project.features.map((f) => (
              <li key={f}>
                <span className="pd-check">·</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="pd-bottom-card">
          <h3>Tools &amp; Pipeline</h3>
          <ul className="pd-pipeline">
            {project.pipeline.map((step, i) => (
              <li className="pd-pipe-item" key={step}>
                <span className="pd-check">·</span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div className="pd-lightbox" onClick={handleBackdropClick}>
          <div className="pd-lightbox-box">
            {/* Header */}
            <div className="pd-lightbox-header">
              <span className="pd-lightbox-label">
                {project.panels[lightbox].label}
              </span>
              <button className="pd-lightbox-close" onClick={closeLightbox}>
                <FaTimes />
              </button>
            </div>

            {/* Image */}
            <div className="pd-lightbox-img-wrap">
              <img
                src={project.panels[lightbox].image}
                alt={project.panels[lightbox].label}
                className="pd-lightbox-img"
              />
            </div>

            {/* Prev / Next */}
            <button className="pd-lightbox-prev" onClick={prevPanel}>
              <FaChevronLeft />
            </button>
            <button className="pd-lightbox-next" onClick={nextPanel}>
              <FaChevronRight />
            </button>

            {/* Dot indicators */}
            <div className="pd-lightbox-dots">
              {project.panels.map((_, i) => (
                <span
                  key={i}
                  className={`pd-lightbox-dot ${i === lightbox ? "pd-lightbox-dot-active" : ""}`}
                  onClick={() => setLightbox(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
