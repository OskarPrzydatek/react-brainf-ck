import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);
    expect(container).toBeInTheDocument();
  });
});
