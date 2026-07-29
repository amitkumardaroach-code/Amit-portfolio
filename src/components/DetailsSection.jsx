import { useState, useEffect } from "react";
import "./DetailsSection.css";

const projects = [
  {
    id: 0,
    title: "CLASSIC CAR",
    thumbnail: "/public/image/Car/Car_render_front.png",
    gallery: [
      "/public/image/Car/Car_render_front.png",
      "/public/image/Car/Car_render_side.png",
      "/public/image/Car/Car_render_back.png",
      "/public/image/Car/Car_render_wire.png",
    ],
    breakdown: [
      { title: "HIGH POLY", image: "/public/image/Car/Car_render_front.png" },
      { title: "LOW POLY", image: "/public/image/Car/Car_render_front.png" },
      { title: "UV", image: "/public/image/Car/Car_render_front.png" },
      {
        title: "FINAL RENDER",
        image: "/public/image/Car/Car_render_front.png",
      },
    ],

    textures: [
      { title: "BASE COLOR", image: "/public/image/Car/Car_render_front.png" },
      { title: "NORMAL", image: "/public/image/Car/Car_render_front.png" },
      { title: "ROUGHNESS", image: "/public/image/Car/Car_render_front.png" },
      { title: "METALLIC", image: "/public/image/Car/Car_render_front.png" },
      { title: "AO", image: "/public/image/Car/Car_render_front.png" },
    ],

    characters: [
      {
        name: "Classic Muscle Car",
        tris: "25,432",
        texture: "4K",
        image: "/public/image/Car/Car_render_front.png",
      },
    ],
  },

  {
    id: 1,
    title: "DOG",

    thumbnail: "/public/image/Dog/Dog_render.png",
    gallery: [
      "/public/image/Car/Car_render_front.png",
      "/public/image/Car/Car_render_side.png",
      "/public/image/Car/Car_render_back.png",
      "/public/image/Car/Car_render_wire.png",
    ],
    breakdown: [
      { title: "SCULPT", image: "/public/image/Dog/Dog_render.png" },
      { title: "RETOPOLOGY", image: "/public/image/Dog/Dog_render.png" },
      { title: "TEXTURE", image: "/public/image/Dog/Dog_render.png" },
      { title: "RENDER", image: "/public/image/Dog/Dog_render.png" },
    ],

    textures: [
      { title: "FUR COLOR", image: "/public/image/Dog/Dog_render.png" },
      { title: "NORMAL", image: "/public/image/Dog/Dog_render.png" },
      { title: "ROUGHNESS", image: "/public/image/Dog/Dog_render.png" },
      { title: "SPECULAR", image: "/public/image/Dog/Dog_render.png" },
      { title: "AO", image: "/public/image/Dog/Dog_render.png" },
    ],

    characters: [
      {
        name: "German Shepherd",
        tris: "42,000",
        texture: "4K",
        image: "/public/image/Dog/Dog_render.png",
      },
    ],
  },

  {
    id: 2,
    title: "CHARACTER",

    thumbnail: "/public/image/Character/character.png",
    gallery: [
      "/public/image/Car/Car_render_front.png",
      "/public/image/Car/Car_render_side.png",
      "/public/image/Car/Car_render_back.png",
      "/public/image/Car/Car_render_wire.png",
    ],

    breakdown: [
      { title: "HIGH POLY", image: "/public/image/Character/character.png" },
      { title: "TOPOLOGY", image: "/public/image/Character/character.png" },
      { title: "BAKING", image: "/public/image/Character/character.png" },
      { title: "FINAL", image: "/public/image/Character/character.png" },
    ],

    textures: [
      { title: "ALBEDO", image: "/public/image/Character/character.png" },
      { title: "NORMAL", image: "/public/image/Character/character.png" },
      { title: "ROUGHNESS", image: "/public/image/Character/character.png" },
      { title: "METALLIC", image: "/public/image/Character/character.png" },
      { title: "AO", image: "/public/image/Character/character.png" },
    ],

    characters: [
      {
        name: "Fantasy Warrior",
        tris: "18,524",
        texture: "4K",
        image: "/public/image/Character/character.png",
      },
    ],
  },
];

