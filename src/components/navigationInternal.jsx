import React from "react";
import { Link } from "react-router-dom";

export const NavigationInternal = (props) => {
  let width = window.innerWidth;
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top header">
      <div className={width <= 1170 ? "container" : "container-fluid"}>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-2"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand" to="/">
            <img
              className="d-inline-block align-top"
              src={props?.data?.logoImage}
              alt="logo-file"
              height="60"
            ></img>
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-2"
        >
          <ul className="nav navbar-nav navbar-right" data-toggle="collapse" data-target=".navbar-collapse.in">
            <li>
              <Link to="/" state="features">
                Features
              </Link>
            </li>
            <li>
              <Link to="/" state="about">
                About
              </Link>
            </li>
            <li className="service-class">
              <Link to="/" state="services">
                Services
                <i className="fa fa-caret"></i>
              </Link>
              <span className="arrow"></span>
              <div class="mega">
                <div className={width <= 1170 ? "container" : "container-fluid"}>
                  <div class="row">
                    <div class="col-md-4 p-l-25 sm-p-l-0 hidden-sm hidden-xs">
                      <h6 class="block-title fs-12 no-margin">Our Offerings</h6>
                      <h2 class="m-t-20">
                        Capabilities for a new beginning...
                      </h2>
                      <h6 class="block-title fs-12 no-margin">
                        Empowerd by growth
                      </h6>
                      <Link class="btn btn-black m-t-35" to="/" state="contact">
                        Get in Touch
                      </Link>
                    </div>
                    <div class="col-lg-8 col-xs-12">
                      <div class="row">
                        <div class="col-md-4">
                          <h6 class="sub-menu-heading">Consulting</h6>
                          <ul class="sub-menu">
                            <li>
                              <Link to="/staffing">Staffing</Link>
                            </li>
                            <li>
                              <Link to="/resourcing">Resourcing</Link>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <h6 class="sub-menu-heading">
                            Application Development
                          </h6>
                          <ul class="sub-menu">
                            <li>
                              <Link to="/webapp">Web Apps</Link>
                            </li>
                            <li>
                              <Link to="/mobility">Mobility</Link>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <h6 class="sub-menu-heading">AI &amp; Analytics</h6>
                          <ul class="sub-menu">
                            <li>
                              <Link to="/appliedai">AI &amp; Analytics</Link>
                            </li>
                            <li>
                              <Link to="/modelling">Modelling</Link>
                            </li>
                            <li>
                              <Link to="/analytics">Data Analytics</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" state="content">
                Content
              </Link>
            </li>
            <li>
              <Link to="/" state="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
