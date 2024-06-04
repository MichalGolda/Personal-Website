import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import MenuItem from "../MenuItem"

describe("MenuItem component", () => {
    it("renders without errors", () => {
        const mockedOnClick = jest.fn()

        const { container } = render(<MenuItem href="/test" current={false} name="test" onClick={mockedOnClick} />)

        const item = container.children[0]
        const link = screen.getByRole("link")
        const decorator = link.children[0]

        expect(item).toBeInTheDocument()
        expect(item.tagName).toBe("LI")

        fireEvent.click(item)

        expect(mockedOnClick).toHaveBeenCalled()

        expect(link).toHaveTextContent("test")
        expect(link).toHaveAttribute("href", "/test")

        expect(decorator).not.toHaveClass("!bg-primary")

        fireEvent.mouseEnter(link)

        expect(decorator).toHaveClass("!bg-primary")

        fireEvent.mouseLeave(link)

        expect(decorator).not.toHaveClass("!bg-primary")
    })

    it("current highlight", () => {
        render(<MenuItem href="/test" current={true} name="test" onClick={() => {}} />)
        
        const link = screen.getByRole("link")
        const decorator = link.children[0]

        expect(decorator).toHaveClass("!bg-primary")
    })

    it("renders unchanged", () => {
        const { container } = render(<MenuItem href="/test" current={false} name="test" onClick={() => {}} />)
        
        expect(container).toMatchSnapshot()
    })
})