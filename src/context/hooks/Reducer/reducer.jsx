const Productreducer = (state, action) => {
    switch (action.type) {
        case "LOADING_TYPE":
            return {
                ...state,
                isLoading: true
            }
        case "SET_API_PRODUCTS":
            const featuredProducts = action.payload.filter(currEle => { return currEle.featured === true })
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload,
                featuredProducts: featuredProducts
            }
        case "ERROR_TYPE":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'SINGLE_LOADING_TYPE':
            return {
                ...state,
                isSingleLoading: true
            }
        case 'SINGLE_PRODUCT':
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload
            }
        case 'SINGLE_ERROR_TYPE':
            return {
                ...state,
                isSingleError: true
            }
        default:
            return state
    }
}
export default Productreducer
export const filterProductReducer = (state, action) => {
    switch (action.type) {
        case 'FILTER_TYPE':

            return {
                ...state,
                filterProduct: [...action.payload],
                allProduct: [...action.payload]
            }
        case 'GRID_VIEW_TYPE':
            return {
                ...state,
                grid_View: true
            }
        case 'List_VIEW_TYPE':
            return {
                ...state,
                grid_View: false
            }
        case 'SORT_TYPE':
            return {
                ...state,
                sort_value: action.payload
            }
        case 'SORT_VALUE_TYPE':
            let newSortData = [];
            let tempData = [...state.filterProduct]
            const sortDataFunc = (a, b) => {
                if (state.sort_value === 'a-z') {
                    return a.name.localeCompare(b.name)
                }
                if (state.sort_value === 'z-a') {
                    return b.name.localeCompare(a.name)
                }
                if (state.sort_value === 'lowest') {
                    return a.price - b.price
                }
                if (state.sort_value === 'highest') {
                    return b.price - a.price
                }
            }
            newSortData = tempData.sort(sortDataFunc)
            return {
                ...state,
                filterProduct: newSortData
            }
        case 'SEARCH_TYPE':
            let { name, value } = action.payload;
            return {
                ...state,
                search_filter: {
                    ...state.search_filter,
                    [name]: value
                }
            }
        case 'SEARCH_FILTER_VALUE':
            let tempSearchData = state.allProduct;
            if (state.search_filter.text)
                tempSearchData = tempSearchData.filter((curELe) => {
                    return curELe.name.toLowerCase().includes(state.search_filter.text.toLowerCase())
                })
            if (state.search_filter.category !== 'all') {
                tempSearchData = tempSearchData.filter((curELe) => {
                    return curELe['category'].includes(state.search_filter.category)
                })
            }
            if (state.search_filter.company !== "all") {
                tempSearchData = tempSearchData.filter(
                    (curElem) => { return curElem.company.toLowerCase().includes(state.search_filter.company.toLowerCase()) }
                );
            }
            if (state.search_filter.category === 'ALL' || state.search_filter.company === 'ALL') {
                tempSearchData = state.allProduct
            }
            return {
                ...state,
                filterProduct: tempSearchData
            }
        default:
            return state
    }

}