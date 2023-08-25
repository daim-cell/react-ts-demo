
import { useDispatch } from "react-redux";
import "./Styles/Auth.css";
import { authAction } from "../store/auth-slice";

const Auth = () => {
  const dispatch =useDispatch();
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form = e.currentTarget;
    const idInput = form.querySelector('input[name="id"]') as HTMLInputElement;
    const passInput = form.querySelector('input[name="password"]') as HTMLInputElement;

    const idValue = idInput.value;
    const passValue = passInput.value;

    if(idValue === 'daim' && passValue ==='1234'){
      dispatch(authAction.login());
    }
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;