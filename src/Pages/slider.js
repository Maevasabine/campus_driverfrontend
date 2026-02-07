import React from "react";
import "./slider.css";

export default function WelcomeSlider() {
  return (
    <div className="slider-wrapper">
      <video className="slider-video" autoPlay loop muted playsInline>
        <source src="/videos/banniere1.mp4" type="video/mp4" />
      </video>

      <div className="slider-overlay"></div>

      <div className="slider-text">
        <h1>Apprenez. Progressez. Réussissez.</h1>
        <p>Des formations modernes adaptées à votre futur.</p>
      </div>
    </div>
  );
}
