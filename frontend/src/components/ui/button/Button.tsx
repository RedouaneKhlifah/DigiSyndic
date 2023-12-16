import React from "react";
import { Props } from "../../interfaces/Button";

function Button({ text, styling }: Props) {
  return (
    <>
      <button className={`${styling} drop-shadow-inset-black-sm`}>
        {text}
      </button>
    </>
  );
}

export default Button;
