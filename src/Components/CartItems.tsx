import React from "react";
import CartItem from "./CartItem";
import "./Styles/Cart.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { cartItem } from "../store/cart-slice";
const CartItems = () => {
    const cartItems:cartItem[] = useSelector((state:RootState)=>state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        
          {
            cartItems.map((item)=>(
                <li key = {item.product.id}>
                <CartItem 
                product = {item.product}
                totalPrice={item.totalPrice}
                quantity={item.quantity}
                />
                </li>
            ))
          }
        
      </ul>
    </div>
  );
};

export default CartItems;