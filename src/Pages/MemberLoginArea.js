import React from "react";

export default function MemberLoginArea() {
  return (
    <>
      <form className="border border-success  my-3">
        <div className="text-center my-2">
          <h5>Member Login Area</h5>
        </div>
        <div class="mb-3 my-3">
          <label for="exampleInputEmail1" class="form-label col-4 text-end">
            Login Name:
          </label>
          <input
            type="text"
            class="col-8"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Login name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label col-4 text-end">
            Password:
          </label>
          <input
            type="password"
            class="col-8"
            id="exampleInputPassword1"
            placeholder="Enter your password"
          />
        </div>

        <div className="text-center">
          <button type="submit" class="btn btn-success mb-2">
            Login
          </button>
        </div>
        <div className="text-center">
          <a href="">Forgot Password</a>
        </div>
      </form>
    </>
  );
}