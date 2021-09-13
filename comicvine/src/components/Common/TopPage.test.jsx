import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import TopPage from "./TopPage";

describe('TopPage Component', () => {
    describe('Test DOM', () => {
        test("Deve possuir a tag h1", () => {
            render(<TopPage title="Titulo Teste" />)
    
            const tagH1 = screen.queryByText(/Titulo Teste/i)
            expect(tagH1).toBeInTheDocument()
        })
    })
})