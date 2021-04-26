import React, { useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { checkLogged } from "../actions/index";
import "react-toastify/dist/ReactToastify.css";
import "../css/login_signup.css";

function Login() {
  const history = useHistory();
  const dispatch1 = useDispatch();

  const initialState = {
    userName: "",
    password: ""
  };

  const formReducer = (state, { type, payload }) => {
    switch (type) {
      case "userName":
        return { ...state, userName: payload };
      case "password":
        return { ...state, password: payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = () => {
    const UserName = JSON.parse(localStorage.getItem(state.userName));

    if (UserName == null) {
      toast.dark("Enter valid username or password");
    } else if (state.userName === "" && state.password === "") {
      toast.dark("Please Enter All Fields");
    } else if (state.userName === "") {
      toast.dark("Email should not be empty");
    } else if (state.password === "") {
      toast.dark("Email should not be empty");
    } else {
      const Password = UserName.password;
      if (Password === state.password) {
        toast.dark("Login Successfully");
        dispatch1(checkLogged());
        setTimeout(() => {
          history.push("/app");
        }, 2000);
      } else {
        toast.dark("Your Password is wrong");
      }
    }
  };

  return (
    <React.Fragment>
      <div>
        <div className="form-modal">
          <div className="form-toggle">
            <Link to="/">
              <button id="login-toggle" style={{ backgroundColor: "#57b846" }}>
                log in
              </button>
            </Link>
            <Link to="/signup">
              <button id="signup-toggle">sign up</button>
            </Link>
          </div>

          <div id="login-form">
            <form>
              <input
                type="text"
                placeholder="Enter username"
                value={state.userName}
                onChange={(e) =>
                  dispatch({ type: "userName", payload: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Enter password"
                value={state.password}
                onChange={(e) =>
                  dispatch({ type: "password", payload: e.target.value })
                }
              />
              <button
                type="button"
                className="btn login"
                onClick={handleSubmit}
              >
                login
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover={false}
      />
    </React.Fragment>
  );
}

export default Login;
