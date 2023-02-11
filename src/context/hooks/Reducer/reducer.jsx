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
                filterProduct: action.payload,
                allProduct: action.payload
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
        default:
            return state
    }

}