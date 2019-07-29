import { GET_ALL_ITEMS,OPEN_COMPARE_LIST, ADD_PRODUCT_TO_COMPARE, REMOVE_PRODUCT_FROM_COMPARE, CLEAR_COMPARE } from './compare.types';



const INITIAL_STATE = {
    shouldCompareListOpen : false,
    compareArray : [],
    itemDataArray: []
}


const CompareReducer = (state= INITIAL_STATE, action ) => {
    switch (action.type) {
        case GET_ALL_ITEMS:
            return {
                ...state,
                itemDataArray : action.payload
            }
        case OPEN_COMPARE_LIST:
            return {
                ...state,
                shouldCompareListOpen: action.payload
            }
        case ADD_PRODUCT_TO_COMPARE:
            let tempObjToPush = [...state.compareArray]
            tempObjToPush.push(action.payload.compareObj)
            return {
                ...state,
                compareArray : [...tempObjToPush]
            }
        case REMOVE_PRODUCT_FROM_COMPARE:
            let tempObjToRemove = [...state.compareArray];
            tempObjToRemove.splice(action.payload.itemToRemove, 1);
            return {
                ...state,
                compareArray : [...tempObjToRemove]
            }
        case CLEAR_COMPARE:
            return {
                ...state,
                shouldCompareListOpen : false,
                compareArray:[]
            }
    
        default:
            return state;
    }
}


export default CompareReducer;