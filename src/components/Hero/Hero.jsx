import "./Hero.scss";
import portrait from "../../assets/images/headshot.jpg"

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Let’s turn ideas into code! </h1>
      <div className="hero__wrapper">
      <div className="hero__content">
      <p className="hero__text">
        I'm Vanessa, a Software Engineer with a flair for UX Design and a strong foundation in marketing. I love combining creativity and technical skills to craft intuitive and engaging digital experiences. My toolbox includes HTML, CSS, JavaScript, Node.js, Express, and MySQL.
      </p>
      <p className="hero-__text">
        Collaboration fuels my passion for innovation, and thrive in environments where shared leadership and accountability drive success. I believe in celebrating wins, learning from challenges, and lifting each other toward new heights.
      </p>
      </div>
      <div className="hero__image">
        <img className="hero__headshot" src={portrait} alt="Portrait of Vanessa Lebrun" />
      </div>
      </div>
    </section>
  );
}

export default Hero;
