import "./About.css";
import about_img from "../../assets/university.jpg";
import play_icon from "../../assets/play.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga optio
          in, ut rem voluptatem cumque harum dicta, nostrum nesciunt eius amet
          vitae ab tempore exercitationem sunt, numquam unde maiores non.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic
          laudantium nostrum. Soluta dicta, mollitia earum quod pariatur
          deserunt exercitationem, fugiat laboriosam harum atque architecto
          commodi quos unde explicabo cumque?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eaque
          cum repudiandae corporis nam unde neque recusandae nobis labore
          temporibus rem, officiis adipisci. Eos hic qui provident aliquid,
          atque nihil.
        </p>
      </div>
    </div>
  );
};

export default About;
