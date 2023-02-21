import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import { filterProductReducer } from "./Reducer/reducer";

const filter_Context = createContext();

const Filter_Product = ({ children }) => {
    const { products } = useProductContext();
    const initialState = {
        filterProduct: [],
        allProduct: [],
        grid_View: true,
        sort_value: '',
        search_filter: {
            text: '',
            category: 'all',
            company: 'all',
            color: 'all',
            price: 0,
            minPrice: 0,
            maxPrice: 0
        }
    }
    const [state, dispatch] = useReducer(filterProductReducer, initialState);
    const setGridView = () => {
        dispatch({ type: 'GRID_VIEW_TYPE' })
    }
    const setListView = () => {
        dispatch({ type: 'List_VIEW_TYPE' })
    }
    const sorting = (e) => {
        dispatch({ type: 'SORT_TYPE', payload: e.target.value })
    }
    const setSearchField = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        dispatch({ type: 'SEARCH_TYPE', payload: { name, value } })
    }
    const clearFilter = () => {
        dispatch({ type: 'CLEAR_FILTER' })
    }
    useEffect(() => {
        dispatch({ type: 'SEARCH_FILTER_VALUE' })
        // console.log(state.search_filter.company);
    }, [state.search_filter]);

    useEffect(() => {
        dispatch({ type: 'SORT_VALUE_TYPE' })
    }, [state.sort_value]);
    useEffect(() => {
        dispatch({ type: 'FILTER_TYPE', payload: products })
    }, [products]);
    return (
        <filter_Context.Provider value={{ ...state, setGridView, setListView, sorting, setSearchField, clearFilter }}>
            {children}
        </filter_Context.Provider>
    )
}
export default Filter_Product
export const useFilterContext = () => {
    return useContext(filter_Context)
}