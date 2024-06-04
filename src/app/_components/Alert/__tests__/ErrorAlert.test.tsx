import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ErrorAlert from "../ErrorAlert"

describe("ErrorAlert component", () => {
    it("renders without errors", () => {
        render(<ErrorAlert message="test message" />)

        const alert = screen.getByTestId("alert")
        const alertMessage = screen.getByText("test message")

        expect(alert).toBeInTheDocument()
        expect(alert).toHaveClass("bg-error")
        expect(alertMessage).toBeInTheDocument()
    })

    it("renders unchanged", () => {
        const { container } = render(<ErrorAlert message="test message" />)
        
        expect(container).toMatchSnapshot()
    })
})