export default function DetailsSection() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const currentProject = projects[selectedProject];

  const breakdown = currentProject.breakdown;
  const textures = currentProject.textures;
  const characters = currentProject.characters;

  useEffect(() => {
    setCurrentImage(0);
  }, [selectedProject]);

const nextImage = () => {
  setCurrentImage((prev) =>
    prev === currentProject.gallery.length - 1 ? 0 : prev + 1,
  );
};

const prevImage = () => {
  setCurrentImage((prev) =>
    prev === 0 ? currentProject.gallery.length - 1 : prev - 1,
  );
};

  return (
    <section className="details-section">
      {/* PROJECT SELECTOR */}
      <span className="work-number">
        <span className="line"></span>
        03 WORK
      </span>

      <div className="project-selector">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${
              selectedProject === project.id ? "active" : ""
            }`}
            onClick={() => setSelectedProject(project.id)}
          >
            <img src={project.thumbnail} alt={project.title} />

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>Click to View</p>
            </div>
          </div>
        ))}
      </div>
      <div className="details-top">
        {/* LEFT */}

        <div className="details-left">
          <h1>
            CHARACTERS
            <br />
            <span>I'VE CREATED</span>
          </h1>

          <p>
            High quality, game-ready characters with detailed modeling, clean
            topology and realistic texturing.
          </p>

          <div className="software-icons">
            <div className="software">
              <img src="/icons/blender.png" alt="" />
              <span>BLENDER</span>
            </div>

            <div className="software">
              <img src="/icons/marmoset.png" alt="" />
              <span>MARMOSET</span>
            </div>

            <div className="software">
              <img src="/icons/substance.png" alt="" />
              <span>SUBSTANCE</span>
            </div>

            <div className="software">
              <img src="/icons/photoshop.png" alt="" />
              <span>PHOTOSHOP</span>
            </div>
          </div>
        </div>

        {/* CENTER */}

        <div className="details-center">
          <button className="slider-btn left" onClick={prevImage}>
            &#10094;
          </button>

          <img
            src={currentProject.gallery[currentImage]}
            alt=""
            className="main-character"
          />

          <button className="slider-btn right" onClick={nextImage}>
            &#10095;
          </button>

          <div className="circle-bg"></div>

          <div className="slider-dots">
            {currentProject.gallery.map((_, index) => (
              <span
                key={index}
                className={currentImage === index ? "dot active" : "dot"}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className="details-right">
          <div className="heading">CHARACTER BREAKDOWN</div>

          <div className="breakdown-grid">
            {breakdown.map((item, index) => (
              <div className="break-card" key={index}>
                <img src={item.image} alt="" />

                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <div className="texture-grid">
            {textures.map((item, index) => (
              <div className="texture-card" key={index}>
                <img src={item.image} alt="" />

                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED */}

      <div className="featured">
        <div className="featured-title">FEATURED CHARACTERS</div>

        <div className="character-grid">
          {characters.map((char, index) => (
            <div className="character-card" key={index}>
              <img src={char.image} alt="" />

              <div className="overlay">
                <h3>{char.name}</h3>

                <p>Triangles : {char.tris}</p>

                <p>Texture : {char.texture}</p>

                <button>View Project →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}

      <div className="bottom-features">
        <div className="feature">
          <img src="/icons/topology.png" alt="" />

          <div>
            <h4>CLEAN TOPOLOGY</h4>

            <p>Optimized edge flow for animation</p>
          </div>
        </div>

        <div className="feature">
          <img src="/icons/pbr.png" alt="" />

          <div>
            <h4>PBR TEXTURES</h4>

            <p>Realistic materials and skin shading</p>
          </div>
        </div>

        <div className="feature">
          <img src="/icons/game.png" alt="" />

          <div>
            <h4>GAME READY</h4>

            <p>Engine optimized and production ready</p>
          </div>
        </div>

        <div className="feature">
          <img src="/icons/animation.png" alt="" />

          <div>
            <h4>ANIMATION READY</h4>

            <p>Well prepared topology for smooth deformation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
