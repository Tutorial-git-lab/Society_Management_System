import React from "react";
import MemberLoginArea from "./MemberLoginArea";

export default function Search() {
  return (
    <>
      <div className="container-fluid my-0 border">
        <div className="row">
          <div className=" col-3 d-flex-col">
            <MemberLoginArea />

            <div className="container my-3">
              <div className="text-center mx-1 me-1 my-1 bg-warning">
                <a href="societyList">Society List</a>
              </div>
              <div className="text-center mx-1 me-1 my-1 ">
                <a href="shyamPark">Shyam Park</a>
              </div>
              <div className="text-center mx-1 me-1 my-1 ">
                <a href="pawanCity">Pawan City</a>
              </div>
              <div className="text-center mx-1 me-1 my-1">
                <a href="/">Logout</a>
              </div>
            </div>
          </div>
          <div className="col-9 flex-col">
            <div className="container justify-content-center w-auto">
              <form className="container w-80 vh-auto my-0 mb-2">
                <div className="text-center text-white my-2 bg-success">
                  <h6>Search Pages</h6>
                </div>
                <div className="row my-3">
                  <div className="col-6 d-flex-col my-2">
                    <div class="mb-3 text-center my-3 me-5">
                      <label
                        htmlFor="societyName"
                        className="form-label col-4 text-end"
                      >
                        <strong>Select Society:</strong>
                      </label>
                      <select
                        name="select"
                        id="select123"
                        class="col-8 border border-success"
                      >
                        <option value="0">Select</option>
                        <option value="1">Pawan City</option>
                        <option value="2">Shyam Park</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6 d-flex-col my-2">
                    <div class="mb-3 text-center my-2 me-5">
                      <label
                        htmlFor="selectType"
                        className="form-label col-4 text-end"
                      >
                        <strong>Select Type:</strong>
                      </label>
                      <select
                        name="select"
                        id="select123"
                        class="col-8 border border-success"
                      >
                        <option value="0">Select</option>
                        <option value="1">Rent</option>
                        <option value="2">Sell</option>
                      </select>
                    </div>
                    <div className="text-center mb-3">
                      <button type="submit" className="btn btn-success ">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
