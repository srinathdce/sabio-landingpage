import React from "react";

export const About = (props) => {
  let width = window.innerWidth;
  return (
    <div id="about">
      <div className={width <= 1170 ? "container" : "container-fluid"}>
        <div className="row">
          <div className="about-header text-center">
            More than a DECADE with valuable TRUST and CONFIDENCE
          </div>
          <div className="col-xs-12 col-md-6 text-right sm-text-center sm-p-l-0">
            {" "}
            <img
              src="img/sabio-logo.jpeg"
              className="img-responsive"
              alt="about1"
            />{" "}
          </div>
          <div className="col-xs-12 col-md-4 col-sm-6 pt-20">
            {" "}
            {props.data
              ? props.data.map((d, i) => (
                  <ul className="p-5" key={`${d.title}-${i}`}>
                    <h6 class="block-title">{d.title}</h6>
                    <p class="mt-15"> {d.desc}</p>
                  </ul>
                ))
              : "Loading ..."}
          </div>
        </div>
      </div>
    </div>
  );
};
