import React from "react";

import "./InterpreterInputField.css";

import { UseFormRegisterReturn } from "react-hook-form";

import { InterpreterLabels } from "../../constants/interpreter/interpreterLabels";

type InterpreterInputFieldProps = {
  register?: UseFormRegisterReturn;
  onChange: (event: any) => any;
};

export default function InterpreterInputField({
  register,
  onChange,
}: InterpreterInputFieldProps) {

  return (
    <label className="interpreter-input-field">
      <span className="interpreter-input-field__label">{InterpreterLabels.INPUT_LABEL}</span>
      <textarea
        {...register}
        className="interpreter-input-field__input"
        onChange={onChange}
      ></textarea>
    </label>
  );
}
