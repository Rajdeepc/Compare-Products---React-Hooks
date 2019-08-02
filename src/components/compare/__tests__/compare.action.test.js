import { GET_ALL_ITEMS, OPEN_COMPARE_LIST, ADD_PRODUCT_TO_COMPARE, REMOVE_PRODUCT_FROM_COMPARE, CLEAR_COMPARE } from '../compare.types';

import { loadItemData, openCompareList, addProductToCompare, removeProductFromCompare, clearCompareList } from '../compare.action';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import MockAdapter  from 'axios-mock-adapter';
import axios from 'axios';
const mock = new MockAdapter(axios);
const store = mockStore({});



const DummyData = [
    {
        "id": "1",
        "name": "Cherry",
        "image": "https://image.shutterstock.com/image-photo/cherry-isolated-on-white-background-260nw-200523716.jpg",
        "price": "$1.99",
        "colors": ["red", "green", "blue"],
        "condition": "Fresh",
        "description": "Two Cherries"
    },
    {
        "id": "2",
        "name": "Orange",
        "image": "https://media.gettyimages.com/photos/orange-picture-id185284489?s=612x612",
        "price": "$2.99",
        "colors": ["green", "blue"],
        "condition": "Frozen",
        "description": "Giant Orange"
    },
    {
        "id": "3",
        "name": "Nuts",
        "image": "https://nuts.com/images/auto/801x534/assets/11e396e470741b57.jpg",
        "price": "$1.00",
        "colors": ["red"],
        "condition": "Frozen",
        "description": "Mixed Nuts"
    },
    {
        "id": "4",
        "name": "Strawberry",
        "image": "https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": "$1.49",
        "colors": ["blue"],
        "condition": "Fresh",
        "description": "Just Strawberry"
    }
]



describe('Testing loadItemData()', () => {
  
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });
    it('should get ALL_ITEMS',  () => {
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
        })
       

    })
})