import React from "react";

export default function Admin() {
  return (
    <>
      <div className="container-fluid justify-content-center align-item-center my-3 w-50 border">
        <form className=" container border border-primary w-50 vh-50 my-3 ">
          <div className="container text-center bg-success my-0">
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
            <button type="submit" class="btn btn-primary mb-2 w-50">
              Login
            </button>
          </div>
          <div className="text-center">
            <a href="/">Back to Home</a>
          </div>
        </form>
      </div>
    </>
  );
}
