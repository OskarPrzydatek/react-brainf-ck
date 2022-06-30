import React from "react";

import InterpreterErrorMessage from "../../InterpreterErrorMessage/InterpreterErrorMessage";
import InterpreterValueInput from "../../InterpreterValueInput/InterpreterValueInput";

type InterpreterOutputViewProps = {
  error: any;
  inputsNum: number;
  output: string;
  handleInputVal: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
};

export default function InterpreterOutputView({
  error,
  inputsNum,
  output,
  handleInputVal,
}: InterpreterOutputViewProps) {
  return (
    <>
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
    </>
  );
}
