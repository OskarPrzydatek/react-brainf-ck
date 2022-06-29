import React from "react";

import "./InterpreterValueInput.css";

type InterpreterValueInputProps = {
  index: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function InterpreterValueInput({
  index,
  onChange,
}: InterpreterValueInputProps) {
  return (
    <label className="interpreter-value-input">
      <span>Input[{index}]:</span>
      <input
        type="text"
        className="interpreter-value-input__inputfield"
        maxLength={1}
        onChange={onChange}
      />
    </label>
  );
}
