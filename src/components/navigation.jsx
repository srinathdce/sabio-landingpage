import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top header">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand" href="#page-top">
            <img
              class="d-inline-block align-top"
              src={props?.data?.logoImage}
              alt="logo-file"
              height="40"
            ></img>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li className="service-class">
              <a href="#services" className="page-scroll">
                Services
                <i className="fa fa-caret"></i>
              </a>
              <span className="arrow"></span>
              <nav class="mega">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4 p-l-25 sm-p-l-0 hidden-sm hidden-xs">
                      <h6 class="block-title fs-12 no-margin">Our Offerings</h6>
                      <h2 class="m-t-20">
                        Capabilities for a new beginning...
                      </h2>
                      <h6 class="block-title fs-12 no-margin">
                        Empowerd by growth
                      </h6>
                      <a href="contact.html" class="btn btn-black m-t-35">
                        Get in Touch
                      </a>
                    </div>
                    <div class="col-md-8">
                      <div class="row">
                        <div class="col-md-4">
                          <h6 class="sub-menu-heading">Consulting</h6>
                          <ul class="sub-menu">
                            <li>
                              <a href="services/staffing.html">Staffing</a>
                            </li>{" "}
                            <li>
                              <a href="services/resourceing.html">Resourcing</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <h6 class="sub-menu-heading">
                            Application Development
                          </h6>
                          <ul class="sub-menu">
                            <li>
                              <a href="services/applicationdevelopment.html">
                                Web Apps
                              </a>
                            </li>
                            <li>
                              <a href="services/mobility.html">Mobility</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <h6 class="sub-menu-heading">AI &amp; Analytics</h6>
                          <ul class="sub-menu">
                            <li>
                              <a href="services/appliedai.html">Applied AI</a>
                            </li>{" "}
                            <li>
                              {" "}
                              <a href="services/modelling.html">
                                Modelling
                              </a>{" "}
                            </li>{" "}
                            <li>
                              {" "}
                              <a href="services/da.html">Data Analytics</a>{" "}
                            </li>{" "}
                          </ul>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </li>
            <li>
              <a href="#content" className="page-scroll">
                Content
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
