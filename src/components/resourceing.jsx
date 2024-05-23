import React from "react";
import "../css/pages.css";

export const Resourceing = (props) => {
  return (
    <div id="resourceing">
      {" "}
      <div
        className="parallax"
        style={{ backgroundImage: `url(${props?.data?.parallaxImg})` }}
      >
        <div className="parallax-overlay">
          <h1 className="parallax-text">{props?.data?.pagetitle}</h1>
        </div>{" "}
      </div>
      <section class="bg-master-lightest pb-85 pt-75">
        <div class="container">
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
        <div class="container">
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
                alt="resourceing2"
                class="image-responsive-height"
                src={props?.data?.pageData?.img1}
              />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-master-lightest pb-85 pt-75 no-overflow">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="content-mask-md">
                <img
                  src={props?.data?.pageData?.img2}
                  class="image-responsive-height-100 image-responsive-width"
                  alt="resourceing3"
                />
              </div>
            </div>
            <div class="col-sm-5 ml-3">
              <h1 class="page-headings">{props?.data?.pageData?.section2}</h1>
              <ul>
                {props?.data?.pageData?.para2
                  ? props?.data?.pageData?.para2?.map((k, j) => (
                      <li
                        className="mb-20"
                        key={`${props?.data?.pageData?.section2}-${j}`}
                      >
                        <h3 className="mb-20">
                          {k.heading}
                          <i
                            className="fa fa-chevron-right pl-10"
                            aria-hidden="true"
                          ></i>
                        </h3>
                        <span className="mb-20">{k.desc}</span>
                        <br />
                      </li>
                    ))
                  : "Loading ..."}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
