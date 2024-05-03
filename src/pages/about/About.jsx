import React from "react";
import "./about.css";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container-about">
        <div className="container-box">
        <div className="about-text">
          <h1
            style={{ fontWeight: "bolder", fontSize: "4rem", color: "#cfc37c" }}
          >
            {" "}
            <Typewriter
              words={["Olá! Meu nome é Gabriel", "Desenvolvedor Web"]}
              loop={0}
              cursor
              cursorStyle="<"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </h1>
          <br />
          <p className="about-text-p"
          >
            Tenho 18 anos e sou apaixonado por programação.
          </p>
          <p
           className="about-text-p"
          >
            Desde que me lembro, a tecnologia sempre me fascinou e aprender a
            criar software tornou-se uma das minhas paixões.
          </p>
          <p
            className="about-text-p"
          >
            {" "}
            Atualmente, estou focado em desenvolver minhas habilidades como
            programador, buscando constantemente aprender novas tecnologias e
            aprimorar meus conhecimentos existentes. Estou determinado a
            transformar minha paixão em uma carreira sólida e gratificante em
            tecnologia.
          </p>{" "}
          <p
           className="about-text-p"
          >
            {" "}
            Meu maior sonho é conseguir meu primeiro emprego profissional na
            área de programação.
          </p>{" "}
          <p
           className="about-text-p"
          >
            Estou empenhado em trabalhar duro para atingir esse objetivo,
            buscando oportunidades de estágio ou emprego onde possa aplicar
            minhas habilidades e continuar aprendendo e crescendo
            profissionalmente.
          </p>{" "}
          <p
           className="about-text-p"
          >
            Estou animado para ver o que o futuro reserva para minha jornada
            profissional de programação e estou pronto para os desafios que
            surgirão pelo caminho.
          </p>
        </div>
      </div>
        </div>
       
    </div>
  );
}
