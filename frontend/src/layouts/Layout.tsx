import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import Navbar from "../components/navbar/Navbar";

function Layouts() {
  return (
    <div className=" grid grid-cols-[20%_80%] ">
      <SideBar />
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layouts;
