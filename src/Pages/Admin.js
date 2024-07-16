import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <div className="container justify-content-center w-50 vh-100">
        <form className=" border border-warning w-80 vh-auto my-3 ms-5 me-5">
          <div className=" text-center bg-success my-0 mx-0">
            <h5 className="text-white">Admin Login Panel</h5>
          </div>
          <div class="mb-3 text-center my-3">
            <label htmlFor="adminName" className="form-label col-4 text-end">
              <strong>UserName:</strong>
            </label>
            <input
              type="text"
              class="col-7"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Admin"
            />
          </div>
          <div class="mb-3 text-center my-2">
            <label htmlFor="password" className="form-label col-4 text-end">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              class="col-7"
              id="exampleInputPassword1"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-center">
            <Link to="/adminLayout" class="btn btn-warning mb-2 w-30">
              Login
            </Link>
          </div>
          <div className="text-center mb-3">
            <a href="/">Back to Home</a>
          </div>
        </form>
      </div>
    </>
  );
}
