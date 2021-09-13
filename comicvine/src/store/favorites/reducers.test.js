import reducer, { ActionsTypes } from './index';

describe('Layout Reducers', () => {

    test('Deve retornar o state inicial: []', () => {
        expect(reducer(undefined, {})).toEqual([]);
    })

    test('Deve retornar um array com o item 2 adicionado ao state: [1, 2]', () => {
        const state = [1];
        const action = {
            type: ActionsTypes.ADD_FAVORITE, 
            favorite: 2 
        }

        expect(reducer(state, action)).toEqual([1, 2]);
    })

    test('Deve retornar um array com o item 2 adicionado ao state: [1, 2]', () => {
        const state = [1];
        const action = {
            type: ActionsTypes.ADD_FAVORITE, 
            favorite: 2 
        }

        expect(reducer(state, action)).toEqual([1, 2]);
    })

    test('Deve retornar um array vazio após a remoção do item 1 do state: []', () => {
        const state = [1];
        const action = {
            type: ActionsTypes.REMOVE_FAVORITE, 
            favorite: 1 
        }

        expect(reducer(state, action)).toEqual([]);
    })

    test('Deve retornar o mesmo array ao tentar remover um item inválido do state: [1]', () => {
        const state = [1];
        const action = {
            type: ActionsTypes.REMOVE_FAVORITE, 
            favorite: 2 
        }

        expect(reducer(state, action)).toEqual([1]);
    })
})