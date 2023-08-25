import { useDispatch } from "react-redux";
import "./Styles/Cart.css";
import { cartActions } from "./../store/cart-slice";
import { cartItem } from "./../store/cart-slice";

const CartItem = (props:cartItem) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(props.product.id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addToCart(props.product)
    );
  };
  return (
    <div className="cartItem">
      <h2> {props.product.name}</h2>
      <p>${props.product.price} /-</p>
      <p>x{props.quantity}</p>
      <article>Total ${props.totalPrice}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;