import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import AdvantageCard from "../AdvantageCard"

describe("AdvantageCard component", () => {
    it("renders without errors", () => {
        render(<AdvantageCard iconSrc="/test.png" title="test title" content="test content" data-testid="advantage-card" />)

        const card = screen.getByTestId("advantage-card")
        const icon = screen.getByRole("img")
        const title = screen.getByText("test title")
        const content = screen.getByText("test content")

        expect(card).toBeInTheDocument()

        expect(icon).toBeInTheDocument()
        expect(icon).toHaveAttribute("src", "/_next/image?url=%2Ftest.png&w=128&q=75")
        expect(icon).toHaveAttribute("alt", "test title")
        
        expect(title).toBeInTheDocument()
        expect(title.tagName).toBe("H4")
        
        expect(content).toBeInTheDocument()
        expect(content.tagName).toBe("P")
    })

    it("renders unchanged", () => {
        const { container } = render(<AdvantageCard iconSrc="/test.png" title="test title" content="test content" data-testid="advantage-card" />)
        
        expect(container).toMatchSnapshot()
    })
})
