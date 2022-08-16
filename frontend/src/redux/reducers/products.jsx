import {GET_PRODUCTS, PRODUCT_ERROR, ADD_PRODUCT, DELETE_PRODUCT} from '../actions/types';

const initialState = {
    products: [],
    loading: true,
    error: {}
}

export default function ( state=initialState, action){
    const {type,payload} = action;

    switch(type){
        case GET_PRODUCTS:
        return{
            ...state,
            products: payload,
            loading:false
        }
        case ADD_PRODUCT:
            return{
                ...state,
                products: [payload,...state.products],
                loading:false
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id!== payload),
                loading:false
            }
        default:
            return state;
    }
}