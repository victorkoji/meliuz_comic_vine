import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "../../store/index.js";
import CardCharacter from "./CardCharacter";

describe('CardCharacter Component', () => {
    describe('Test DOM', () => {
        test("Deve possuir o botão de detalhes", () => {
            const characterTest = {
                id: 1,
                name: "Teste",
                deck: "Breve Resumo",
                image:{
                    screen_url: "url_teste"
                }
            }
    
            render(
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <CardCharacter character={characterTest} />
                    </PersistGate>
                </Provider>
            )
    
            const buttonView = screen.getByRole('button', {name: /Detalhes/i})
            expect(buttonView).toBeInTheDocument()
        })
    })
})

