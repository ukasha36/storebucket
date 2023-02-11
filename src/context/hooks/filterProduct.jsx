import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import { filterProductReducer } from "./Reducer/reducer";

const filter_Context = createContext();

const Filter_Product = ({ children }) => {
    const { products } = useProductContext();
    const initialState = {
        filterProduct: [],
        allProduct: [],
        grid_View: false,
        sort_value: 'highest'
    }
    const [state, dispatch] = useReducer(filterProductReducer, initialState);
    const setGridView = () => {
        dispatch({ type: 'GRID_VIEW_TYPE' })
    }
    const setListView = () => {
        dispatch({ type: 'List_VIEW_TYPE' })
    }
    const sorting = () => {
        dispatch({ type: 'SORT_TYPE' })
    }
    useEffect(() => {
        dispatch({ type: 'FILTER_TYPE', payload: products })
    }, [products]);
    return (
        <filter_Context.Provider value={{ ...state, setGridView, setListView, sorting }}>
            {children}
        </filter_Context.Provider>
    )
}
export default Filter_Product
export const useFilterContext = () => {
    return useContext(filter_Context)
}