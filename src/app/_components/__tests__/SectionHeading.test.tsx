import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SectionHeading from "../SectionHeading";

describe("SectionHeading component", () => {
  it("renders without errors", () => {
    render(
      <SectionHeading
        title="test title"
        headline="test headline"
        body="test body"
      />
    );

    const title = screen.getByText("test title");

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H2");

    const headline = screen.getByText("test headline");

    expect(headline).toBeInTheDocument();
    expect(headline.tagName).toBe("SPAN");

    const body = screen.getByText("test body");

    expect(body).toBeInTheDocument();
    expect(body.tagName).toBe("P");
  });

  it("renders without body", () => {
    const { container } = render(
      <SectionHeading title="test title" headline="test headline" />
    );

    const sectionHeading = container.firstChild;

    expect(sectionHeading?.childNodes.length).toBe(2);
  });

  it("renders unchanged", () => {
    const { container } = render(
      <SectionHeading
        title="test title"
        headline="test headline"
        body="test body"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
