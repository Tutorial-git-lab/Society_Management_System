import React from "react";
import MemberLoginArea from "./MemberLoginArea";

export default function PavanCity() {
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
            <div className="text-center text-white my-2 bg-success">
              <h6>Pavan City</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
