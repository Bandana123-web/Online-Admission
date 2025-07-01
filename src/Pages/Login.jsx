import React, { useState } from "react";
import "./Login.css"; // CSS file import

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setStatus("Please fill all fields.");
      return;
    }

    // Simulate login
    setStatus("Logging in...");
    setTimeout(() => {
      setStatus("Login successful ✅");
      setForm({ email: "", password: "" });
    }, 1500);
  };

  return (
    <div className="login-container">
      <h2>Login to Online Admission System</h2>

      <form onSubmit={handleSubmit}>
        <label>Email Address *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Password *</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      {status && <p className="login-status">{status}</p>}
    </div>
  );
};

export default Login;
