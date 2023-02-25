import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "./Reducer/reducer";
const Context = createContext();

const cartContext = ({ children }) => {
    const getLocalfunct = () => {
        const localCartValue = localStorage.getItem('CartItem')
        // console.log(localCartValue);
        if (Array.isArray(localCartValue)) {
            return []
        } else {
            return JSON.parse(localCartValue)
        }
    }
    const initialState = {
        cart: Array.isArray ? (getLocalfunct()) : [],
        total_price: 0,
        shipping_fee: 50000
    }
    const [state, dispatch] = useReducer(cartReducer, initialState)
    const addToCart = (id, product, color, price, amount, stock) => {
        dispatch({ type: 'CART_TYPE', payload: { id, product, color, price, amount, stock } })

    }
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
        // console.log(id)
    }
    // For increment and decrement
    const setDecrease = (id) => {
        dispatch({ type: 'SET_DECREMENT', payload: id })
    }
    const setIncrease = (id) => {
        dispatch({ type: 'SET_INCREMENT', payload: id })
    }
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    useEffect(() => {
        localStorage.setItem('CartItem', JSON.stringify(state.cart))
        // console.log(state.cart)
        dispatch({ type: 'CART_TOTAL_ITEM' })
    }, [state.cart]);
    return (
        <Context.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
            {children}
        </Context.Provider>
    )
}
export const useCartContext = () => {
    return useContext(Context);
}
export default cartContext
