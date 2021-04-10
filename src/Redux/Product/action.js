import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS} from "./actionType"

export const getProductRequest = () => {
    return {
        type: GET_PRODUCT_REQUEST
    }
}

export const getProductSuccess = (payload) => {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload
    }
}

export const getProductFailure = (payload) => {
    return {
        type: GET_PRODUCT_FAILURE,
        payload
    }
}

export const getProduct = (products) => (dispatch) => {
    dispatch(getProductRequest())
    axios({
        method: "get",
        url: `http://localhost:3006/${products}`
    })
    .then((res) => {
        dispatch(getProductSuccess(res.data))
    })
    .catch((err) => {
        dispatch(getProductFailure(err))
    })

}