import "./InterpreterOutputField.css";

import { InterpreterLabels } from "../../constants/interpreter/interpreterLabels";

import InterpreterErrorMessage from "../InterpreterErrorMessage/InterpreterErrorMessage";
import InterpreterValueInput from "../InterpreterValueInput/InterpreterValueInput";

type InterpreterOutputFieldProps = {
  inputsNum: number;
  output: string;
  error?: any;
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
};

export default function InterpreterOutputField({
  inputsNum,
  output,
  error,
  inputVal,
  setInputVal,
}: InterpreterOutputFieldProps) {
  
  // TODO: Do it better and separate
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
    <article className="interpreter-output-field">
      <h2 className="interpreter-output-field__header">
        {InterpreterLabels.OUTPUT_LABEL}
      </h2>
      <div className="interpreter-output-field__output">
        {error ? (
          <InterpreterErrorMessage message={error.message} />
        ) : (
          <>
            {inputsNum > 0 &&
              Array.from({ length: inputsNum }).map((_, index) => (
                <InterpreterValueInput
                  key={`input-nr-${index}`}
                  index={index}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputVal(event, index)
                  }
                />
              ))}
            <span>{output}</span>
          </>
        )}
      </div>
    </article>
  );
}
