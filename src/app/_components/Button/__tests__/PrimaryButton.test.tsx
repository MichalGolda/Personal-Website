import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import PrimaryButton from "../PrimaryButton"

describe("PrimaryButton component", () => {
    it("renders without errors", () => {
        render(<PrimaryButton type="button">Button test</PrimaryButton>)
    
        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute("type", "button")
        expect(button).toHaveClass("bg-primary", "text-white", "hover:bg-primary/90", "active:bg-primary/80", "border-transparent")
    })

    it("renders unchanged", () => {
        const { container } = render(<PrimaryButton type="button">Button test</PrimaryButton>)

        expect(container).toMatchSnapshot()
    })
})