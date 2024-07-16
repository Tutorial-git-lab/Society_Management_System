import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <div className="container-fluid justify-content-center align-item-center my-3 w-50 border">
        <form className=" container border border-primary w-50 vh-50 my-3 ">
          <div className="container-fluid text-center bg-success my-0 mx-0">
            <h5 className="text-white">Admin Login Panel</h5>
          </div>
          <div class="mb-3 text-center my-3">
            <input
              type="text"
              class="col-8"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Admin"
            />
          </div>
          <div class="mb-3 text-center my-2">
            <input
              type="password"
              class="col-8"
              id="exampleInputPassword1"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-center">
            <Link to="/adminLayout" class="btn btn-primary mb-2 w-50">
              Login
            </Link>
          </div>
          <div className="text-center">
            <a href="/">Back to Home</a>
          </div>
        </form>
      </div>
    </>
  );
}
