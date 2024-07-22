import React from "react";

export const Content = (props) => {
  return (
    <div id="content">
      <div className={window.innerWidth <= 1170 ? "container" : "container-fluid"}>
        <div className="row flex-box">
          <div className="col-xs-12 col-md-6">
            <h1 className="title">{props?.data?.title}</h1>
          </div>
          <div className="col-xs-12 col-md-4 pull-left full-height">
            <img className="image-responsive-height" src={props?.data?.img} alt="applieda2"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
