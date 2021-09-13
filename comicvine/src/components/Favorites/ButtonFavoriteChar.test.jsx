import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "../../store/index.js";
import ButtonFavoriteChar from "./ButtonFavoriteChar";

describe('ButtonFavoriteChar Component', () => {
    describe('Test DOM', () => {
        test("Deve possuir o botão de favoritar", () => {
            const characterTest = {
                id: 1
            }
    
            render(
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <ButtonFavoriteChar character={characterTest} />
                    </PersistGate>
                </Provider>
            )
    
            const buttonView = screen.getByRole('button', {name: /Favoritar/i})
            expect(buttonView).toBeInTheDocument()
        })
    })
})