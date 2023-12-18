import { GoPlus } from "react-icons/go";
import { ModalButtonProps } from "../../../interface/form";

function ModalBtn({ setOpen }: ModalButtonProps) {
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
    </div>
  );
}

export default ModalBtn;
