import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { Link } from "react-scroll";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "violet",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Gabriel
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbar-link"
              >
                Sobre mim{" "}
              </Link>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <Link
                activeClass="active"
                to="projetos"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="navbar-link"
              >
                Projetos
              </Link>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <Link
                activeClass="active"
                to="contato"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbar-link"
              >
                Contato
              </Link>
            </Heading>
          </Column>
          <Column>
            <Heading className="social-icons">
              <a href="https://github.com/gabrielteza" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-teza-815138291/" target="_blank">
                <FaLinkedin />
              </a>
            </Heading>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
