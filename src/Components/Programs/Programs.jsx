import "./Programs.css";
import program_1 from "../../assets/download (1).jpg";
import program_2 from "../../assets/download (2).jpg";
import program_3 from "../../assets/download (3).jpg";
import program_Icon_1 from "../../assets/logo1.jpg";
import program_Icon_2 from "../../assets/logo2.png";
import program_Icon_3 from "../../assets/logo3.jpg";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_Icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_Icon_2} alt="" />
          <p>Master Degree</p>
        </div>
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_Icon_3} alt="" />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
