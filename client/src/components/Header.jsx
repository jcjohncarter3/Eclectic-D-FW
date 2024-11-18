import NavBar from "./navbar";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <header className=" px-4 px-lg-5 py-3 py-lg-0">
          <NavLink to="/" activeClassName="active">
            <h1 className="m-0">Eclectic-DFW</h1>
          </NavLink>
          <NavBar></NavBar>
        </header>
        <div className="container-xxl bg-primary page-header">
          <div className="container text-center">
            <h1 className="text-white animated zoomIn mb-3">
              "Explore your passion through music"
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
