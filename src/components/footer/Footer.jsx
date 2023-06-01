import React, { useEffect, useState } from "react";

import "./Footer.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import telefone from "../../assets/telefone.png";
import email from "../../assets/email.png";

function Footer() {
  const [mostrarDiv, setMostrarDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 1550) {
        setMostrarDiv(true);
      } else {
        setMostrarDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h1>Contato</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={`contato ${mostrarDiv ? "show" : ""}`}>
              <div className="contato-item">
                <a
                  href="https://www.linkedin.com/in/ricardoxsobral/"
                  target="_blank"
                >
                  <img src={linkedin} alt="Linkedin Logo"></img>
                  <h6>@ricardoxsobral</h6>
                </a>
              </div>
              <div className="contato-item">
                <a href="https://github.com/ricardoxsobral" target="_blank">
                  <img src={github} alt="GitHub Logo"></img>
                  <h6>@ricardoxsobral</h6>
                </a>
              </div>
              <div className="contato-item">
                <a href="https://contate.me/ricardo-sobral" target="_blank">
                  <img src={telefone} alt="Telefone Logo"></img>
                  <h6>(13) 98855-5597</h6>
                </a>
              </div>
              <div className="contato-item">
                <a href="mailto:ricardoxsobral@gmail.com" target="_blank">
                  <img src={email} alt="Email Logo"></img>
                  <h6>ricardoxsobral@gmail.com</h6>
                </a>
              </div>
            </div>
            <hr />
            <div className="logo-footer">
              <a href="#Banner">
                <h1>&lt;Ricardo/&gt;</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
