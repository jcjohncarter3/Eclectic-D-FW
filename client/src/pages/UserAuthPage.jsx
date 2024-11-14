import { useState } from "react";
import { ADD_USER, LOGIN_USER } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
function UserAuthPage() {
  const [usernameField, setUsernameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [addUser, { error }] = useMutation(ADD_USER);
  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [emailFieldLogin, setEmailFieldLogin] = useState("");
  const [passwordFieldLogin, setPasswordFieldLogin] = useState("");
  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.log("emailFieldLogin", emailFieldLogin);
    console.log("passwordFieldLogin", passwordFieldLogin);
    try {
      const newUser = await login({
        variables: {
          email: emailFieldLogin,
          password: passwordFieldLogin,
        },
      });
      console.log("new user", newUser);
      //   // setReviewList([...reviewList, newReview]);
      //   setReviewList((oldArray) => [newReview.data.addReview, ...oldArray]);
      //   setReviewText("");
      //   setReviewRating(1);
      navigate("/");
    } catch (error) {
      console.error("Error posting review", error);
    }
  };

  const handleSubmitSignOn = async (e) => {
    e.preventDefault();
    console.log("usernameField", usernameField);
    console.log("emailField", emailField);
    console.log("passwordField", passwordField);
    try {
      const newUser = await addUser({
        variables: {
          username: usernameField,
          email: emailField,
          password: passwordField,
        },
      });
      console.log("new user", newUser);
      //   // setReviewList([...reviewList, newReview]);
      //   setReviewList((oldArray) => [newReview.data.addReview, ...oldArray]);
      //   setReviewText("");
      //   setReviewRating(1);
      navigate("/");
    } catch (error) {
      console.error("Error posting review", error);
    }
  };

  return (
    <div>
      <h1></h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Login</h2>

          <form onSubmit={handleSubmitLogin} className="form login-form">
            <div className="form-group">
              <label htmlFor="email-login">email:</label>
              <input
                className="form-input"
                value={emailFieldLogin}
                onChange={(e) => setEmailFieldLogin(e.target.value)}
                type="text"
                id="email-login"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">password:</label>
              <input
                className="form-input"
                value={passwordFieldLogin}
                onChange={(e) => setPasswordFieldLogin(e.target.value)}
                type="password"
                id="password-login"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                login
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Signup</h2>

          <form onSubmit={handleSubmitSignOn} className="form signup-form">
            <div className="form-group">
              <label htmlFor="name-signup">username:</label>
              <input
                className="form-input"
                value={usernameField}
                onChange={(e) => setUsernameField(e.target.value)}
                type="text"
                id="name-signup"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-signup">email:</label>
              <input
                className="form-input"
                value={emailField}
                onChange={(e) => setEmailField(e.target.value)}
                type="email"
                id="email-signup"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-signup">password:</label>
              <input
                className="form-input"
                value={passwordField}
                onChange={(e) => setPasswordField(e.target.value)}
                type="password"
                id="password-signup"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                signup
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <script src="./js/login.js"></script> */}
    </div>
  );
}

export default UserAuthPage;
