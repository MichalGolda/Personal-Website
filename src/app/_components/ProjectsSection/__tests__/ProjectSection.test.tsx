import "@/app/_mocks/intersectionObserver.mock";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProjectsSection from "../ProjectsSection";
import { useFetchProjects } from "@/app/_hooks/useFetchProjects";

describe("ProjectsSection component", () => {
  it("renders unchanged", async () => {
    const data = await useFetchProjects();

    const { container } = render(<ProjectsSection data={data} />);

    expect(container).toMatchSnapshot();
  });
});
