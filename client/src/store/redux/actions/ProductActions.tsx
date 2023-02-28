import axios from "axios";
import { Dispatch } from "redux";
import { /* ProductListDispatchTypes */ PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductConstants";
import { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL } from "../constants/ProductConstants";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_HOME_FAIL, PRODUCT_LIST_HOME_REQUEST, PRODUCT_LIST_HOME_SUCCESS, } from "../constants/ProductConstants";


export function listProductAction() {
    return (
        async (dispatch: Dispatch) => {
            try {
                dispatch({ type: PRODUCT_LIST_REQUEST });
                const { data } = await axios.get(`http://localhost:8080/api/v1/product`); // call data
                dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.products }) // khi mà success thì send data

            } catch (error: any) {
                dispatch({
                    type: PRODUCT_LIST_FAIL,
                    payload: error.response.data.message ? error.response.data.message : error.message,
                })
            }
        }
    )
}


// Product Detail by id
export const listProductDetails = (id: any) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST });
        const { data } = await axios.get(`http://localhost:8080/api/v1/product-detail/product_by_id?id=${id}`);
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data.productDetail[0] });
    } catch (error: any) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listProductHome = (limit: any) => async (dispatch: Dispatch) => {
    const limitProductType1 = String(limit.limitType1); // convert int -> string
    const limitProductType2 = String(limit.limitType2); // convert int -> string

    try {
        dispatch({ type: PRODUCT_LIST_HOME_REQUEST });
        const { data } = await axios.get(`http://localhost:8080/api/v1/product-home?category=suit&type=special&limit=${limitProductType1}`);
        const  data2  = await axios.get(`http://localhost:8080/api/v1/product-home?category=shirt&type=special&limit=${limitProductType2}`);
        dispatch({ type: PRODUCT_LIST_HOME_SUCCESS, payload: {"productType1" : data.products, "productType2": data2.data.products} });



    } catch (error: any) {
        dispatch({
            type: PRODUCT_LIST_HOME_FAIL,
            payload: error.response.data.message ? error.response.data.message : error.message,
        })
    }
}