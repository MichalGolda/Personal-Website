import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ClearBillingsAdvantageCard from "../ClearBillingsAdvantageCard";

describe("ClearBillingsAdvantageCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<ClearBillingsAdvantageCard />);

    expect(container).toMatchSnapshot();
  });
});
