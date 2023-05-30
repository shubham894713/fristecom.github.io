
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/useraction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const EmailChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  }
  const loginUser = (event) => {
    event.preventDefault();
    dispatch(login({ email,password}));
  };
  const navigate = useNavigate();
  const { login: loginSuccess, message } = useSelector((state) => state.user);

  useEffect(() => {
    if(loginSuccess){
      navigate('/');
    }
  },[navigate, loginSuccess,message]);
  return (
    <div className="login">
      <div>
        <h1>Login</h1>
        <h3>Please enter your credentials to move forward</h3>
        <form>
          <input
            placeholder="enter email"
            value={email}
            className="formInput"
            name="email"
            minlength="3"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <input
            placeholder="enter password"
            value={password}
            className="formInput"
            name="password"
            minlength="3"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit"> login</button>
        </form>
        <h1>
          <a href="/resetPassword">Forgot Password</a> || <a href="/register">Register new user</a>
        </h1>
      </div>
    </div>
  );
}

export default Login;
