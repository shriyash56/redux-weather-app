import React, { useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/login_signup.css";

function Signup() {
  const history = useHistory();

  const initialState = {
    email: "",
    userName: "",
    password: ""
  };

  const formReducer = (state, { type, payload }) => {
    switch (type) {
      case "email":
        return { ...state, email: payload };
      case "userName":
        return { ...state, userName: payload };
      case "password":
        return { ...state, password: payload };
      case "clear_form":
        return {};
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = () => {
    if (state.email === "" && state.userName === "" && state.password === "") {
      toast.dark("Please Enter All Fields");
    } else if (state.email === "") {
      toast.dark("Email should not be empty");
    } else if (state.userName === "") {
      toast.dark("Username should not be empty");
    } else if (state.password === "") {
      toast.dark("password should not be empty");
    } else if (state.password === state.userName) {
      toast.dark("Password and Username should not be same");
    } else {
      toast.dark("Successfully submitted");
      localStorage.setItem(state.userName, JSON.stringify(state));
      dispatch({ type: "clear_form", payload: {} });
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  };

  return (
    <React.Fragment>
      <div className="form-modal">
        <div className="form-toggle">
          <Link to="/">
            <button id="login-toggle">log in</button>
          </Link>
          <Link to="/signup">
            <button id="signup-toggle" style={{ backgroundColor: "#57b846" }}>
              sign up
            </button>
          </Link>
        </div>
        <div id="signup-form">
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Choose username"
              value={state.userName}
              onChange={(e) =>
                dispatch({ type: "userName", payload: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Create password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "password", payload: e.target.value })
              }
            />
            <button type="button" class="btn signup" onClick={handleSubmit}>
              create account
            </button>
          </form>
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

export default Signup;
