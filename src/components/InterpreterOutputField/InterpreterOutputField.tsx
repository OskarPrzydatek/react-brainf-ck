import React from "react";

import "./InterpreterOutputField.css";

import { InterpreterLabels } from "../../constants/interpreter/interpreterLabels";
import { OutputView } from "../../constants/interpreter/outputView";

import InterpreterOutputView from "./views/InterpreterOutputView";
import InterpreterDebugView from "./views/InterpreterDebugView";

type InterpreterOutputFieldProps = {
  inputsNum: number;
  output: string;
  error?: any;
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  debug: Array<number>;
  debugCurrentPointer: number;
};

export default function InterpreterOutputField({
  inputsNum,
  output,
  error,
  inputVal,
  setInputVal,
  debug,
  debugCurrentPointer,
}: InterpreterOutputFieldProps) {
  const [outputView, setOutputView] = React.useState<OutputView>(
    OutputView.OUTPUT
  );

  const handleInputVal = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputArr =
      inputVal.length === 0
        ? Array.from({ length: inputsNum }, () => " ")
        : Array.from(inputVal);

    if (event.target!.value === "") {
      inputArr[index] = " ";

      setInputVal(inputArr.join(""));
    } else {
      inputArr[index] = event.target!.value;

      setInputVal(inputArr.join(""));
    }
  };

  return (
    <div className="interpreter-output-field">
      <div className="interpreter-output-field__output-button-wrapper">
        <span
          className="interpreter-output-field__output-button-wrapper--button"
          onClick={() => setOutputView(OutputView.OUTPUT)}
        >
          {InterpreterLabels.OUTPUT_LABEL}
        </span>
        <span
          className="interpreter-output-field__output-button-wrapper--button"
          onClick={() => setOutputView(OutputView.DEBUG)}
        >
          {InterpreterLabels.DEBUGER_LABEL}
        </span>
      </div>

      <div className="interpreter-output-field__output">
        {
          {
            OUTPUT: (
              <InterpreterOutputView
                error={error}
                inputsNum={inputsNum}
                output={output}
                handleInputVal={handleInputVal}
              />
            ),
            DEBUG: (
              <InterpreterDebugView
                debug={debug}
                debugCurrentPointer={debugCurrentPointer}
              />
            ),
          }[outputView]
        }
      </div>
    </div>
  );
}
