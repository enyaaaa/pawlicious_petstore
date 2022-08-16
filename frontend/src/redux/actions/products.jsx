import axios from "axios";
import {GET_PRODUCTS, PRODUCT_ERROR, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT} from './types';

export const getProducts = () => async dispatch => {
    
    try {
        const res = await axios.get(`/api/products`);
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
        
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,
            payload:{
                msg: error.response.statusText,
                status: err.response.status}
        })
    }
}

export const addProduct = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const res = await axios.post("/api/products", formData, config);

        dispatch({
            type: ADD_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        });
    }
   
}


export const editProduct = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const res = await axios.put(`/api/products/${productId}`, formData, config);

        dispatch({
            type: EDIT_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        });
    }
   
}

//Delete Post

export const deleteProduct = productId => async dispatch => 
{
    try {
        await axios.delete(`/api/products/${productId}`);
        dispatch({
            type:DELETE_PRODUCT,
            payload:postId
        })
    } catch (err) {
        dispatch({
            type:PRODUCT_ERROR,
            payload:{
                msg:err.response.statusText,
                status:err.response.status
            }
        })
    }
}