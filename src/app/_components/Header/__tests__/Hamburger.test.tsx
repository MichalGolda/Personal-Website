import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Hamburger } from "../Hamburger";

describe("Hamburger component", () => {
  it("renders without errors", () => {
    const onClickMock = jest.fn();

    const { container } = render(
      <Hamburger isShown={true} onClick={onClickMock} />
    );

    const hamburger = container.firstChild;

    expect(hamburger).toBeInTheDocument();
    expect(hamburger).toHaveClass("lg:hidden");

    // @ts-ignore
    fireEvent.click(hamburger);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("renders unchanged", () => {
    const { container } = render(
      <Hamburger isShown={true} onClick={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });
});
