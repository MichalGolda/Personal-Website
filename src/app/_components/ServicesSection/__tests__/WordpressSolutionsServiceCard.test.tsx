import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import WordpressSolutionsServiceCard from "../WordpressSolutionsServiceCard";

describe("WordpressSolutionsServiceCard component", () => {
  it("renders unchanged", () => {
    const { container } = render(<WordpressSolutionsServiceCard />);

    expect(container).toMatchSnapshot();
  });
});
