import React from "react";
import './App.css'
import IridescentWavesBackground from "./components/background";


export default function Landing() {
  return (
    <div className="page-root">
         <IridescentWavesBackground />
      <nav className="nav">
        <div className="brand">Astromeria</div>
        <div className="nav-links">
          <a href="#">Soluciones</a>
          <a href="#">Sobre Nosotras</a>
        </div>
        <button className="cta">Contáctanos</button>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Un nuevo comienzo<br />lleno de posibilidades
          </h1>
          <p className="hero-sub">
            Creamos marcas y contenido digital con diseño inteligente impulsado por IA,
            para que tu emprendimiento se vea profesional y pueda crecer con solidez.
          </p>
          <button className="hero-btn">Comienza hoy</button>
        </div>
      </header>
    </div>
  );
}