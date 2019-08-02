import { GET_ALL_ITEMS, OPEN_COMPARE_LIST, ADD_PRODUCT_TO_COMPARE, REMOVE_PRODUCT_FROM_COMPARE, CLEAR_COMPARE } from '../compare.types';

import { loadItemData, openCompareList, addProductToCompare, removeProductFromCompare, clearCompareList } from '../compare.action';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';


const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const mock = new MockAdapter(axios);

const store = mockStore({});


describe('Testing loadItemData()', () => {

    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });
    it('should get ALL_ITEMS', () => {
        mock.onGet('/users').reply(200, {
            data: [
                { id: 1, name: 'John Smith' }
            ]
        });

        store.dispatch(loadItemData()).then(() => {
            let expectedActions = [{
                type: GET_ALL_ITEMS,
                payload: {
                    data: [
                        { id: 1, name: 'John Smith' }
                    ]
                }
            }]
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
})


describe('testing openCompareList()', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });

    it('should open OPEN_COMPARE_LIST', () => {
        const expectedActions = [{
            type: OPEN_COMPARE_LIST,
            payload: true
        }]
        store.dispatch(openCompareList());
        expect(store.getActions()).toEqual(expectedActions);
    })
});

describe('testing addProductToCompare()', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });

    it('should pass ADD_PRODUCT_TO_COMPARE', () => {
        const expectedActions = [{
            type: ADD_PRODUCT_TO_COMPARE,
            payload: {
                compareObj: 'test'
            }
        }]
        store.dispatch(addProductToCompare('test'));
        expect(store.getActions()).toEqual(expectedActions);
    })
});

describe('testing removeProductFromCompare()', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });

    it('should pass REMOVE_PRODUCT_FROM_COMPARE', () => {
        const expectedActions = [{
            type: REMOVE_PRODUCT_FROM_COMPARE,
            payload: {
                itemToRemove: 0
            }
        }]
        store.dispatch(removeProductFromCompare(0));
        expect(store.getActions()).toEqual(expectedActions);
    })
});


describe('testing clearCompareList()', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });

    it('should pass CLEAR_COMPARE', () => {
        const expectedActions = [{
            type: CLEAR_COMPARE
        }]
        store.dispatch(clearCompareList());
        expect(store.getActions()).toEqual(expectedActions);
    })
});
