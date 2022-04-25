import "./Compiler.css";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { compiler } from "../../constants/compiler";

import CompilerField from "../CompilerField/CompilerField";
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
        <CompilerField
          label={compiler.labels.input}
          register={register("bfCode", {
            required: true,
            pattern: {
              value: compiler.regexp,
              message: compiler.syntaxErrorMessage,
            },
          })}
        />
        <CompilerField
          label={compiler.labels.output}
          readOnly={true}
          value={input}
          error={errors.bfCode}
        />
      </div>
      <Button label={compiler.labels.button} />
    </form>
  );
}
