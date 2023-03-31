import React from "react";
import Mycard from "./Card.jsx";
import "../styles/imagecarousal.css";
import prev from "../images/prev.png";
import next from "../images/next.png";
import photography from "../images/photography.jpg";
import photography1 from "../images/photography1.jpg";
import photography2 from "../images/photography2.jpg";
import photography3 from "../images/photography3.jpg";
import photography4 from "../images/photography4.jpg";
import photography5 from "../images/photography5.jpg";

const Imagecarousel = () => {
  // let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let box = document.querySelector(".product-container");

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let box = document.querySelector(".product-container");

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <div className="product-carousel">
      <h1>Portfolio</h1>
      <button className="pre-btn" onClick={btnpressprev}>
        <p>
          <img src={prev} alt="" />
        </p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>
          <img src={next} alt="" />
        </p>
      </button>
      <div className="product-container">
        <Mycard img={photography} />
        <Mycard img={photography1} />
        <Mycard img={photography2} />
        <Mycard img={photography3} />
        <Mycard img={photography4} />
        <Mycard img={photography5} />
        <Mycard img={photography3} />
      </div>
    </div>
  );
};

export default Imagecarousel;
