import './App.css';
import Auth from './Components/Auth';
import Layout from './Components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useEffect } from 'react';
import supabase from './client';
// import { useEffect } from 'react';


function App() {
  const isLoggedIn:boolean=useSelector((state:RootState)=>state.auth.isLoggedIn)
  const cart = useSelector((state:RootState )=>state.cart)
  console.log(cart.UUID)
    
  useEffect(() => {
    const fetchCart = async()=>{
        const {error } = await supabase
        .from('cart')
        .upsert([cart],{onConflict:'UUID'})
        .eq('UUID',cart.UUID )
    
        if (error) {
          console.error('Error inserting cart:', error.message);
        }
      
      
    }
  fetchCart();
}, [cart]);
  return (
    <div className="App">
      {/* {!isLoggedIn && <Auth /> } */}
      { <Layout />}
     
     
    </div>
  );
}

export default App;
