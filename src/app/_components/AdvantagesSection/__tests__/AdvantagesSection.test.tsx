import "@/app/_mocks/intersectionObserver.mock"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import AdvantagesSection from "../AdvantagesSection"

describe("AdvantagesSection component", () => {
    it("renders without errors", () => {
        render(<AdvantagesSection data-testid="advantages-section" />)

        const section = screen.getByTestId("advantages-section")
        const title = screen.getByText("Dlaczego warto mi zaufać?")
        const headline = screen.getByText("zalety")

        expect(section).toBeInTheDocument()
        expect(section.tagName).toBe("SECTION")
        expect(section).toHaveAttribute("id", "advantages")

        expect(title).toBeInTheDocument()
        expect(title.tagName).toBe("H2")

        expect(headline).toBeInTheDocument()
        expect(headline.tagName).toBe("SPAN")
    })

    it("renders unchanged", () => {
        const { container } = render(<AdvantagesSection />)
        
        expect(container).toMatchSnapshot()
    })
})