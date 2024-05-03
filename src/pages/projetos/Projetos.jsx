import React from "react";
import "./projetos.css";
import adm from "../../img/adm.png";
import gerador from "../../img/gerador.png";
import vpn from "../../img/vpn.PNG";
import { Link } from "react-scroll";

export default function Projetos() {
  return (
    <div className="projetos" id="projetos">
      <div className="container-projetos">
        <div className="titulo-projetos">
          <h1>Projetos</h1>
          <div className="grid-projetos">
            <div className="grid-item">
              <div className="grid-titulo">
                <p>Tezadmin</p>
                <img src={adm} alt="" className="img" />
                <div className="desc-container">
                  <span className="text">Sistema de administrador feito em <mark id="marker-text">ReactJs</mark>, para visualizar Lucros, Vendas, Custos, Usuários ativos por mês, Dados dos usuários.</span>
                </div>
                <div className="container-btn">
                  <button className="btn-project">
                    <a href="https://github.com/gabrielteza/tezadmin" target="_blank" className="btn-project">Repositório GitHub</a>
                  </button>
                  <button className="btn-project">
                    <a href="https://tezadmin.vercel.app/" target="_blank" className="btn-project">Ver projeto</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-titulo">
                <p>Gerador de senha</p>
                <img src={gerador} alt="" className="img" />
                <div className="desc-container">
                  <span className="text">Este projeto foi feito em <mark id="marker-text">HTML, CSS e JavaScript</mark>, gerador de senhas aleatórias.</span>
                </div>
                <div className="container-btn">
                  <button className="btn-project">
                    <a href="https://github.com/gabrielteza/geredor-de-senha" target="_blank" className="btn-project">Repositório GitHub</a>
                  </button>
                  <button className="btn-project">
                    <a href="https://geredor-de-senha.vercel.app/" target="_blank" className="btn-project">Ver projeto</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-titulo">
                <p>Vpn Landing Page</p>
                <img src={vpn} alt="" className="img" />
                <div className="desc-container">
                  <span className="text">Este projeto foi feito em <mark id="marker-text">ReactJs</mark>, com inspiração em um design do Figma.</span>
                </div>
                <div className="container-btn">
                  <button className="btn-project">
                    <a href="https://github.com/gabrielteza/vpnlandingpage" target="_blank" className="btn-project">Repositório GitHub</a>
                  </button>
                  <button className="btn-project">
                    <a href="https://vpnlandingpage.vercel.app/" target="_blank" className="btn-project">Ver projeto</a>
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
