import { useState } from "react";
import { ADD_USER, LOGIN_USER } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
function UserAuthPage() {
  const [usernameField, setUsernameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [addUser, { error }] = useMutation(ADD_USER);
  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [emailFieldLogin, setEmailFieldLogin] = useState("");
  const [passwordFieldLogin, setPasswordFieldLogin] = useState("");
  const [errorMessageSignOn, seterrorMessageSignOn] = useState("");
  const [errorMessageLogin, seterrorMessageLogin] = useState("");

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: {
          email: emailFieldLogin,
          password: passwordFieldLogin,
        },
      });

      const { token } = data.login;
      Auth.login(token);
    } catch (error) {
      // console.error("Error posting review", error);
      seterrorMessageLogin("Invalid Email or Password.");
    }
  };

  const handleSubmitSignOn = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: {
          username: usernameField,
          email: emailField,
          password: passwordField,
        },
      });
      const { token } = data.addUser;
      Auth.login(token);
    } catch (error) {
      // console.error("Error posting review", error);
      seterrorMessageSignOn("Fill out the form property to sign up.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2>Login</h2>

          {Boolean(errorMessageLogin) && (
            <div className="alert alert-danger fade show" role="alert">
              <span>{errorMessageLogin}</span>
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => seterrorMessageLogin("")}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          <form onSubmit={handleSubmitLogin}>
            <div className="form-group mb-2">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={emailFieldLogin}
                onChange={(e) => setEmailFieldLogin(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={passwordFieldLogin}
                onChange={(e) => setPasswordFieldLogin(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Signup</h2>

          {Boolean(errorMessageSignOn) && (
            <div className="alert alert-danger fade show" role="alert">
              {errorMessageSignOn}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => seterrorMessageSignOn("")}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          <form onSubmit={handleSubmitSignOn}>
            <div className="form-group">
              <label htmlFor="name-signup">username:</label>
              <input
                className="form-control"
                value={usernameField}
                onChange={(e) => setUsernameField(e.target.value)}
                type="text"
                id="name-signup"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="email-signup">email:</label>
              <input
                className="form-control"
                value={emailField}
                onChange={(e) => setEmailField(e.target.value)}
                type="email"
                id="email-signup"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password-signup">password:</label>
              <input
                className="form-control"
                value={passwordField}
                onChange={(e) => setPasswordField(e.target.value)}
                type="password"
                id="password-signup"
              />
            </div>
            <div className="form-group mb-2">
              <button className="btn btn-primary" type="submit">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserAuthPage;
