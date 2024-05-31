import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Hero from "../Hero"

describe("Hero component", () => {
    it("renders without errors", () => {
        render(<Hero />)

        const title = screen.getByTestId("title")
        const subtitle = screen.getByTestId("subtitle")
        const links = screen.getAllByRole("link")
        const contactLink = links[0]
        const contactButton = contactLink.children[0]
        const portfolioLink = links[1]
        const portfolioButton = portfolioLink.children[0]

        expect(title).toBeInTheDocument()
        expect(title.tagName).toBe("H1")

        expect(subtitle).toBeInTheDocument()
        expect(subtitle.tagName).toBe("P")
    
        expect(contactLink).toBeInTheDocument()
        expect(contactLink).toHaveAttribute("href", "#contact")

        expect(contactButton.textContent).toBe("Stwórzmy coś razem")

        expect(portfolioLink).toBeInTheDocument()
        expect(portfolioLink).toHaveAttribute("href", "#portfolio")
        expect(portfolioLink.textContent).toBe("Portfolio")
    })

    it("renders unchanged", () => {
        const { container } = render(<Hero />)

        expect(container).toMatchSnapshot()
    })
})