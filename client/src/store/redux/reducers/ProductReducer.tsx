import { PRODUCT_LIST_FAIL, PRODUCT_LIST_HOME_FAIL, PRODUCT_LIST_HOME_REQUEST, PRODUCT_LIST_HOME_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductConstants";
import { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL } from "../constants/ProductConstants";

// product list reducer
export const productListReducer = (state = { products: [] }, action: any) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}

// Product Detail
export function productDetailReducer(state = { product: [] }, action: any) {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true };
        case PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}

/* product list home */
export const productListHomeReducer = (state = { products: {} }, action: any) => {
    switch (action.type) {
        case PRODUCT_LIST_HOME_REQUEST:
            return { loading: true, products: {} };
        case PRODUCT_LIST_HOME_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_HOME_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}