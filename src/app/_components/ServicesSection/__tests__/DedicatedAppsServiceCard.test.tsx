import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import DedicatedAppsServiceCard from "../DedicatedAppsServiceCard";

describe("DedicatedAppsServiceCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<DedicatedAppsServiceCard />);

    expect(container).toMatchSnapshot();
  });
});
