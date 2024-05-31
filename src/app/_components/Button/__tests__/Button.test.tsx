import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Button from "../Button"

describe("Button component", () => {
    it("renders without errors", () => {
        render(<Button type="button">Button test</Button>)
    
        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute("type", "button")
    })

    it("renders unchanged", () => {
        const { container } = render(<Button type="button">Button test</Button>)
        
        expect(container).toMatchSnapshot()
    })
})
