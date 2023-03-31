import React from "react";
import "../styles/hero.css";
import photography from'../images/photography.jpg'

function Hero(){
    return (
        <div className="container">
          <div className="box1">
            <div className="box1-logo">
            <h3>KTK</h3>
            </div>
            <div className="box1-content">
            <h4 id="box1-h4">My name is Abdul</h4>
            <p id="box1-p">And I'm taking awesome photos</p>
            </div>
            {/* <div className="btn">
              <navlink to="/details">Portfolio</navlink>
              <a href="#">
                Contact me
              </a>
            </div> */}
            <div className="btn-container">
              <button className="btn-portfolio">Portfolio</button>
              <button className="btn-contact">Contact</button>
            </div>
            <div className="box1-copyright">
              <h4>© 2023 Name</h4>
            </div>
          </div>
          <div className="box2">
            <img src={photography} alt="pic" />
          </div>
        </div>
      );
}

export default Hero;