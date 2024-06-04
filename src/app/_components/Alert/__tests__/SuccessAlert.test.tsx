import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import SuccessAlert from "../SuccessAlert"

describe("SuccessAlert component", () => {
    it("renders without errors", () => {
        render(<SuccessAlert message="test message" />)

        const alert = screen.getByTestId("alert")
        const alertMessage = screen.getByText("test message")

        expect(alert).toBeInTheDocument()
        expect(alert).toHaveClass("bg-success")
        expect(alertMessage).toBeInTheDocument()
    })

    it("renders unchanged", () => {
        const { container } = render(<SuccessAlert message="test message" />)
        
        expect(container).toMatchSnapshot()
    })
})
