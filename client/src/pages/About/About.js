import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
// import Photo from "../../assets/images/photo.jpg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                I am a dedicated and passionate Computer Science Engineering student currently pursuing my Bachelor of Engineering BE. With a strong foundation in programming, data structures, and algorithms, I am deeply interested in exploring advanced fields such as Artificial Intelligence, Machine Learning, and Data Science. 
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
