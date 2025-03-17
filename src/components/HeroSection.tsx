import hero from "../assets/images/illustration-working.svg";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-img">
          <img src={hero} alt="working illustration" />
        </div>
        <div className="hero-content">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <a href="#">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
