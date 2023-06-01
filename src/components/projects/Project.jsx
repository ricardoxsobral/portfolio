import React, { useEffect, useState } from "react";

import imgProject from "../../assets/teste1.png";
import DOA from "../../assets/DOA.png";
import wordpress from "../../assets/wordpress.png";
import html from "../../assets/html.png";
import css from "../../assets/css-3.png";
import php from "../../assets/php.png";
import js from "../../assets/js.png";

import "./Project.css";

function Project() {
  const [mostrarDiv, setMostrarDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop >= 900) {
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
    <div className="Project" id="Project">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h1>Meus Projetos</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`teste ${mostrarDiv ? "show" : ""}`}>
            <div className="col-12 col-xl-6">
              <div className="projects">
                <a href="https://www.advtavares.com.br/" target="_blank">
                  <div className="item-project">
                    <img src={imgProject} alt="Adv Tavares"></img>
                    <p>Cliente Real</p>
                    <p>
                      <b>BLOG DE ADVOCACIA</b>
                    </p>
                    <div className="tecnologias">
                      <img src={wordpress} alt="WordPress Logo"></img>
                      <img src={html} alt="WordPress Logo"></img>
                      <img src={css} alt="WordPress Logo"></img>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="projects">
                <a href="https://www.ricardoxsobral.com.br/projetos/DOA" target="_blank">
                  <div className="item-project">
                    <img src={DOA} alt="Adv Tavares"></img>
                    <p>TCC - Técnico em DS</p>
                    <p>
                      <b>RESPONSÁVEL PELO CRUD E PELO CSS DESKTOP</b>
                    </p>
                    <div className="tecnologias">
                      <img src={php} alt="WordPress Logo"></img>
                      <img src={js} alt="JavaScript Logo"></img>
                      <img src={html} alt="HTML Logo"></img>
                      <img src={css} alt="Css Logo"></img>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
