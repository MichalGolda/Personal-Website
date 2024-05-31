import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Alert from "../Alert"

describe("Alert component", () => {
    it("renders without errors", () => {
        render(<Alert message="test message" />)

        const alert = screen.getByTestId("alert")
        const alertMessage = screen.getByText("test message")

        expect(alert).toBeInTheDocument()
        expect(alertMessage).toBeInTheDocument()
    })

    it("renders unchanged", () => {
        const { container } = render(<Alert message="test message" />)
        
        expect(container).toMatchSnapshot()
    })
})
