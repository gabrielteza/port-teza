import React from 'react'
import Header from '../../components/header/Header'
import ParticlesComponent from '../../components/particle/Particle'
import Navbar from '../../components/navbar/Navbar'
import Infos from "../../components/infos/Infos";
import About from '../about/About';
import Projetos from '../projetos/Projetos';
import Contato from '../contato/Contato';


export default function content() {
  return (
    <div>
    <ParticlesComponent id="particles"/>
      <Navbar/>
      <Header />     
      <Infos />
      <About/>
      <Projetos/>
      <Contato/>
  </div>

  )
}
