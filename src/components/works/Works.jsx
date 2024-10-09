import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Mechanical - Electrical Design",
      desc:
        "Delivering innovative and efficient mechanical-electrical solutions tailored to complex engineering challenges. ",
      img:
        "assets/1.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Automation Project",
      desc:
        "Integrating cutting-edge IoT technologies to automate processes and enhance system intelligence. ",
      img:
        "assets/2.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Custom Collaboration Project",
      desc:
        "Make your own project",
      img:
        "assets/3.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span></span>
                </div>
              </div>
              <div className="right">
                <img
                  src="assets/slider.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
