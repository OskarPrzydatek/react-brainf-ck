import "./InterpreterErrorMessage.css";

type InterpreterErrorMessageProps = {
  message: string;
};

export default function InterpreterErrorMessage({
  message,
}: InterpreterErrorMessageProps) {
  return <span className="interpreter-error-message">{message}</span>;
}
