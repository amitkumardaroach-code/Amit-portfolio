import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-profile">
          <h2>Amit Daroch</h2>

          <p>
            Focused on creating production-quality 3D assets with attention to
            modeling, topology, texturing, and presentation. Always exploring
            new workflows and improving my skills as a Character Artist.
          </p>

          <div className="footer-location">📍 India</div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <a href="mailto:amitkumardarochl@gmail.com">
            📧 amitkumardarochl@gmail.com
          </a>

        </div>

        <div className="footer-section">
          <h3>Portfolio</h3>

          <a
            href="https://darcoh_amit.artstation.com"
            target="_blank"
            rel="noreferrer"
          >
            ArtStation
          </a>

          <a
            href="https://www.linkedin.com/in/amit-kumar-daroch-b54a29415"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          {/* <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a> */}

          {/* <a href="/resume.pdf"> Resume</a> */}
        </div>

        <div className="footer-section">
          <h3>Skills</h3>

          <span>Character Modeling</span>
          <span>Clothing Creation</span>
          <span> Hard Surface Modeling</span>
          <span>Retopology</span>
          <span>UV Unwrapping</span>
          <span>PBR Texturing</span>
          <span>Substance 3D Painte</span>
          <span>Basic Animation</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p> Amit Daroach | 3D Artist</p>
      </div>
    </footer>
  );
}

export default Footer;
