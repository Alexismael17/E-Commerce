import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { DataContext } from "../Context/Context";

export class Login extends Component {
  static contextType = DataContext;
  state = {
    email: "",
    password: "",
  };

  render() {
    const { userInLogin, login, user, userLogOut, admin } = this.context;

    const submitHandler = (e) => {
      e.preventDefault();
    };

    return (
      <div
        className="modal-fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <div className="modal-header"> */}
              <div>
                {!login ? (
                  <section className="login-modal">
                    <h2 className="modal-title" id="exampleModalLabel">Login</h2>
                    <br />

                    <form onSubmit={submitHandler}>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>

                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Email"
                          onChange={(event) =>
                            this.setState({ email: event.target.value })
                          }
                        ></input>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                        </label>

                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(event) =>
                          this.setState({ password: event.target.value })
                        }
                      ></input>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn btn-outline-primary w-100 mt-3"
                        id="log-btn"
                        onClick={() =>
                          userInLogin(this.state.email, this.state.password)
                        }
                      >
                        Log in
                      </button>
                    </form>
                    <hr></hr>
                    <div className="register-now">
                      <p>Don't you have an account?</p>
                      <NavLink to="/register" className="btn btn-outline-dark">
                        Register here!
                      </NavLink>
                    </div>
                  </section>
                ) : (
                  <section className="login-section">
                    <h2>Welcome, {user.username}!</h2>
                    <h3>How are you? :)</h3>
                    <div className="final-buttons">
                      <button
                        type="submit"
                        className="btn btn-outline-primary"
                        onClick={() => userLogOut()}
                      >
                        Log out
                      </button>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
    //   </div>
    );
  }
}


export default Login;
