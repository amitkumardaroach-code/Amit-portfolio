// Works.jsx
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import ProjectDetail from "./ProjectDetail";
import { useNavigate } from "react-router-dom";

const categories = [
  "All",
  "3D Characters",
   "Props",
  "Clothing",
  "Vehicles",
];

export const projects = [
  {
    id: 1,
    title: "Dog Character",
    subtitle: "Realistic Character",
    category: "3D Characters",
    tag: "3D Character",
    image: "/image/Dusky/Dusky_thumbnail.png",
    description: "Game-ready stylized dog character.",
    software: "Blender, Substance 3D Painter",
    renderEngine: "Cycles",
    TriangleCount: "14,226 ",
    Texture: "2K (2048×2048)",
    stats: [
      // { label: "Vertices", value: "7,115" },
      // { label: "Edges", value: "14,229" },
      // { label: "Faces", value: "7,116" },
      // { label: "Tris", value: "14,226" },
    ],
    features: [
      "Game-ready stylized dog character",
      "Clean animation-friendly topology",
      "High-poly to low-poly workflow",
      "PBR texturing in Substance 3D Painter",
      "Efficient UV layout",
      "2K texture maps",
    ],
    pipeline: [
      "Concept",
      "Base Modeling",
      "Retopology",
      "UV Unwrapping",
      "Map Baking",
      "PBR Texturing",
      "Lighting & Rendering",
    ],
    about:
      "This stylized dog character was created as a game-ready asset using Blender and Substance 3D Painter. The workflow included high-poly sculpting, retopology, UV unwrapping, baking, and PBR texturing. The character is optimized for real-time use while maintaining clean topology and efficient UVs.",
    thumbnails: [
      "/image/Dusky/Dusky_side.png",
      "/image/Dusky/Dusky_face.png",
      "/image/Dusky/Dusky_Back.png",
      "/image/Dusky/Dusky_top.png",
    ],
    mainImage: "/image/Dusky/Dusky.png",

    panels: [
      {
        label: "Wireframe",
        image: "/image/Dusky/Wireframe.png",
        hasDrag: false,
      },
      {
        label: "Wireframe Perspective View",
        image: "/image/Dusky/Wireframe_side.png",
        hasDrag: false,
      },
      {
        label: "Wireframe Rear View",
        image: "/image/Dusky/Wireframe_back.png",
        hasDrag: false,
      },
      {
        label: "UV Layout",
        image: "/image/Dusky/UV.png",
        hasDrag: true,
      },
    ],
    textures: [
      {
        label: "Albedo",
        image: "/image/Dusky/Texture/Base_color.png",
      },
      {
        label: "Normal",
        image: "/image/Dusky/Texture/Normal_OpenGL.png",
      },
      {
        label: "Roughness",
        image: "/image/Dusky/Texture/Roughness.png",
      },
    ],
  },
  {
    id: 2,
    title: "Female Character",
    subtitle: "Realistic Character",
    category: "3D Characters",
    tag: "3D Character",
    image: "/image/River/River_thumbnail.png",
    description: "Stylized female character featuring clean topology.",
    date: "January 2024",
    software: "Blender, Substance 3D Painter",
    renderEngine: "Cycles",
    TriangleCount: "15,530 ",
    Texture: "2K (2048×2048)",

    stats: [
      // { label: "Vertices", value: "7,845" },
      // { label: "Edges", value: "15,611" },
      // { label: "Faces", value: "7,765" },
      // { label: "Tris", value: "15,530" },
    ],
    features: [
      "Stylized female character",
      "Animation-friendly topology",
      "Efficient UV layout",
      "PBR skin texturing in Substance 3D Painter",
      "2K texture maps",
    ],
    pipeline: [
      "Concept",
      "Base Modeling",
      "Retopology",
      "UV Unwrapping",
      "Map Baking",
      "PBR Texturing",
      "Lighting & Rendering",
    ],
    about:
      "This stylized female character was created with a focus on appealing facial features, clean topology, and animation-ready geometry. The character was modeled in Blender, while the skin textures were created in Substance 3D Painter using a PBR workflow",
    thumbnails: [
      "/image/River/River_Face.png",
      "/image/River/River_front.png",
      "/image/River/River_side.png",
      "/image/River/River_Back.png",
    ],
    mainImage: "/image/River/River_Face.png",
    panels: [
      {
        label: "Face Wireframe",
        image: "/image/River/wireframeAndUV/River_wireframe_face.png",
        hasDrag: false,
      },
      {
        label: "Face UV Layout",
        image: "/image/River/wireframeAndUV/Face UV.png",
        hasDrag: false,
      },
      {
        label: "Hand Wireframe",
        image: "/image/River/wireframeAndUV/River_wireframe_Hand.png",
        hasDrag: false,
      },
      {
        label: "Hand UV Layout",
        image: "/image/River/wireframeAndUV/Hand UV.png",
        hasDrag: true,
      },
    ],
    textures: [
      {
        label: "Skin Albedo",
        image: "/image/River/Textures/river_Skin_Color.png",
      },
      {
        label: "Skin Normal",
        image: "/image/River/Textures/river_Skin_Normal.png",
      },
      {
        label: "Skin Roughness",
        image: "/image/River/Textures/river_Skin_Roughness.png",
      },
      {
        label: "Hand Albedo",
        image: "/image/River/Textures/river_Hand_color.png",
      },
      {
        label: "Hand Normal",
        image: "/image/River/Textures/river_Hand_Normal.png",
      },
      {
        label: "Hand Roughness",
        image: "/image/River/Textures/river_Hand_Roughness.png",
      },
    ],
  },
  {
    id: 3,
    title: "Classic Car",
    subtitle: "3D Vehicle Model",
    category: "Vehicles",
    tag: "Vehicle",
    image: "/image/Car/Car_thumbnail.png",
    description: "Detailed classic muscle car.",
    date: "February 2024",
    software: "Blender",
    renderEngine: "Cycles",
    TriangleCount: "52,892 Tris",
    Texture: "2K",

    stats: [
      // { label: "Vertices", value: "27,385" },
      // { label: "Edges", value: "54,003" },
      // { label: "Faces", value: "26,689" },
      // { label: "Tris", value: "52,892" },
    ],
    features: [
      "Detailed classic muscle car model",
      "Clean quad-based topology",
      "Hard-surface modeling workflow",
      "Accurate body panel construction",
      "Blender shader-based materials",
    ],
    pipeline: [
      "Concept",
      "Base Modeling",
      "Topology Refinement",
      "Material Creation",
      "Lighting & Rendering",
    ],
    about:
      "These high-poly leather boots were created using a subdivision modeling workflow with a focus on clean topology, accurate footwear construction, and realistic leather materials",
    thumbnails: [
      "/image/Car/Car_render_front.png",
      "/image/Car/Car_render_side.png",
      "/image/Car/Car_render_Back.png",
      "/image/Car/Car_render_bumper.png",
    ],
    mainImage: "/image/Car/Car_render_front.png",
    panels: [
      {
        label: "Wireframe Perspective",
        image: "/image/Car/Car_wireframe_front.png",
        hasDrag: false,
      },
      {
        label: "Wireframe Detail",
        image: "/image/Car/Car_wireframe.png",
        hasDrag: false,
      },
      {
        label: "Additional Wireframe View",
        image: "/image/Car/Car_wireframe_top.png",
        hasDrag: false,
      },
      {
        label: "Clay Preview",
        image: "/image/Car/Car_clay_render.png",
        hasDrag: true,
      },
    ],
    textures: [
      // {
      //   label: "Albedo",
      //   image:
      //     "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // },
      // {
      //   label: "Normal",
      //   image:
      //     "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
      // },
      // {
      //   label: "Roughness",
      //   image:
      //     "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // },
      // {
      //   label: "Metallic",
      //   image:
      //     "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
      // },
      // {
      //   label: "AO",
      //   image:
      //     "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // },
      // {
      //   label: "Height",
      //   image:
      //     "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
      // },
    ],
  },
  {
    id: 4,
    title: "Oil Barrel",
    subtitle: "3D Vehicle Model",
    category: "Props",
    tag: "Prop",
    image: "/image/Barrel/Barrel_Thumbnail.jpg",
    description: "High-poly oil barrel",
    date: "February 2024",
    software: "Autodesk Maya, Substance 3D Painter",
    renderEngine: "Arnold",
    TriangleCount: "16,994 ",
    Texture: "2K (2048 x 2048)",

    stats: [
      // { label: "Vertices", value: "27,385" },
      // { label: "Edges", value: "54,003" },
      // { label: "Faces", value: "26,689" },
      // { label: "Tris", value: "52,892" },
    ],
    features: [
      "High-poly hard-surface prop",
      "PBR texturing in Substance 3D Painter",
      "Realistic worn metal materials",
      "2K texture maps",
      // "4K texture maps",
    ],
    pipeline: [
      "Concept",
      "Base Modeling",
      "UV Unwrapping",
      "Map Baking",
      "PBR Texturing",
      "Lighting & Rendering",
    ],
    about:
      "This high-poly oil barrel was created in Autodesk Maya with a focus on clean hard-surface modeling, accurate proportions, and realistic surface detailing. The asset was textured in Substance 3D Painter using a PBR workflow and rendered in Arnold.",
    thumbnails: [
      // "image/Barrel/render.jpg"
    ],
    mainImage: "/image/Barrel/Barrel_front.jpg",
    panels: [
      {
        label: "Wireframe Perspective",
        image: "/image/Barrel/Barrel_wireframe.png",
        hasDrag: false,
      },
      {
        label: "Clay Preview",
        image: "/image/Barrel/Barrel_clay.jpg",
        hasDrag: false,
      },
      {
        label: "Front View",
        image: "/image/Barrel/Barrel_front.jpg",
        hasDrag: false,
      },
      {
        label: "Top View",
        image: "/image/Barrel/Barrel_Top.jpg",
        hasDrag: true,
      },
    ],
    textures: [
      {
        label: "Albedo",
        image: "/image/Barrel/Textures/Texture_Base_color.png",
      },
      {
        label: "Normal",
        image: "/image/Barrel/Textures/Texture_Normal_OpenGL.png",
      },
      {
        label: "Roughness",
        image: "/image/Barrel/Textures/Texture_Roughness.png",
      },
      {
        label: "Metallic  ",
        image: "/image/Barrel/Textures/Texture_Metallic.png",
      },
    ],
  },
  {
    id: 5,
    title: "Denim Jean",
    subtitle: "3D Jean Model",
    category: "Clothing",
    tag: "Clothing",
    image: "/image/Lock/Denim/jean_Thumbnail.png",
    description:
      "High-poly denim jeans created using a multiresolution workflow..",
    date: "February 2024",
    software: "Blender",
    renderEngine: "Cycles",
    TriangleCount: "---------",
    Texture: "2K",

    stats: [
      // { label: "Vertices", value: "60,200" },
      // { label: "Edges", value: "120,000" },
      // { label: "Faces", value: "60,100" },
      // { label: "Tris", value: "120,000" },
    ],
    features: [
      "High-poly clothing asset",
      " Multiresolution sculpting workflow",
      "Realistic fabric folds and wrinkles",
      "Detailed pocket and seam construction",
      "PBR texturing workflow",
      "2K texture maps",
    ],
    pipeline: [
      "Concept",
      " Base Modeling",
      "Multires Sculpting",
      "UV Unwrapping",
      "PBR Texturing",
      "Lighting & Rendering",
    ],
    about:
      "This project showcases a high-poly denim jeans asset created using multiresolution workflow. Special attention was given to achieving natural fabric folds, realistic stitching details, clean garment proportions, and accurate seam placement. The asset was textured using a PBR workflow with 2K texture maps.",
    thumbnails: [
      // "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
      // "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
    ],
    mainImage: "/image/Lock/Denim/jean_front.png",
    panels: [
      {
        label: "Clay Render",
        image: "/image/Lock/Denim/jean_clay_render.png",
        hasDrag: false,
      },
      {
        label: "Side View",
        image: "/image/Lock/Denim/jean_Side.png",
        hasDrag: false,
      },

      {
        label: "Front View ",
        image: "/image/Lock/Denim/jean_front.png",
        hasDrag: false,
      },
      {
        label: "Back View ",
        image: "/image/Lock/Denim/jean_Back.png",
        hasDrag: true,
      },
    ],
    textures: [
      {
        label: "Albedo",
        image: "/image/Lock/Denim/Denim_Diffuse.png",
      },
      {
        label: "Normal",
        image: "/image/Lock/Denim/Denim_Normal.png",
      },
      {
        label: "Roughness",
        image: "/image/Lock/Denim/Denim_Roughness.png",
      },
      {
        label: "Displacement",
        image: "/image/Lock/Denim/Denim_Displacement.png",
      },
    ],
  },
  {
    id: 6,
    title: "Leather Jacket",
    subtitle: "3D Jacket Model",
    category: "Clothing",
    tag: "Clothing",
    image: "/image/River/Jacket/Jacket thumbnail.png",
    description:
      "High-poly leather jacket created using a multiresolution workflow.",
    software: "Blender",
    renderEngine: "Cycles",
    TriangleCount: "---------",
    Texture: "2K",
    stats: [
      // { label: "Vertices", value: "60,200" },
      // { label: "Edges", value: "120,000" },
      // { label: "Faces", value: "60,100" },
      // { label: "Tris", value: "120,000" },
    ],
    features: [
      "High-poly clothing asset",
      "Multiresolution detailing workflow",
      "Realistic stitching and seam details",
      "PBR workflow",
      "2K texture maps",
    ],
    pipeline: [
      "Concept",
      " Base Modeling",
      "Multires Sculpting",
      "UV Unwrapping",
      "PBR texturing workflow",
      "Lighting & Rendering",
    ],
    about:
      "The project focused on realistic garment shapes, surface details, and material presentation. Multiresolution sculpting was used to add fine details and enhance the overall form. The asset was textured using a PBR workflow with 2K texture maps.",

    thumbnails: [
      // "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
      // "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
    ],
    mainImage: "/image/River/Jacket/Jacket.png",
    panels: [
      {
        label: "Clay render",
        image: "/image/River/Jacket/Jacket_clay_render.png",
        hasDrag: false,
      },
      {
        label: "Side View ",
        image: "/image/River/Jacket/Jacket_side.png",
        hasDrag: false,
      },
      {
        label: "Front View ",
        image: "/image/River/Jacket/Jacket_front.png",
        hasDrag: false,
      },
      {
        label: "Back View ",
        image: "/image/River/Jacket/Jacket_back.png",
        hasDrag: true,
      },
    ],
    textures: [
      {
        label: "Albedo",
        image: "/image/River/Jacket/Jacket_texture/Jacket_Diffuse.png",
      },
      {
        label: "Normal",
        image: "/image/River/Jacket/Jacket_texture/Jacket_Normal.png",
      },
      {
        label: "Roughness",
        image: "/image/River/Jacket/Jacket_texture/Jacket_roughness.png",
      },
      {
        label: "Displacement",
        image:
          "/image/River/Jacket/Jacket_texture/Jacket_displacement.png",
      },
    ],
  },
  {
    id: 7,
    title: "Denim Jeans",
    subtitle: "3D Jean Model",
    category: "Clothing",
    tag: "Clothing",
    image: "/image/River/Jean/Jean thumbnail .png",
    description:
      "High-poly denim jeans created using a multiresolution workflow..",
    // date: "February 2024",
    software: "Blender",
    renderEngine: "Cycles",
    TriangleCount: "---------",
    Texture: "2K (2048 x 2048)",

    stats: [
      // { label: "Vertices", value: "60,200" },
      // { label: "Edges", value: "120,000" },
      // { label: "Faces", value: "60,100" },
      // { label: "Tris", value: "120,000" },
    ],
    features: [
      "High-poly clothing asset",
      "Multiresolution detailing workflow",
      "PBR texturing workflow",
      "2K texture maps",
    ],
    pipeline: [
      "Concept",
      " Base Modeling",
      "Multires Sculpting",
      "UV Unwrapping",
      "PBR Texturing",
      "Lighting & Rendering",
    ],
    about:
      "This project showcases a pair of high-poly denim jeans created using multiresolution workflow. Special attention was given to natural fabric folds and garment shape. The asset was textured using a PBR workflow with 2K texture maps and rendered in Cycles to achieve realistic material definition and presentation quality.",
    thumbnails: [
      // "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
      // "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
    ],
    mainImage: "/image/River/Jean/Jean_redner_front.png",
    panels: [
      {
        label: "Wireframe",
        image: "/image/River/Jean/Jean_clay_redner.png",
        hasDrag: false,
      },
      {
        label: "Side View ",
        image: "/image/River/Jean/Jean_redner_side.png",
        hasDrag: false,
      },
      {
        label: "Front View ",
        image: "/image/River/Jean/Jean_redner_front.png",
        hasDrag: false,
      },
      {
        label: "Back View ",
        image: "/image/River/Jean/Jean_redner_back.png",
        hasDrag: true,
      },
    ],
    textures: [
      {
        label: "Albedo",
        image: "/image/River/Jean/Jean_texture/Jeans_diffuse.png",
      },
      {
        label: "Normal",
        image: "/image/River/Jean/Jean_texture/Jeans_Normal.png",
      },
      {
        label: "Roughness",
        image: "/image/River/Jean/Jean_texture/Jeans_rougnhness.png",
      },
      {
        label: "Displacement",
        image: "/image/River/Jean/Jean_texture/Jeans_Displacement.png",
      },
    ],
  },
  {
    id: 8,
    title: "Boots",
    subtitle: "3D Boots Model",
    category: "Clothing",
    tag: "Clothing",
    image: "/image/River/Boots/Boots Thumbnail.png",
    description: "Low-poly leather boot asset created with 2K PBR textures.",
    date: "February 2024",
    software: "Blender",
    renderEngine: "Cycles",
    TriangleCount: "3,810 Tris",
    Texture: "2K",

    stats: [
      // { label: "Vertices", value: "1,976" },
      // { label: "Edges", value: "3,872" },
      // { label: "Faces", value: "1,901" },
      // { label: "Tris", value: "3,810" },
    ],
    features: [
      "High-poly footwear asset",
      "Subdivision modeling workflow",
      "Realistic leather material",
      "PBR workflow",
      "2K texture maps",
    ],
    pipeline: [
      "Concept",
      "Modeling",
      "Subdivision Modeling",
      "UV Unwrapping",
      "PBR Texturing",
      "Lighting & Rendering",
    ],
    about:
      "These leather boots were created using a subdivision modeling workflow with a focus on clean topology, accurate proportions, and realistic material definition. Special attention was given to the overall shape, surface details, and presentation.",
    thumbnails: [
      // "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
      // "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      // "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&q=80",
    ],
    mainImage: "/image/River/Boots/Boots.png",
    panels: [
      {
        label: "Wireframe",
        image: "/image/River/Boots/Boots_Wireframe.png",
        hasDrag: false,
      },
      {
        label: "Clay Render",
        image: "/image/River/Boots/Boots_clay_render.png",
        hasDrag: false,
      },
      {
        label: "Front View ",
        image: "/image/River/Boots/Boots_redner_front.png",
        hasDrag: false,
      },
      {
        label: "Top View ",
        image: "/image/River/Boots/Boots_redner_Top.png",
        hasDrag: true,
      },
    ],
    textures: [
      {
        label: "Albedo",
        image: "/image/River/Boots/Boots_texture/Boots_diffuse.png",
      },
      {
        label: "Normal",
        image: "/image/River/Boots/Boots_texture/Boots_Normal.png",
      },
      {
        label: "Roughness",
        image: "/image/River/Boots/Boots_texture/Boots_roughness.png",
      },
      {
        label: "Displacement",
        image: "/image/River/Boots/Boots_texture/Boots_displacement.png",
      },
    ],
  },
];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("All");

  const navigate = useNavigate();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="works-section">
      <div className="works-header">
        <div className="works-header-left">
          {/* <p className="works-label">FEATURED</p> */}
          <h2 className="works-title">My Work</h2>
        </div>

        {/* <button className="view-all-btn">
          View All Projects <BsGrid3X3Gap />
        </button> */}
      </div>

      <div className="works-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${
              activeFilter === cat ? "filter-active" : ""
            }`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="works-grid">
        {filtered.map((project) => (
          <div
            className="work-card"
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="work-card-img-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="work-card-img"
              />

              <div className="work-card-overlay" />
            </div>

            <div className="work-card-footer">
              <span className="work-tag">{project.tag}</span>

              <div className="work-card-info">
                <div>
                  <h3 className="work-card-title">{project.title}</h3>

                  <p className="work-card-sub">{project.subtitle}</p>
                </div>

                <button
                  className="work-arrow-btn"
                  onClick={(e) => {
                    e.stopPropagation();

                    navigate(`/project/${project.id}`);
                  }}
                >
                  <FiArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
