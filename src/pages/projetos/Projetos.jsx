import React from "react";
import "./projetos.css";
import adm from "../../img/adm.png";
import gerador from "../../img/gerador.png";
import vpn from "../../img/vpn.PNG";
import { Link } from "react-scroll";

// The Main Function

export default function Projetos() {
  return (
    <div className="projetos" id="projetos">
      <div className="container-projetos">
        <div className="titulo-projetos">
          <h1>Projetos</h1>
          <div className="grid-projetos">
            <div className="grid-1">
              <div className="grid-titulo">
                <p>Tezadmin</p>
                <img src={adm} alt="" className="img" />
                <div className="desc-container">
                  <span id="text">Sistema de administrador feito em ReactJs, para vizualizar Lucros, Vendas, Custos, Usuários ativos por mês, Dados dos usuários.</span>

                </div>
                <div className="container-btn">
                  <button className="btn-project">
                    <a
                      href="https://github.com/gabrielteza/tezadmin"
                      target="_blank"
                      className="btn-project"
                    >
                      Repositorio GitHub
                    </a>
                  </button>
                  <button className="btn-project">
                    <a
                      href="https://tezadmin.vercel.app/"
                      target="_blank"
                      className="btn-project"
                    >
                      Ver projeto
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid-2">
              <div className="grid-titulo">
                <p>Gerador de senha</p>
                <img src={gerador} alt="" className="img2" />
                <div className="desc-container">
                  <span id="text2">Este projeto foi feito em HTML, CSS e Javascript, Gerador de Senhas Aleatorias.</span>

                </div>
                <div className="container-btn">
                  <button className="btn-project2">
                    <a
                      href="https://github.com/gabrielteza/geredor-de-senha"
                      target="_blank"
                      className="btn-project2"
                    >
                      Repositorio GitHub
                    </a>
                  </button>
                  <button className="btn-project2">
                    <a
                      href="https://geredor-de-senha.vercel.app/"
                      target="_blank"
                      className="btn-project2"
                    >
                      Ver projeto
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid-3">
              <div className="grid-titulo">
                <p>Vpn Landing Page</p>
                <img src={vpn} alt="" className="img3" />
                <div className="desc-container">
                  <span id="text3">
                    Este projeto foi feito em ReactJs, com inspiração em um desgin
                    do figma.
                  </span>
                </div>

                <div className="container-btn">
                  <button className="btn-project3">
                    <a
                      href="https://github.com/gabrielteza/vpnlandingpage"
                      target="_blank"
                      className="btn-project3"
                    >
                      Repositorio GitHub
                    </a>
                  </button>
                  <button className="btn-project3">
                    <a
                      href="https://vpnlandingpage.vercel.app/"
                      target="_blank"
                      className="btn-project3"
                    >
                      Ver projeto
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
