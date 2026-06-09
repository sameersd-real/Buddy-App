import "./Loginform.css";

function Loginform() {
  return (
    <div className="login-container">
      <h2>Login:</h2>
      <label >Email</label>
      <input type="email" placeholder="Email" />
      <label >Password</label>
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

export default Loginform;