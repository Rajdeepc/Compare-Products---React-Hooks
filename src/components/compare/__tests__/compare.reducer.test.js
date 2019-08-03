import { GET_ALL_ITEMS, OPEN_COMPARE_LIST, ADD_PRODUCT_TO_COMPARE, REMOVE_PRODUCT_FROM_COMPARE, CLEAR_COMPARE } from '../compare.types';
import CompareReducer from '../compare.reducer';

describe('Testing CompareReducer', () => {
    it('should return the initial state', () => {
        expect(CompareReducer(undefined, {})).toEqual(
            {
                shouldCompareListOpen: false,
                compareArray: [],
                itemDataArray: []
            }
        )
    })

    it('should test GET_ALL_ITEMS', () => {
        const startAction = {
            type: GET_ALL_ITEMS,
            payload: {
                data: [
                    { id: 1, name: 'John Smith' }
                ]
            }
        }

        expect(CompareReducer( {}, startAction)).toEqual({
            itemDataArray: [
                { id: 1, name: 'John Smith' }
            ]
        })
    })
})