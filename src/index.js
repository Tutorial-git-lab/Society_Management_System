import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Search from "./Pages/Search";
import RentList from "./Pages/RentList";
import SellList from "./Pages/SellList";
import Admin from "./Pages/Admin";
import Header from "./Pages/Header";
import { Home } from "./Pages/Home";
import AdminLayout from "./Pages/AdminLayout";
import AddSociety from "./Pages/AddSociety";
import AddHouse from "./Pages/AddHouse";
import HouseReport from "./Pages/HouseReport";
import AllocateHouse from "./Pages/AllocateHouse";
import MemberReport from "./Pages/MemberReport";
import Complain from "./Pages/Complain";
import SellHouseReport from "./Pages/SellHouseReport";
import RentHouseReport from "./Pages/RentHouseReport";
import LogOut from "./Pages/LogOut";
import SocietyList from "./Pages/SocietyList";
import PavanCity from "./Pages/PavanCity";
import ShyamPark from "./Pages/ShyamPark";
import Contact from "./Pages/ContactUs";
import ForgotPassword from "./Pages/ForgotPassword";
export default function App() {
  return (
    <>
      <div className="containe-fluid p-1">
        <BrowserRouter>
          <div className="container-fluid  my-1  border">
            <div className="row">
              <div className="d-flex-col">
                <Header />
              </div>
            </div>
          </div>
          <div className="col-12 d-flex-col my-0">
            <Routes>
              <Route exact path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route exact path="search" element={<Search />} />
                <Route exact path="rentList" element={<RentList />} />
                <Route exact path="sellList" element={<SellList />} />
                <Route exact path="admin" element={<Admin />} />
                <Route exact path="contactUs" element={<Contact />} />
              </Route>
              <Route exact path="/adminLayout" element={<AdminLayout />}>
                <Route exact path="addSociety" element={<AddSociety />} />
                <Route exact path="addHouse" element={<AddHouse />} />
                <Route exact path="houseReport" element={<HouseReport />} />
                <Route exact path="allocateHosue" element={<AllocateHouse />} />
                <Route exact path="memberReport" element={<MemberReport />} />
                <Route exact path="complain" element={<Complain />} />
                <Route
                  exact
                  path="sellHouseReport"
                  element={<SellHouseReport />}
                />
                <Route
                  exact
                  path="rentHouseReport"
                  element={<RentHouseReport />}
                />
                \
                <Route exact path="logout" element={<LogOut />} />
              </Route>
              <Route exact path="societyList" element={<SocietyList />}></Route>
              <Route exact path="pawanCity" element={<PavanCity />}></Route>
              <Route exact path="shyamPark" element={<ShyamPark />}></Route>
              <Route
                exact
                path="forgotPassword"
                element={<ForgotPassword />}
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
