import reducer from './index';

describe('Layout Reducers', () => {
    test('Deve retornar o state inicial', () => {
        expect(reducer(undefined, {})).toEqual({
            filterType: "all",
            characters: [],
        });
    })
})