import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className={window.innerWidth <= 1170 ? "container" : "container-fluid"}>
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We bring you powerful advantages to drive your digital
            transformations. Strengthening your work force management and
            developing talent for your future.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <img className="img-circle" src={d.icon} alt={d.name}></img>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
