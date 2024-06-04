import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import QuickDeliverAdvantageCard from "../QuickDeliverAdvantageCard";

describe("QuickDeliverAdvantageCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<QuickDeliverAdvantageCard />);

    expect(container).toMatchSnapshot();
  });
});
