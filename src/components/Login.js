import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(login({ name: "Vivek", age: 30, email: "vivek@email.com" }))
        }
      >
        Login
      </button>
      &nbsp;&nbsp;
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Login;
