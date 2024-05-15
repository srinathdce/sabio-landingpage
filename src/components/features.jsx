import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container-fluid white-line">
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-12 col-md-4 feature-imgs"
                >
                  <img src={d.icon} alt={d.title} height={400} />
                  <div className="text-overlay feature-overlay-text">
                    <a href={d.link} className="boder-bottom" id={d.title}>
                      {d.title}
                    </a>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
