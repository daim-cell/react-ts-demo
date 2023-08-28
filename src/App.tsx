import './App.css';
import Auth from './Components/Auth';
import Layout from './Components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { useEffect } from 'react';
import supabase from './client';
import { UIActions, notType } from './store/ui-slice';
import Notification from './Components/Notification';
import { CartState } from './store/cart-slice';
// import { useEffect } from 'react';

let firstRender:boolean = true;

function App() {
  const dispatch = useDispatch()
  const notification:notType|null = useSelector((state:RootState) => state.ui.notification)
  const isLoggedIn:boolean=useSelector((state:RootState)=>state.auth.isLoggedIn)
  const cart:CartState = useSelector((state:RootState )=>state.cart)
  useEffect(() => {
    const fetchCart = async()=>{
        if (firstRender) {
          firstRender =false;
          return;
        }
        dispatch(UIActions.showNot({
          open:true,
          message: 'Sending request',
          type:'warning'
        }))
        const { error } = await supabase
        .from('cart')
        .upsert([cart],{onConflict:'UUID'})
        .eq('UUID',cart.UUID )
        dispatch(UIActions.showNot({
          open:true,
          message: 'Sending request',
          type:'success'
        }))
        if (error) {
          console.error('Error inserting cart:', error.message);
          dispatch(UIActions.showNot({
            open:true,
            message: 'Sending request failed',
            type:'error'
          }))
        }
      
    }
    if (isLoggedIn)fetchCart();
}, [cart,isLoggedIn]);
  return (
    <div className="App">
      {notification !== null && (
        <Notification
          type={notification.type}
          message={notification.message}
          open={notification.open}
        />
      )}
  {!isLoggedIn && <Auth /> }
      {isLoggedIn && <Layout />}
     
     
    </div>
  );
}

export default App;
