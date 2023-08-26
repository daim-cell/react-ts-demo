import Product from "./Product";
import supabase from "../client";
import { useState,useEffect } from 'react';
import { productProps } from "./Product";

// const DUMMY_PRODUCTS = [
//   {
//     id: 1,
//     name: "MacBook",
//     imgURL:
//       "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 25,
//   },
//   {
//     id: 2,
//     name: "Lenovo Yoga",
//     imgURL:
//       "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 25,
//   },
//   {
//     id: 3,
//     name: "Dell lattitude",
//     imgURL:
//       "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 25,
//   },
//   {
//     id: 4,
//     name: "HP Pavillion",
//     imgURL:
//       "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 25,
//   },
//   {
//     id: 5,
//     name: "Acer Aspire",
//     imgURL:
//       "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 25,
//   },
// ];


const Products = () => {
  const [products, setProducts] = useState<productProps[]>([]);
  useEffect(() => {
    const fetchprod = async()=>{
    
    let { data, error } = await supabase
    .from('product')
    .select()
    if (error) {
      console.error('Error fetching products:', error.message);
    }
    else{
      setProducts(data as productProps[])
    }
  }
  fetchprod();
}, []);
  return (
    <div>
      <ul className="products-container">
        {/* {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))} */}
        {products.map((product, __) => (
          <li key={product.id}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;