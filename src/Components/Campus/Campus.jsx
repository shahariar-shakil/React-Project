import "./Campus.css";
import gallery_1 from "../../assets/campus-1.jpg";
import gallery_2 from "../../assets/campus-2.jpg";
import gallery_3 from "../../assets/campus-3.jpg";
import gallery_4 from "../../assets/campus-4.jpg";
import gallery_5 from "../../assets/right-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={gallery_5} alt="" />
      </button>
    </div>
  );
};

export default Campus;
