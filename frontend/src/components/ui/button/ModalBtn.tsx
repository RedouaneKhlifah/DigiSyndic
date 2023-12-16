import { GoPlus } from "react-icons/go";
import Modal from "../../modals/Modal";
import { useState } from "react";

function ModalBtn() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className=" bg-DarkBlue text-xs flex items-center gap-2 p-2 text-white rounded-md transition duration-200 hover:shadow-md hover:bg-DarkerBlue  "
      >
        Add Apppartement
        <div className="text-base ">
          <GoPlus />
        </div>
      </button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default ModalBtn;
