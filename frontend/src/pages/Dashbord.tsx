import { useState } from "react";
import Table from "../components/table/Table";
import ModalBtn from "../components/ui/button/ModalBtn";
import { CiCalendarDate } from "react-icons/ci";
import Modal from "../components/modals/Modal";

function Dashbord() {
  const [form, setForm] = useState({
    full_name: "",
    phone_number: "",
    number: "",
    floor: "",
  });

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <div className="pl-2">
          <ModalBtn setOpen={setOpen} />
        </div>
        <Modal
          open={open}
          setOpen={setOpen}
          form={form}
          setForm={setForm}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <div className=" bg-white  p-1 rounded-xl flex justify-center items-center text-DarkBlue text-3xl transition duration-200  mr-8 cursor-pointer shadow-sm hover:bg-DarkBlue hover:text-white hover:shadow-md ">
          <CiCalendarDate />
        </div>
      </div>
      <div className="flex justify-start ">
        <Table
          setForm={setForm}
          setSelectedId={setSelectedId}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
}

export default Dashbord;
