import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AppModal from "./ContactPop";

const Layout = () => {
  return (
    <>
      <div className="container-fluid d-flex align-item-right justify-content-center ms-5 ">
        <nav className="navbar navbar-expand-lg p-0 ">
          <div className="container-fluid ">
            {/* <a className="navbar-brand " href="#">
              {props.title}
            </a> */}
            <div
              className="collapse navbar-collapse p-0 "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto  mb-lg-0 ">
                <li className="nav-item p-2">
                  <NavLink className="nav-link " to="/">
                    <strong>Home</strong>
                  </NavLink>
                </li>
                <li className="nav-item p-2">
                  <NavLink className="nav-link " to="/search">
                    <strong> Search</strong>
                  </NavLink>
                </li>
                <li className="nav-item p-2">
                  <NavLink className="nav-link " to="/rentList">
                    <strong>Rent List</strong>
                  </NavLink>
                </li>

                <li className="nav-item p-2">
                  <NavLink className="nav-link " to="/sellList">
                    <strong>Sell List</strong>
                  </NavLink>
                </li>

                <li className="nav-item p-2">
                  <NavLink className="nav-link " to="/admin">
                    <strong>Admin</strong>
                  </NavLink>
                </li>

                <li className="nav-item p-2">
                  <NavLink
                    className="nav-link "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    to="/contact"
                  >
                    <strong>ContactUs</strong>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <AppModal />

      <Outlet />
    </>
  );
};

export default Layout;
