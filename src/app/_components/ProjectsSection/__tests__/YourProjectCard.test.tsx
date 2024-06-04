import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import YourProjectCard from "../YourProjectCard";

describe("YourProjectCard component", () => {
  it("renders without errors", () => {
    render(<YourProjectCard />);

    const title = screen.getByRole("heading");
    const link = screen.getByRole("link");
    const button = screen.getByText("Skontaktuj się");

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H4");
    expect(title.textContent).toBe("Miejsce na twój projekt");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#contact");

    expect(button).toBeInTheDocument();
  });

  it("renders unchanged", () => {
    const { container } = render(<YourProjectCard />);

    expect(container).toMatchSnapshot();
  });
});
