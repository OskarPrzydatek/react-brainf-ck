import "./Interpreter.css";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { CompilerContent } from "../../constants/compiler";
import { syntaxRegexp } from "../../constants/syntaxRegexp";

import InterpreterField from "../InterpreterField/InterpreterField";
import Button from "../Button/Button";

type CodeInput = {
  bfCode: string;
};

export default function Compiler() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CodeInput>();

  const [input, setInput] = React.useState<string>();

  const compile: SubmitHandler<CodeInput> = (data: CodeInput) =>
    setInput(data.bfCode);

  return (
    <form onSubmit={handleSubmit(compile)} className="compiler">
      <div className="compiler__io">
        <InterpreterField
          label={CompilerContent.INPUT_LABEL}
          register={register("bfCode", {
            required: true,
            pattern: {
              value: syntaxRegexp,
              message: CompilerContent.SYNTAX_ERROR,
            },
          })}
        />
        <InterpreterField
          label={CompilerContent.OUTPUT_LABEL}
          readOnly={true}
          value={input}
          error={errors.bfCode}
        />
      </div>
      <Button label={CompilerContent.BUTTON_LABEL} />
    </form>
  );
}
