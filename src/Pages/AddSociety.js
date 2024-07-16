import React from "react";

export default function AddSociety() {
  return (
    <>
      <div className="container justify-content-center w-auto">
        <form className="container w-80 vh-auto my-0 mb-2">
          <div className="text-center text-white my-2 bg-success">
            <h6>ADD NEW SOCIETY</h6>
          </div>
          <div class="mb-3 text-center my-3 me-5">
            <label htmlFor="societyName" className="form-label col-4 text-end">
              <strong>Society's Name:</strong>
            </label>
            <input
              type="text"
              class="col-5 border border-success"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Society's name"
            />
          </div>
          <div class="mb-3 text-center my-2 me-5 ">
            <label htmlFor="house" className="form-label col-4 text-end">
              <strong>No. of Houses:</strong>
            </label>
            <input
              type="text"
              class="col-5 border border-success"
              id="exampleInputPassword1"
              placeholder="Enter No. of House"
            />
          </div>
          <div class="mb-3 text-center my-2 me-5">
            <label htmlFor="address" className="form-label col-4 text-end">
              <strong>Address:</strong>
            </label>
            <input
              type="text"
              class="col-5 border border-success"
              id="exampleInputPassword1"
              placeholder="Enter your address"
            />
          </div>
          <div class="mb-3 text-center my-2 me-5">
            <label htmlFor="city" className="form-label col-4 text-end">
              <strong>City:</strong>
            </label>
            <select
              name="city"
              id="city123"
              className="col-5 border border-success"
            >
              <option value="0">Delhi</option>
              <option value="1">Indore</option>
              <option value="2">Amritsar</option>
              <option value="3">Pune</option>
            </select>
          </div>
          <div class="mb-3 text-center my-2 me-5">
            <label htmlFor="pinCode" className="form-label col-4 text-end">
              <strong>PinCode:</strong>
            </label>
            <input
              type="text"
              class="col-5 border border-success"
              id="exampleInputPassword1"
              placeholder="Enter your PinCode"
            />
          </div>
          <div class="mb-3 text-center my-2 me-5">
            <label htmlFor="image" className="form-label col-4 text-end">
              <strong>Image:</strong>
            </label>
            <input
              type="file"
              class="col-5 border border-success"
              id="exampleInputPassword1"
            />
          </div>

          <div className="text-center mb-3">
            <button type="submit" className="btn btn-primary ">
              Add Society
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
