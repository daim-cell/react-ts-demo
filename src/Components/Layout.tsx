import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Styles/Layout.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartItems from "./CartItems";

const Layout = () => {
  let total:number = useSelector((state:RootState)=>state.cart.totalPrice)
  let showCart = useSelector((state:RootState)=>state.cart.showCart)
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
       

        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;