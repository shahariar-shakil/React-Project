import "./Hero.css";
import right_arrow from "../../assets/right-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure for better education for better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          aliquam possimus nemo, autem reiciendis ullam culpa error quidem et a!
        </p>
        <button className="btn">
          Explore More <img src={right_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
