import "./Styles/Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
export type productProps = {
    name: string,
    price: number,
    id: number,
    imgURL: string
}
const Product = (props:productProps) => {
  const dispatch = useDispatch()
  const addTocart = () =>{
    dispatch(cartActions.addToCart(props))
  }
  return (
    <div className="card">
      <img src={props.imgURL} alt={props.name} />
      <h2>{props.name}</h2>
      <p>$ {props.price}</p>
      <button onClick={addTocart}>Add to cart</button>
    </div>
  );
};

export default Product;