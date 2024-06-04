import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";

describe("ProjectCard component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <ProjectCard
        name="test name"
        description="test description"
        previewUrl="test preview url"
        githubUrl="test github url"
        coverImageSrc="/project.webp"
      />
    );

    const name = screen.getByText("test name");
    const links = screen.getAllByRole("link");
    const previewLink = links[0];
    const githubLink = links[1];
    const description = screen.getByText("test description");
    const coverImage = screen.getByAltText("test name");

    expect(name).toBeInTheDocument();
    expect(name.tagName).toBe("H3");

    expect(previewLink).toBeInTheDocument();
    expect(previewLink).toHaveAttribute("href", "test preview url");
    expect(previewLink.textContent).toBe("Podgląd");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "test github url");
    expect(githubLink.textContent).toBe("Github");

    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe("P");

    expect(coverImage).toBeInTheDocument();
    expect(coverImage).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fproject.webp&w=3840&q=75"
    );
  });

  it("renders unchanged", () => {
    const { container } = render(
      <ProjectCard
        name="test name"
        description="test description"
        previewUrl="test preview url"
        githubUrl="test github url"
        coverImageSrc="/project.webp"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
