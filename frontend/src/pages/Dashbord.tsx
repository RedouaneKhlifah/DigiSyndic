import Table from "../components/table/Table";
import ModalBtn from "../components/ui/button/ModalBtn";
import { CiCalendarDate } from "react-icons/ci";

function Dashbord() {
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <div className="pl-2">
          <ModalBtn />
        </div>
        <div className=" bg-white  p-1 rounded-xl flex justify-center items-center text-DarkBlue text-3xl transition duration-200  mr-8 cursor-pointer shadow-sm hover:bg-DarkBlue hover:text-white hover:shadow-md ">
          <CiCalendarDate />
        </div>
      </div>
      <div className="flex justify-start ">
        <Table />
      </div>
    </div>
  );
}

export default Dashbord;
