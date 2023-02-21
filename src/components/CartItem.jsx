import React from "react";
import ProductPrice from '../Helper/ProductPrice'
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/hooks/cartContext";


const CartItem = ({ id, name, image, color, price, amount }) => {
    const { removeItem, setDecrease, setIncrease } = useCartContext();

    return (
        <>
            <div className="cart_heading grid grid-five-column">
                <div className="cart-image--name">
                    <div>
                        <figure>
                            <img src={image} alt={id} />
                        </figure>
                    </div>
                    <div>
                        <p>{name}</p>
                        <div className="color-div">
                            <p>color:</p>
                            <div
                                className="color-style"
                                style={{ backgroundColor: color, color: color }}></div>
                        </div>
                    </div>
                </div>
                {/* price   */}
                <div className="cart-hide">
                    <p>
                        <ProductPrice price={price} />
                    </p>
                </div>

                {/* Quantity  */}
                <CartAmountToggle
                    amount={amount}
                    setDecrease={() => { setDecrease(id) }}
                    setIncrease={() => { setIncrease(id) }}
                />

                {/* //Subtotal */}
                <div className="cart-hide">
                    <p>
                        <ProductPrice price={price * amount} />
                    </p>
                </div>

                <div>
                    <FaTrash className="remove_icon" style={{ fontSize: '1.5rem' }} onClick={() => removeItem(id)} />
                </div>
            </div>
            <hr />
        </>
    );
};

export default CartItem;