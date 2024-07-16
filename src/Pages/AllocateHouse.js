import React from "react";

export default function AllocateHouse() {
  return (
    <>
      <div className="container justify-content-center w-auto">
        <form className="container w-80 vh-auto my-0 mb-2">
          <div className="text-center text-white my-1 bg-success">
            <h6>ALLOCATE HOUSE TO MEMBER</h6>
          </div>
          <div className="row">
            <div className="col-6 d-flex-col my-2">
              <div class="mb-3 text-center my-3">
                <label
                  htmlFor="firstName"
                  className="form-label col-4 text-end"
                >
                  <strong>First Name:</strong>
                </label>
                <input
                  type="text"
                  class="col-8 border border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter first name"
                />
              </div>
              <div class="mb-3 text-center my-3">
                <label htmlFor="lastName" className="form-label col-4 text-end">
                  <strong>Last Name:</strong>
                </label>
                <input
                  type="text"
                  class="col-8 border border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter last name"
                />
              </div>
              <div class="mb-3 text-center my-3">
                <label htmlFor="email" className="form-label col-4 text-end">
                  <strong>Email:</strong>
                </label>
                <input
                  type="text"
                  class="col-8 border border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="mb-3 text-center my-3 ">
                <label htmlFor="mobile" className="form-label col-4 text-end">
                  <strong>Mobile:</strong>
                </label>
                <input
                  type="text"
                  class="col-8 border border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter mobile No."
                />
              </div>
              <div class="mb-3 text-center my-3">
                <label
                  htmlFor="birthdate"
                  className="form-label col-4 text-end"
                >
                  <strong>BirthDate:</strong>
                </label>
                <input
                  type="text"
                  class="col-8 border border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter birth date"
                />
              </div>
              <div class="mb-3 text-center my-3">
                <label
                  htmlFor="totalMember"
                  className="form-label col-4 text-end"
                >
                  <strong>TotalMember:</strong>
                </label>
                <input
                  type="text"
                  class="col-8 border border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter total member"
                />
              </div>
            </div>
            <div className="col-6 d-flex-col my-2">
              <div class="mb-3 text-center my-3">
                <label
                  htmlFor="societyName"
                  className="form-label col-4 text-end"
                >
                  <strong>Society:</strong>
                </label>
                <select
                  name="select"
                  id="select123"
                  className="col-8 border border-sucess"
                >
                  <option value="0">select</option>
                  <option value="1">Pavan City</option>
                  <option value="2">Shyam Park</option>
                </select>
              </div>
              <div class="mb-3 text-center my-3">
                <label
                  htmlFor="houseNumber"
                  className="form-label col-4 text-end"
                >
                  <strong>House No.:</strong>
                </label>
                <input
                  type="text"
                  class="col-8 border border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter house number"
                />
              </div>
              <div class="mb-3 text-center my-3">
                <label htmlFor="photo" className="form-label col-4 text-end">
                  <strong>Photo:</strong>
                </label>
                <input
                  type="file"
                  class="col-8 border border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 text-center my-3">
                <label htmlFor="userName" className="form-label col-4 text-end">
                  <strong>UserName:</strong>
                </label>
                <input
                  type="text"
                  class="col-8 border border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter user name"
                />
              </div>
              <div class="mb-3 text-center my-3">
                <label htmlFor="password" className="form-label col-4 text-end">
                  <strong>Password:</strong>
                </label>
                <input
                  type="password"
                  class="col-8 border border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter password"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-3">
            <button type="submit" className="btn btn-primary ">
              Add Member
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
