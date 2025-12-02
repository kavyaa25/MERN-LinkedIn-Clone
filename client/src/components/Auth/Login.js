import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/auth";
import { AuthContext } from "../../App";
import "./Auth.css";

function Login() {
  const nav = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw Error(data.message || "Login failed");
      setToken(data.token, data.user);
      setUser(data.user);
      nav("/");
    } catch (e) {
      setErr(e.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth-bg">
      <div className="auth-container">
        <div className="auth-logo">
          <span className="logo-icon">&#128188;</span>
          <span className="logo-text">LinkedMERN</span>
        </div>
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required autoComplete="username"/>
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required autoComplete="current-password"/>
          <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
          {err && <div className="error">{err}</div>}
        </form>
        <div className="switch-link" onClick={() => nav("/signup")}>
          New to LinkedMERN? <b>Join now</b>
        </div>
      </div>
    </div>
  );
}
export default Login;