import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import SecondaryOutlinedButton from "../SecondaryOutlinedButton"

describe("SecondaryOutlinedButton component", () => {
    it("renders without errors", () => {
        render(<SecondaryOutlinedButton type="button">Button test</SecondaryOutlinedButton>)
    
        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute("type", "button")
        expect(button).toHaveClass("bg-transparent", "text-secondary", "hover:bg-secondary", "active:bg-secondary/80", "border-secondary", "hover:text-white")
    })

    it("renders unchanged", () => {
        const { container } = render(<SecondaryOutlinedButton type="button">Button test</SecondaryOutlinedButton>)

        expect(container).toMatchSnapshot()
    })
})