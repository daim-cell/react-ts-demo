import './App.css';
import Auth from './Components/Auth';
import Layout from './Components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useEffect } from 'react';
import { notType } from './store/ui-slice';
import Notification from './Components/Notification';
import { CartState } from './store/cart-slice';
import { fetchCart, sendCart } from './store/cart-actions';
// import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch<AppDispatch>()
  const notification:notType|null = useSelector((state:RootState) => state.ui.notification)
  const isLoggedIn:boolean=useSelector((state:RootState)=>state.auth.isLoggedIn)
  const cart:CartState = useSelector((state:RootState )=>state.cart)

  useEffect(()=>{
    dispatch(fetchCart())
  }, [dispatch])
  useEffect(() => { 
    if (isLoggedIn)dispatch(sendCart(cart));
}, [cart,isLoggedIn,dispatch]);
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
