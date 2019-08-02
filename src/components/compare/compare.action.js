import { GET_ALL_ITEMS, OPEN_COMPARE_LIST, ADD_PRODUCT_TO_COMPARE, REMOVE_PRODUCT_FROM_COMPARE, CLEAR_COMPARE } from './compare.types';
import axios from 'axios';

const loadItemData = () => dispatch => {
    return axios.get('http://demo6727947.mockable.io/dummyCompare')
    .then((response) => {
        dispatch({
            type: GET_ALL_ITEMS,
            payload: {
                data: response.data
            }
        })
    }).catch(error => {
        console.log("Error" + error);
    })
    
}

const openCompareList = () => dispatch => {
    dispatch({
        type: OPEN_COMPARE_LIST,
        payload: true
    })
}

const addProductToCompare = (productItem) => dispatch => {
    dispatch({
        type: ADD_PRODUCT_TO_COMPARE,
        payload: {
            compareObj: productItem
        }
    })
}

const removeProductFromCompare = (itemIndexToRemove) => dispatch => {
    dispatch({
        type: REMOVE_PRODUCT_FROM_COMPARE,
        payload: {
            itemToRemove: itemIndexToRemove
        }
    })
}

const clearCompareList = () => dispatch => {
    dispatch({
        type: CLEAR_COMPARE
    })
}


export { loadItemData, openCompareList, addProductToCompare, removeProductFromCompare, clearCompareList }