import React from "react";
import "./Styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { cartActions } from "../store/cart-slice";
const Cart = () => {
  
  const itemList = useSelector((state:RootState)=>state.cart.itemsList)
  const quantity = itemList.length;
  const dispatch = useDispatch();
  const showCart = () =>{
    dispatch(cartActions.setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Item{quantity <= 1 ? '' : 's'}</h3>
    </div>
  );
};

export default Cart;