import React from "react";
import MemberLoginArea from "./MemberLoginArea";

export default function ForgotPassword() {
  return (
    <>
      <div className="container justify-content-center w-50 vh-100 mt-5">
        <form className=" border border-warning w-80 vh-auto my-3 ms-5 me-5">
          <div className=" text-center bg-danger my-0 mx-0">
            <h5 className="text-white">Forgot Password</h5>
          </div>
          <div class="mb-3 text-center my-3">
            <label htmlFor="email" className="form-label col-4 text-end">
              <strong>Enter Email:</strong>
            </label>
            <input
              type="email"
              class="col-7"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="mb-3 text-center my-2">
            <label htmlFor="mobileNumber" className="form-label col-4 text-end">
              <strong>Enter Mobile No:</strong>
            </label>
            <input
              type="password"
              class="col-7"
              id="exampleInputPassword1"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-center mb-2">
            <button type="button" className="btn btn-success">
              Get Password
            </button>
          </div>
          <div className="text-center mb-3">
            <a href="/">Back to Home</a>
          </div>
        </form>
      </div>
    </>
  );
}
