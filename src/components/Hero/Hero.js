import { useEffect, useRef } from "react";
import "./hero.css";
import Lottie from "lottie-web";
import animate from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../developer.json"),
    });
    animate.setSpeed(0.5);
  }, []);
  return (
    <section className="hero">
      <div className="hero-about">
        <h1 className="hero-heading">Merhaba. Ben Onur</h1>
        <p className="hero-content">
          Kullanıcı dostu, erişilebilir ve duyarlı web siteleri geliştirmek için
          bir tutkum var. Öğrenmeyi asla bırakmam ve benim için her yeni proje
          başka bir maceradır.
        </p>
      </div>
      <div className="hero-animation-container">
        <div className="hero-animation" ref={container}></div>
      </div>
    </section>
  );
};

export default Hero;
