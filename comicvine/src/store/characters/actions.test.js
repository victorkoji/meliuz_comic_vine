import { ActionsTypes, ActionsCreators } from './index'

describe('Layout Actions', () => {
    describe('Actions Types', () => {
        test('Deve retornar a action type FETCH_CHARACTERS', () => {
            expect(ActionsTypes.FETCH_CHARACTERS).toEqual('FETCH_CHARACTERS')
        })

        test('Deve retornar a action type EDIT_CHARACTER', () => {
            expect(ActionsTypes.EDIT_CHARACTER).toEqual('EDIT_CHARACTER')
        })

        test('Deve retornar a action type CHANGE_FILTER_TYPE', () => {
            expect(ActionsTypes.CHANGE_FILTER_TYPE).toEqual('CHANGE_FILTER_TYPE')
        })
    })

    describe('Actions Creators', () => {
        test('Deve retornar a action creator FETCH_CHARACTERS', () => {
            expect(ActionsCreators.fetchCharacters()).toEqual({ type: ActionsTypes.FETCH_CHARACTERS })
        })

        test('Deve retornar a action creator EDIT_CHARACTER', () => {
            expect(ActionsCreators.editCharacter()).toEqual({ type: ActionsTypes.EDIT_CHARACTER })
        })

        test('Deve retornar a action creator CHANGE_FILTER_TYPE', () => {
            expect(ActionsCreators.changeFilterType()).toEqual({ type: ActionsTypes.CHANGE_FILTER_TYPE })
        })
    })
})