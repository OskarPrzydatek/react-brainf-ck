import React from "react";

import "./Interpreter.css";

import { useForm, SubmitHandler } from "react-hook-form";

import { ComaRegexp } from "../../constants/regexps/comaRegexp";
import { SyntaxRegexp } from "../../constants/regexps/syntaxRegexp";
import { InterpreterLabels } from "../../constants/interpreter/interpreterLabels";
import { InterpreterErrors } from "../../constants/interpreter/interpreterErrors";

import useBrainfuckInterpreter from "../../hooks/useBrainfuckInterpreter";

import InterpreterInputField from "../InterpreterInputField/InterpreterInputField";
import InterpreterOutputField from "../InterpreterOutputField/InterpreterOutputField";
import Button from "../Button/Button";

type CodeInput = {
  bfCode: string;
};

export default function Interpreter() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CodeInput>();

  const [program, setProgram] = React.useState<string>("");
  const [inputVal, setInputVal] = React.useState<string>("");
  const [inputsNum, setInputsNum] = React.useState<number>(0);

  const [output, debug, debugCurrentPointer] = useBrainfuckInterpreter(
    program,
    inputVal
  );

  const compile: SubmitHandler<CodeInput> = ({ bfCode }: CodeInput) => {
    setProgram(bfCode.trim());
  };

  const handleInputs = (event: any) => {
    const programInputs = event.target.value.match(ComaRegexp);

    programInputs !== null
      ? setInputsNum(programInputs.length)
      : setInputsNum(0);
  };

  return (
    <form onSubmit={handleSubmit(compile)} className="interpreter">
      <div className="interpreter__io">
        <InterpreterInputField
          register={register("bfCode", {
            required: true,
            pattern: {
              value: SyntaxRegexp,
              message: InterpreterErrors.SYNTAX_ERROR,
            },
          })}
          onChange={handleInputs}
        />
        <InterpreterOutputField
          inputsNum={inputsNum}
          output={output as string}
          error={errors.bfCode}
          inputVal={inputVal}
          setInputVal={setInputVal}
          debug={debug as Array<number>}
          debugCurrentPointer={debugCurrentPointer as number}
        />
      </div>
      <Button label={InterpreterLabels.BUTTON_LABEL} />
    </form>
  );
}
