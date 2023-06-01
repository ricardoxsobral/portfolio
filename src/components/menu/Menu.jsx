import linkedin from "../../assets/linkedin.png";
import instragram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import "./Menu.css"

function Menu() {
  return (
    <div className="Menu">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="../index.html">
            &lt;Ricardo/&gt;
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Banner">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Skills">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Project">
                  Projetos
                </a>
              </li>
              <hr></hr>
              <li className="nav-item">
                <div className="social-media">
                  <div className="icon">
                    <a href="https://www.linkedin.com/in/ricardoxsobral/" target="_blank"><img src={linkedin}></img></a>
                  </div>
                  <div className="icon">
                  <a href="https://github.com/ricardoxsobral" target="_blank"><img src={github}></img></a>
                  </div>
                  <div className="icon">
                  <a href="https://www.instagram.com/sobraiii/" target="_blank"><img src={instragram}></img></a>
                  </div>
                </div>
              </li>
              <li className="nav-item btn-contact">
                <a className="nav-link" href="https://contate.me/ricardo-sobral" target="_blank">
                  <button className="borda">Contato</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
