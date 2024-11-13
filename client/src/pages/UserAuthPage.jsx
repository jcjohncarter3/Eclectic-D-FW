function UserAuthPage() {
  return (
    <div>
      <h1></h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Login</h2>

          <form className="form login-form">
            <div className="form-group">
              <label htmlFor="email-login">email:</label>
              <input className="form-input" type="text" id="email-login" />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">password:</label>
              <input
                className="form-input"
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

          <form className="form signup-form">
            <div className="form-group">
              <label htmlFor="name-signup">name:</label>
              <input className="form-input" type="text" id="name-signup" />
            </div>
            <div className="form-group">
              <label htmlFor="email-signup">email:</label>
              <input className="form-input" type="text" id="email-signup" />
            </div>
            <div className="form-group">
              <label htmlFor="password-signup">password:</label>
              <input
                className="form-input"
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

      <script src="./js/login.js"></script>
    </div>
  );
}

export default UserAuthPage;
