import React from "react";
import MemberLoginArea from "./MemberLoginArea";
export const Home = () => {
  return (
    <>
      <div className="container-fluid my-1 border">
        <div className="row">
          <div className=" col-3 d-flex-col">
            <MemberLoginArea />

            <div className="container">
              <div className="text-center mx-1 me-1 my-1 bg-success">
                <a href="societyList">Society List</a>
              </div>
              <div className="text-center mx-1 me-1 my-1 ">
                <a href="shyamPark">Shyam Park</a>
              </div>
              <div className="text-center mx-1 me-1 my-1 ">
                <a href="pawanCity">Pawan City</a>
              </div>
            </div>
          </div>

          <div className="col-9 flex-col">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="data1/images/n1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="data1/images/h6.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="data1/images/h33.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
