import './App.css';
import Auth from './Components/Auth';
import Layout from './Components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const isLoggedIn:boolean=useSelector((state:RootState)=>state.auth.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <div className="App">
      {!isLoggedIn && <Auth /> }
      {isLoggedIn && <Layout />}
     
     
    </div>
  );
}

export default App;
