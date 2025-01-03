import { describe } from "node:test";
import { render, screen} from '@testing-library/react'

import Title from "./Title";

describe('Teste componente Title', () => {
    test('Deve renderizar o componente Title', () => {
        render(<Title />)

        expect(screen.getByText('Gilson Terra')).toBeInTheDocument()
    })
})