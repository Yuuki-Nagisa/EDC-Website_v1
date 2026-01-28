"use client";
import "./UdbhavHero.scss";

export default function UdbhavHero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <video
          className="hero-video"
          preload="auto"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src="/assets/hero-video/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="landing">
        <div className="landing-text">
          <h1 className="event-title animate__animated animate__fadeInUp">
            Udbhav 2026
          </h1>
          <p className="event-subtitle animate__animated animate__fadeInUp">
            Where Innovation Meets Creativity
          </p>
        </div>
      </div>
    </div>
  );
}
