import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "./Skills.css";
import html from "../../assets/html.png";
import css from "../../assets/css-3.png";
import boots from "../../assets/bootstrap.png";
import javascript from "../../assets/js.png";
import php from "../../assets/php.png";
import sql from "../../assets/servidor-sql.png";
import wordpress from "../../assets/wordpress.png";
import react from "../../assets/react.svg";

function Skills() {
  const [mostrarDiv, setMostrarDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop >= 500) {
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

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="Skills" id="Skills">
      <div className="container">
        <div className="row">
          <div className="col-12 habilidades">
            <div id="skills-background" className={`skills-background ${mostrarDiv ? "show" : ""}`}>
              <div className="text">
                <div className="title">
                  <h1>Habilidades</h1>
                </div>
                <div className="subtitle">
                  <h6>
                    Aqui estão algumas linguagens e frameworks que eu possuo
                    conhecimento e experiência...
                  </h6>
                </div>
              </div>
              <div className="carrosel">
                <Slider {...settings}>
                  <div>
                    <img src={html}></img>
                    <h6>HTML</h6>
                  </div>
                  <div>
                    <img src={css}></img>
                    <h6>CSS</h6>
                  </div>
                  <div>
                    <img src={boots}></img>
                    <h6>BootStrap</h6>
                  </div>
                  <div>
                    <img src={react}></img>
                    <h6>React.Js</h6>
                  </div>
                  <div>
                    <img src={sql}></img>
                    <h6>SQL</h6>
                  </div>
                  <div>
                    <img src={wordpress}></img>
                    <h6>WordPress</h6>
                  </div>
                  <div>
                    <img src={php}></img>
                    <h6>PHP</h6>
                  </div>
                  <div>
                    <img src={javascript}></img>
                    <h6>JavaScript</h6>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
