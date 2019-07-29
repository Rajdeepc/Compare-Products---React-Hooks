import { GET_ALL_ITEMS, OPEN_COMPARE_LIST, ADD_PRODUCT_TO_COMPARE, REMOVE_PRODUCT_FROM_COMPARE, CLEAR_COMPARE } from './compare.types';
import {PlantList} from  '../../constants/dummyJson';


const loadItemData = () => dispatch => {
    dispatch({
        type: GET_ALL_ITEMS,
        payload: PlantList
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