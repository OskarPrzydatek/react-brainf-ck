const regexp = new RegExp(/[\\>\\<\\[\]\\+\-\\.\\,]$/);

export const compiler = {
  regexp: regexp,
  syntaxErrorMessage:
    "ERROR: Sign Error! Bad characters used in syntax. Use '><+-.,[]' signs only!",
  labels: {
    input: "Input",
    output: "Output",
    button: "Kompiluj",
  },
};
