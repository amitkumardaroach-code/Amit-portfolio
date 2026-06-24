import {
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaArrowRight,
  FaDownload,
  FaVideo,
} from "react-icons/fa";
import "./hero.css";

import { SiBlender } from "react-icons/si";
import { TbBrandAdobePhotoshop, TbBrandAdobeAfterEffect } from "react-icons/tb";

import HeroModel from "./HeroModel";
export default function Hero() {
  return (
    <section className="hero">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          AKD<span>.</span>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Amit Kumar <br />
            <span>Daroch</span>
          </h1>

          <h3>3D Character Artist</h3>

          <p className="description">
            Self-taught 3D Artist specializing in game-ready characters,
            clothing assets, and real-time workflows. Experienced with Blender,
            Autodesk Maya, Substance Painter, and Unreal Engine.
          </p>

          {/* SKILLS */}
          <div className="skills">
            <div className="skill-box">
              {/* <SiBlender /> */}
              Blender
            </div>
            <div className="skill-box">
              {/* <SiMaya /> */}
              Autodesk Maya
            </div>

            <div className="skill-box">Substance 3D Painter</div>

            <div className="skill-box">Unreal Engine</div>

            <div className="skill-box">
              {/* <TbBrandAdobePhotoshop /> */}
              Photoshop
            </div>

            <div className="skill-box">
              {/* <FaVideo /> */}
              Premiere Pro
            </div>

            <div className="skill-box">
              {/* <TbBrandAdobeAfterEffect /> */}
              After Effects
            </div>

            <div className="skill-box">DaVinci Resolve</div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-right">
          <div className="hero-canvas">
            <HeroModel />
          </div>
        </div>
      </div>
    </section>
  );
}
