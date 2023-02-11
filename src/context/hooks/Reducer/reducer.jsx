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
        default:
            return state
    }

}