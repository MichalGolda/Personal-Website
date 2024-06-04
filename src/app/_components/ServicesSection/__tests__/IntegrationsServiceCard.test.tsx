import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import IntegrationsServiceCard from "../IntegrationsServiceCard";

describe("IntegrationsServiceCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<IntegrationsServiceCard />);

    expect(container).toMatchSnapshot();
  });
});
