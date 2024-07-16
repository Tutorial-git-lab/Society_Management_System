import React from "react";

export default function AddHouse() {
  return (
    <>
      <div className="container justify-content-center w-auto">
        <form className="container w-80 vh-auto my-0 mb-2">
          <div className="text-center text-white my-2 bg-success">
            <h6>ADD NEW HOUSE</h6>
          </div>
          <div class="mb-3 text-center my-3 me-5">
            <label htmlFor="societyName" className="form-label col-4 text-end">
              <strong>Society:</strong>
            </label>
            <select
              name="select"
              id="select123"
              class="col-5 border border-success"
            >
              <option value="0">Select</option>
              <option value="1">Pawan City</option>
              <option value="2">Shyam Park</option>
            </select>
          </div>

          <div class="mb-3 text-center my-2 me-5">
            <label htmlFor="block" className="form-label col-4 text-end">
              <strong>Block No:</strong>
            </label>
            <input
              type="text"
              class="col-5 border border-success"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 text-center my-2 me-5">
            <label htmlFor="block" className="form-label col-4 text-end">
              <strong>House Type:</strong>
            </label>
            <select
              name="select"
              id="select123"
              class="col-5 border border-success"
            >
              <option value="0">Select</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
            </select>
          </div>
          <div class="mb-3 text-center my-2 me-5">
            <label htmlFor="details" className="form-label col-4 text-end">
              <strong>Detail:</strong>
            </label>
            <input
              type="text"
              class="col-5 border border-success"
              id="exampleInputPassword1"
            />
          </div>

          <div className="text-center mb-3">
            <button type="submit" className="btn btn-primary ">
              Add House
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
