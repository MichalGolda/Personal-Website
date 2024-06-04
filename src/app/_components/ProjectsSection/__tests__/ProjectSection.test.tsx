import "@/app/_mocks/intersectionObserver.mock";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProjectsSection from "../ProjectsSection";
import { fetchProjects } from "@/app/_utils/fetchContent";

describe("ProjectsSection component", () => {
  it("renders unchanged", async () => {
    const data = await fetchProjects();

    const { container } = render(<ProjectsSection data={data} />);

    expect(container).toMatchSnapshot();
  });
});
