import React from "react";
import "./infos.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};

const ButtonLinkedIn = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 8px 5px;
  margin: 30px 0;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 25px;
  margin-left: 200px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  text-align: center;
  width: auto;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const Button = styled.button`
  display: block;
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 8px 15px;
  margin: 30px 0;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 25px;
  margin-left: 200px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  text-align: center;
  width: auto;
  z-index: -1;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue",
};

const SocialContainer = styled.div`
  display: flex;
  display: block;
  flex-direction: column;
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: block;
  width: auto;
  margin-bottom: 10px;
  display: contents;
`;




export default function Infos() {
  return (
    <div className="infos">
      <div className="languages">
        <h3>EN - Intermediary</h3>
        <h3>PT-BR - Nature Speaker</h3> <h2 className="tit">Languages</h2>
      </div>
      <hr />
      <SocialContainer>
        <StyledLink href="https://www.instagram.com/gabzz.teza/" target="_blank">
          <Button>
            Instagram
            <FaInstagram size="2rem" className="icon" />
          </Button>
        </StyledLink>
        <StyledLink href="https://github.com/gabrielteza" target="_blank">
          <Button>
            GitHub
            <FaGithub size="2rem" className="icon2" />
          </Button>
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/gabriel-teza-815138291/" target="_blank">
          <Button id="linkedin">
          <span>Linkedin</span>
            <FaLinkedin size="2rem" className="icon3" />
          </Button>
        </StyledLink>
        <a target="_blank" id="inv">
          <Button id="">
          <span>aaa</span>
          </Button>
        </a>
      </SocialContainer>

      {/* <div className="social">
        <FaInstagram  size='3rem' className="icon"/> 
        <h3 className="subsocial">Instagram</h3>
      </div> */}
      <div className="education">
        <h2>🎓 Education</h2>
        <h3>Systems Development Technician - ETEC Anna de Oliveira Ferraz</h3>
        <h3>Bachelor of Science in Computer Science</h3>
      </div>
    </div>
  );
}
