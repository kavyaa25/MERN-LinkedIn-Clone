import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/auth";
import { AuthContext } from "../../App";
import "./Auth.css";

function Signup() {
  const nav = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw Error(data.message || "Signup failed");
      // After signup, log in
      const loginRes = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password })
      });
      const loginData = await loginRes.json();
      if (!loginRes.ok) throw Error(loginData.message || "Login failed");
      setToken(loginData.token, loginData.user);
      setUser(loginData.user);
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
        <h2>Sign Up</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Full Name" onChange={handleChange} required autoComplete="name"/>
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required autoComplete="username"/>
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required minLength={6} autoComplete="new-password"/>
          <button type="submit" disabled={loading}>{loading ? "Signing up..." : "Signup"}</button>
          {err && <div className="error">{err}</div>}
        </form>
        <div className="switch-link" onClick={() => nav("/login")}>
          Already on LinkedMERN? <b>Sign in</b>
        </div>
      </div>
    </div>
  );
}
export default Signup;