import React from 'react';
import NavBar from "./navbar";
import { NavLink } from 'react-router-dom';

const header = () => {
  return (
    <div>
      {/* <h1>Eclectic DFW</h1> */}
      <NavBar></NavBar>
      <div>
  {/* Spinner Start
  <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span> */}
    {/* </div> */}
  </div>
  {/* Spinner End */}
  {/* Navbar & Hero Start */}
  <div className="container-xxl position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="index.html" className="navbar-brand p-0">
        <h1 className="m-0">Eclectic-DFW</h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <div className="nav-item dropdown">
            <div className="dropdown-menu m-0">
              <a href="feature.html" className="dropdown-item">Features</a>
              {/* <a href="team.html" className="dropdown-item active">Our Team</a> */}
              <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="container-xxl bg-primary page-header">
      <div className="container text-center">
        <h1 className="text-white animated zoomIn mb-3">"Explore your passion through music"</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
            <li className="breadcrumb-item"><NavLink to="/auth" activeClassName="active">
            Login/Sign-Up
          </NavLink></li>
            <NavLink to="/auth" activeClassName="active">
            Login/Sign-Up
          </NavLink>
            <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
</div>

  );
}

export default header;