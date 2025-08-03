import { Fragment } from "react";
import { formatMoney } from '../../utils/money'
import { useState } from 'react'
import axios from 'axios'

export function CartItemDetails({ cartItem, loadCart }) {
    const [updateQuantity, setUpdateQuantity] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const updateCartItem = async () => {
        if (updateQuantity) {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity)
            });
            await loadCart();

            setUpdateQuantity(false);
        } else {
            setUpdateQuantity(true);
        }
    }

    const updateQuantityInput = async (event) => {
        setQuantity(event.target.value);
    }

    const handleQuantityKeyDown = async (event) => {
        if (event.key === 'Enter') {
            await updateCartItem();
        }
        else if (event.key === 'Escape') {
            setQuantity(cartItem.quantity);
            setUpdateQuantity(false);
        }
    }

    return (
        <Fragment>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: {updateQuantity
                            ? <input type="text" className="quantity-textbox" value={quantity} onChange={updateQuantityInput} onKeyDown={handleQuantityKeyDown} />
                            : <span className="quantity-label">{cartItem.quantity}</span>
                        }
                    </span>
                    <span className="update-quantity-link link-primary"
                        onClick={updateCartItem}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </Fragment>
    );
}