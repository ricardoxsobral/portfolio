import ricardo from "../../assets/EuRicardo.jpg";
import "./Banner.css";
import { TypeAnimation } from "react-type-animation";

function Banner() {
  return (
    <div className="Banner" id="Banner">
      <div className="banner-content">
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="col-12 col-lg-6">
                <div className="img-ricardo">
                  <img src={ricardo} alt="foto-ricardo"></img>
                </div>
              </div>
              <div className="col-12 col-lg-6 coluna-text">
                <div className="apresent">
                  <div className="title">
                    <TypeAnimation
                      sequence={[
                        "Olá, eu me chamo Ricardo :)", // Types 'One'
                        4000, // Waits 1s
                      ]}
                      wrapper="span"
                      cursor={true}
                      style={{ fontSize: "40px" }}
                    />
                  </div>
                  <div className="subtitle">
                    <h6>
                      Tenho 19 anos e sou Desenvolvedor Front-End Junior, com
                      experiência de ano sendo freelancer{" "}
                    </h6>
                    <h6>
                      Técnico em Desenvolvimento de Sistemas e Estudante de
                      Análise e Desenvolvimento de Sistemas pela UNINTER
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
