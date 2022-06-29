import { MEMORY_SIZE } from "../constants/interpreter/memorySize";
import { BFSigns } from "../constants/interpreter/bfSigns";

export default function useBrainfuckInterpreter(
  program: string,
  input: string
) {
  let memoryTape = Array(MEMORY_SIZE).fill(0);
  let instructionPointer = 0;
  let isLooping = false;
  let loopStack = [];
  let innerLoops = 0;
  let output = "";
  let inputCounter = 0;

  if (program !== undefined && program.length) {
    for (let i = 0; i < program!.length; i++) {
      const char = program[i];

      if (isLooping) {
        if (char === BFSigns.BRACKET_OPEN) innerLoops++;
        if (char === BFSigns.BRACKET_CLOSE) {
          if (innerLoops === 0) isLooping = false;
          else innerLoops--;
        }
        continue;
      }

      switch (char) {
        case BFSigns.PLUS:
          memoryTape[instructionPointer]++;
          break;
        case BFSigns.MINUS:
          memoryTape[instructionPointer]--;
          break;
        case BFSigns.COMA: {
          if (input[inputCounter] !== undefined) {
            memoryTape[instructionPointer] = input[inputCounter].charCodeAt(0);
            inputCounter++;
          }

          break;
        }
        case BFSigns.DOT:
          output += String.fromCharCode(memoryTape[instructionPointer]);
          break;
        case BFSigns.GREATER_THAN:
          instructionPointer++;
          memoryTape[instructionPointer] = memoryTape[instructionPointer] || 0;
          break;
        case BFSigns.LESS_THAN:
          instructionPointer--;
          memoryTape[instructionPointer] = memoryTape[instructionPointer] || 0;
          break;
        case BFSigns.BRACKET_OPEN:
          memoryTape[instructionPointer] === 0
            ? (isLooping = true)
            : loopStack.push(i);
          break;
        case BFSigns.BRACKET_CLOSE:
          memoryTape[instructionPointer] !== 0
            ? (i = loopStack[loopStack.length - 1])
            : loopStack.pop();
          break;
        default:
          break;
      }
    }
  }

  return output;
}
