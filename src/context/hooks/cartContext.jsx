import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer/reducer";
const Context = createContext();

const cartContext = ({ children }) => {
    const initialState = {
        cartItem: []
    }
    const [state, dispatch] = useReducer(cartReducer, initialState)
    const addToCart = (id, product, color, price, amount, stock) => {
        // console.log(product);
        dispatch({ type: 'CART_TYPE', payload: { id, product, color, price, amount, stock} })
    }
    return (
        <Context.Provider value={{ ...state, addToCart }}>
            {children}
        </Context.Provider>
    )
}
export const useCartContext = () => {
    return useContext(Context);
}
export default cartContext
