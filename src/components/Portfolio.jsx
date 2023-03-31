import React from "react";
import "../../src/App.css";

function Portfolio() {
  return (
    <div>
      <div className="photos">
        <h3>
          {" "}
          <i>Portfolio</i>{" "}
        </h3>
        <section className="wrapper">
          <i className="fa-solid fa-arrow-left button" id="prev">
            <div className="image-container">
              <div className="carousel">
                <a href="/photography1.jpg">
                  <img src="/photography1.jpg" alt="" />
                </a>
                <a href="/photography2.jpg">
                  <img src="/photography2.jpg" alt="" />
                </a>
                <a href="/photography3.jpg">
                  <img src="/photography3.jpg" alt="" />
                </a>
                <a href="/photography.jpg">
                  <img src="/photography.jpg" alt="" />
                </a>
              </div>
              <i className="fa-solid fa-arrow-right button" id="next">
                <i className="fa-solid fa-arrow-left button" id="prev"></i>
              </i>
            </div>
            <i className="fa-solid fa-arrow-right button" id="next">
              <i className="fa-solid fa-arrow-left button" id="prev"></i>
            </i>
          </i>
        </section>
        <i className="fa-solid fa-arrow-left button" id="prev">
          <i className="fa-solid fa-arrow-right button" id="next">
            <i className="fa-solid fa-arrow-left button" id="prev"></i>
          </i>
        </i>
      </div>
      <i className="fa-solid fa-arrow-left button" id="prev">
        <i className="fa-solid fa-arrow-right button" id="next">
          <i className="fa-solid fa-arrow-left button" id="prev"></i>
        </i>
      </i>
    </div>
  );
}

export default Portfolio;
