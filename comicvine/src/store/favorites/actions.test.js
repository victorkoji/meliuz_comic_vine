import { ActionsTypes, ActionsCreators } from './index'

describe('Layout Actions', () => {
    describe('Actions Types', () => {
        test('Deve retornar a action type ADD_FAVORITE', () => {
            expect(ActionsTypes.ADD_FAVORITE).toEqual('ADD_FAVORITE')
        })

        test('Deve retornar a action type REMOVE_FAVORITE', () => {
            expect(ActionsTypes.REMOVE_FAVORITE).toEqual('REMOVE_FAVORITE')
        })
    })

    describe('Actions Creators', () => {
        test('Deve retornar a action creator ADD_FAVORITE', () => {
            expect(ActionsCreators.addFavorite()).toEqual({ type: ActionsTypes.ADD_FAVORITE })
        })

        test('Deve retornar a action creator REMOVE_FAVORITE', () => {
            expect(ActionsCreators.removeFavorite()).toEqual({ type: ActionsTypes.REMOVE_FAVORITE })
        })
    })
})