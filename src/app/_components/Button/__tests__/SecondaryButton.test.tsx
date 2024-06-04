import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import SecondaryButton from "../SecondaryButton"

describe("SecondaryButton component", () => {
    it("renders without errors", () => {
        render(<SecondaryButton type="button">Button test</SecondaryButton>)
    
        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute("type", "button")
        expect(button).toHaveClass("bg-secondary", "text-white", "hover:bg-secondary/90", "active:bg-secondary/80", "border-transparent")
    })

    it("renders unchanged", () => {
        const { container } = render(<SecondaryButton type="button">Button test</SecondaryButton>)

        expect(container).toMatchSnapshot()
    })
})