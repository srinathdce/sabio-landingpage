import React from "react";

export const Content = (props) => {
  return (
    <div id="content">
      <div className="container">
        <div className="row flex-box">
          <div className="col-xs-12 col-md-5">
            <h1 className="title">{props?.data?.title}</h1>
          </div>
          <div className="col-xs-12 col-md-7 pull-left full-height">
            <img className="image-responsive-height" src={props?.data?.img} alt="image"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
