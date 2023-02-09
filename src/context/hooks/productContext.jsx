import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import Context from "../Context";
import reducer from "./Reducer/reducer";

const AppProvider = ({ children }) => {
    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featuredProducts: [],
        isSingleLoading: false,
        isSingleError: false,
        singleProduct: {}
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const api = "https://api.pujakaitem.com/api/products";
    const getProduct = async (url) => {
        dispatch({ type: 'LOADING_TYPE' })
        try {
            let res = await axios.get(url)
            let data = await res.data;
            console.log(data)
            dispatch({ type: 'SET_API_PRODUCTS', payload: data })
        }
        catch (error) {
            dispatch({ type: 'ERROR_TYPE' })

        }
    }
    const singleProduct = async (url) => {
        dispatch({ type: 'SINGLE_LOADING_TYPE' })
        try {
            let res = await axios.get(url)
            let data = await res.data;
            dispatch({ type: 'SINGLE_PRODUCT', payload: data });
        } catch (error) {
            dispatch({ type: 'SINGLE_ERROR_TYPE', payload: data });
        }
    }
    useEffect(() => {
        getProduct(api)
    }, [])
    return (
        <Context.Provider value={{ ...state, singleProduct }}>
            {children}
        </Context.Provider>
    )
}
export const useProductContext = () => {
    return useContext(Context)
}
export default AppProvider



