import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AddSociety from "./AddSociety";
import AddHouse from "./AddHouse";
import HouseReport from "./HouseReport";
import AllocateHouse from "./AllocateHouse";
import MemberReport from "./MemberReport";
import Complain from "./Complain";
import SellHouseReport from "./SellHouseReport";
import RentHouseReport from "./RentHouseReport";
import LogOut from "./LogOut";

const AdminLayout = () => {
  const [activeKey, setActiveKey] = useState("addSociety");
  const renderComponent = () => {
    switch (activeKey) {
      case "addSociety":
        return <AddSociety />;
      case "addHouse":
        return <AddHouse />;
      case "houseReport":
        return <HouseReport />;
      case "allocateHouse":
        return <AllocateHouse />;
      case "memberReport":
        return <MemberReport />;
      case "complain":
        return <Complain />;
      case "sellHouseReport":
        return <SellHouseReport />;
      case "rentHouseReport":
        return <RentHouseReport />;
      case "logout":
        return <LogOut />;
      default:
        break;
    }
  };
  return (
    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="findjob">Find Job</Link>
    //         <Link to="jobseekeraccount">My Account</Link>
    //         <Link to="jobmatch">Job Match</Link>
    //         <Link to="appliedjob">Applied Job</Link>
    //         <Link to="changepassword">Change Password</Link>
    //         <Link to="myinbox">My Inbox</Link>
    //         <Link to="sent">Sent</Link>
    //         <Link to="logout">Logout</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Outlet />
    // </>
    <>
      <div>
        <div className="container-fluid p-3 border">
          <div className="row">
            <div className="container align-item-center justify-content-center w-80 vh-80 border">
              <div className="row">
                <div className="col-4 d-flex-col bg-white">
                  <div className="text-center my-1">
                    <h5 className="text-success">Welcome</h5>
                  </div>

                  <div className="my-1 me-3 ">
                    <div
                      className={`text-center ms-5 me-5 my-2 border ${
                        activeKey === "addSociety" ? "bg-success" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("addSociety")}>
                        Add Society
                      </a>
                    </div>
                    <div
                      className={`text-center ms-5 me-5 my-2 border ${
                        activeKey === "addHouse" ? "bg-success" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("addHouse")}>
                        Add House
                      </a>
                    </div>
                    <div
                      className={`text-center ms-5 me-5 my-2 border ${
                        activeKey === "houseReport"
                          ? "bg-success"
                          : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("houseReport")}>
                        House Report
                      </a>
                    </div>
                    <div
                      className={`text-center ms-5 me-5 my-2 border ${
                        activeKey === "allocateHouse" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("allocateHouse")}>
                        Allocate House
                      </a>
                    </div>

                    <div
                      className={`text-center ms-5 me-5 my-2 border ${
                        activeKey === "memberReport"
                          ? "bg-success"
                          : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("memberReport")}>
                        Member Report
                      </a>
                    </div>
                    <div
                      className={`text-center ms-5 me-5 my-2 border ${
                        activeKey === "complain" ? "bg-info" : "bg-warning"
                      }`}
                    >
                      <a href="#" onClick={() => setActiveKey("complain")}>
                        Complain
                      </a>
                    </div>
                    <div
                      className={`text-center ms-5 me-5 my-2 border ${
                        activeKey === "sellHouseReport"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("sellHouseReport")}
                      >
                        Sell House Report
                      </a>
                    </div>
                    <div
                      className={`text-center ms-5 me-5 my-2 border ${
                        activeKey === "rentHouseReport"
                          ? "bg-info"
                          : "bg-warning"
                      }`}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveKey("rentHouseReport")}
                      >
                        Rent House Report
                      </a>
                    </div>
                    <div
                      className={`text-center ms-5 me-5 my-2 border ${
                        activeKey === "logout" ? "bg-info" : "bg-danger"
                      }`}
                    >
                      <a href="/" onClick={() => setActiveKey("")}>
                        Logout
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-8 d-flex-col border border-primary">
                  <div className="container">{renderComponent()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default AdminLayout;
