import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Container from "../Container";

describe("Container component", () => {
  it("renders without errors", () => {
    const { container: root } = render(
      <Container className="test">
        <div data-testid="children"></div>
      </Container>
    );

    const container = root.firstChild;

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("test");

    const children = screen.getByTestId("children");

    expect(children).toBeInTheDocument();
  });

  it("renders unchanged", () => {
    const { container } = render(
      <Container className="test">
        <div></div>
      </Container>
    );

    expect(container).toMatchSnapshot();
  });
});
