import React from "react";
import "../css/pages.css";

export const Staffing = (props) => {
  let width = window.innerWidth;
  return (
    <div id="staffing">
      <div
        className="parallax"
        style={{ backgroundImage: `url(${props?.data?.parallaxImg})` }}
      >
        <div className="parallax-overlay">
          <h1 className="parallax-text" aria-hidden="true">
            {props?.data?.pagetitle}
          </h1>
        </div>
      </div>
      <section class="bg-master-lightest pb-85 pt-75">
        <div className={width <= 1170 ? "container" : "container-fluid"}>
          <div class="row">
            <div class="col-xs-12 col-md-4">
              <h1 class="mt-5">{props?.data?.pageData?.section}</h1>
            </div>
            <div class="col-xs-12 col-md-8">
              {props?.data?.pageData?.para
                ? props?.data?.pageData?.para.map((k, j) => (
                    <p key={`${props?.data?.pageData?.section}-${j}`}>
                      {k}
                      <br />
                    </p>
                  ))
                : "Loading ..."}
            </div>
          </div>
        </div>
      </section>
      <section class="bg-warning pb-85 pt-75 no-overflow">
        <div className={width <= 1170 ? "container" : "container-fluid"}>
          <div class="block-title hint-text"></div>
          <div class="row">
            <div class="col-sm-7">
              <h1 class="page-headings">{props?.data?.pageData?.section1}</h1>
              {props?.data?.pageData?.para1
                ? props?.data?.pageData?.para1.map((l, q) => (
                    <p
                      className="mb-20"
                      key={`${props?.data?.pageData?.section1}-${q}`}
                    >
                      {l}
                      <br />
                    </p>
                  ))
                : "Loading ..."}
            </div>
            <div class="col-sm-5 text-center">
              <img
                alt="staffing1"
                class="image-responsive-height image-responsive-width"
                src={props?.data?.pageData?.img1}
              />
            </div>
          </div>
        </div>
      </section>
      <section class="pb-85 pt-75 no-overflow">
        <div className={width <= 1170 ? "container" : "container-fluid"}>
          <div class="row">
            <div class="col-sm-5">
              <div class="content-mask-md">
                <img
                  src={props?.data?.pageData?.img2}
                  class="image-responsive-height"
                  alt="staffing2"
                />
              </div>
            </div>
            <div className="col-sm-1"></div>
            <div class="col-sm-6">
              <h1 class="page-headings">{props?.data?.pageData?.section2}</h1>
              {props?.data?.pageData?.para2
                ? props?.data?.pageData?.para2?.map((k, j) => (
                    <p
                      className="mb-20"
                      key={`${props?.data?.pageData?.section2}-${j}`}
                    >
                      {k}
                      <br />
                    </p>
                  ))
                : "Loading ..."}
            </div>
          </div>
        </div>
      </section>
      <section class="bg-warning pb-85 pt-75 no-overflow">
        <div className={width <= 1170 ? "container" : "container-fluid"}>
          <div class="row">
            <div class="col-sm-6">
              <h1 class="page-headings">{props?.data?.pageData?.section3}</h1>
              {props?.data?.pageData?.para3
                ? props?.data?.pageData?.para3?.map((k, j) => (
                    <p
                      className="mb-20"
                      key={`${props?.data?.pageData?.section3}-${j}`}
                    >
                      {k}
                      <br />
                    </p>
                  ))
                : "Loading ..."}
            </div>
            <div class="col-sm-6">
              <img
                src={props?.data?.pageData?.img3}
                class="image-responsive-width"
                alt="staffing3"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-master-lightest pb-85 pt-75 no-overflow">
        <div className={width <= 1170 ? "container" : "container-fluid"}>
          <div class="block-title hint-text no-margin"></div>
          <div class="row">
            <div class="col-sm-6">
              <img
                src={props?.data?.pageData?.img4}
                class="image-responsive-height lazy"
                alt="staffing4"
              />
            </div>
            <div class="col-sm-6">
              <h1 class="page-headings">{props?.data?.pageData?.section4}</h1>
              {props?.data?.pageData?.para4
                ? props?.data?.pageData?.para4?.map((k, j) => (
                    <p
                      className="mb-20"
                      key={`${props?.data?.pageData?.section4}-${j}`}
                    >
                      {k}
                      <br />
                    </p>
                  ))
                : "Loading ..."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
