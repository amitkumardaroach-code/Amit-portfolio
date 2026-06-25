import "./WalkCycle.css";
import { useState } from "react";

const videos = [
  {
    title: "Side View",
    src: "/Video/Walkcycle_side.mp4",
  },
  {
    title: "Front View",
    src: "/Video/Walkcycle_front.mp4",
  },
  {
    title: "Back View",
    src: "/Video/Walkcycle_back.mp4",
  },
  {
    title: "Top View",
    src: "/Video/Walkcycle_Top.mp4",
  },
];

export default function WalkCycle() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isChanging, setIsChanging] = useState(false);
 const nextVideo = () => {
   setIsChanging(true);

   setTimeout(() => {
     setSelectedIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

     setTimeout(() => {
       setIsChanging(false);
     }, 50);
   }, 250);
 };
const prevVideo = () => {
  setIsChanging(true);

  setTimeout(() => {
    setSelectedIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));

    setTimeout(() => {
      setIsChanging(false);
    }, 50);
  }, 250);
};
  return (
    <section className="walk-page">
      <div className="walk-header">
        <h1>
          CHARACTER <span>ANIMATION</span>
        </h1>
      </div>

      <div className="walk-layout">
        {/* LEFT SIDE */}
        <aside className="sidebar">
          <div className="card">
            <h3>OVERVIEW</h3>

            <p>
              This project showcases a stylized dog walk cycle. The animation
              focuses on natural locomotion, balanced weight shifts, clean foot
              placement, and a seamless looping motion.
            </p>

            <div className="info-row">
              <span>SOFTWARE</span>
              <p>Blender</p>
            </div>

            <div className="info-row">
              <span>ENGINE</span>
              <p>Cycles</p>
            </div>

            <div className="info-row">
              <span>FRAME RATE</span>
              <p>24 FPS</p>
            </div>
          </div>

          <div className="card">
            <h3>NOTES</h3>

            <ul>
              <li>Hand-keyed animation.</li>
              <li>Loop-ready walk cycle.</li>
              <li>Natural body mechanics.</li>
              <li>Balanced weight shifting.</li>
              <li>Clean foot placement.</li>
            </ul>
          </div>
        </aside>

        {/* RIGHT SIDE */}
        <div className="content">
          <div className="video-showcase">
            {videos.map((video, index) => (
              <div
                className="video-box"
                key={index}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="video-title">{video.title}</div>

                <video autoPlay muted loop playsInline>
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN VIDEO VIEWER */}
      {selectedIndex !== null && (
        <div className="video-modal" onClick={() => setSelectedIndex(null)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="close-btn"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            {/* Previous */}
            <button className="nav-btn prev-btn" onClick={prevVideo}>
              ❮
            </button>

            {/* Next */}
            <button className="nav-btn next-btn" onClick={nextVideo}>
              ❯
            </button>

            {/* Title */}
            <h2 className="fullscreen-title">{videos[selectedIndex].title}</h2>

            {/* Video */}
            <div className="video-wrapper">
              <video
                key={selectedIndex}
                className={`fullscreen-video ${isChanging ? "video-fade" : ""}`}
                controls
                autoPlay
                loop
                src={videos[selectedIndex].src}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
