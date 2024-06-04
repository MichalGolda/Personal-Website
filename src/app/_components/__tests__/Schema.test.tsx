import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Schema from "../Schema";

describe("Schema component", () => {
  it("renders unchanged", () => {
    const { container } = render(<Schema />);

    expect(container).toMatchSnapshot();
  });
});
