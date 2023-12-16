import { ChangeEvent } from "react";

interface Props {
  label: string;
  placeHolder: string;
  name: string;
  inputStyling: string;
  func: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Inpute({ label, placeHolder, name, inputStyling, func }: Props) {
  return (
    <div>
      <label className=" text-gray-400 text-sm " htmlFor="">
        {label}
      </label>
      <input
        name={name}
        className={inputStyling}
        type="text"
        placeholder={placeHolder}
        onChange={func}
      />
    </div>
  );
}

export default Inpute;
