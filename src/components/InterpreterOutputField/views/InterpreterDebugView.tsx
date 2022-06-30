type InterpreterDebugViewProps = {
  debug: Array<number>;
  debugCurrentPointer: number;
};

export default function InterpreterDebugView({
  debug,
  debugCurrentPointer,
}: InterpreterDebugViewProps) {
  return (
    <ul>
      {debug.map((cell: number, index: number) => (
        <li
          key={`${cell}-${index}`}
          style={{
            background: debugCurrentPointer === index ? "red" : "inherit",
          }}
        >
          memory cell: {cell}
        </li>
      ))}
    </ul>
  );
}
