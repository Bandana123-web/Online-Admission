import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email === "admin@example.com" && form.password === "admin123") {
      setStatus("✅ Login Successful!");
      alert("Welcome, Admin!");
    } else {
      setStatus("❌ Invalid email or password");
    }
  };

  return (
    <>
      <style>
        {`
          .form-container {
            max-width: 400px;
            width: 90%;
            margin: 60px auto;
            padding: 30px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            box-sizing: border-box;
          }

          .form-container h1 {
            text-align: center;
            color: #2a9d8f;
            margin-bottom: 25px;
            font-size: 24px;
          }

          .form-container form {
            display: flex;
            flex-direction: column;
          }

          .form-container label {
            margin-bottom: 6px;
            font-weight: 600;
            color: #333;
          }

          .form-container input {
            padding: 10px;
            margin-bottom: 18px;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 16px;
            width: 100%;
            box-sizing: border-box;
            outline: none;
            transition: border-color 0.3s, box-shadow 0.3s;
          }

          .form-container input:focus {
            border-color: #2a9d8f;
            box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.2);
          }

          /* New container for forgot + button aligned side by side */
          .form-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
          }

          .form-container .forgot a {
            text-decoration: none;
            font-size: 14px;
            color: #2a9d8f;
            
          }

          .form-container .forgot a:hover {
            text-decoration: underline;
          }

          .form-container button {
            padding: 12px 30px;
            background-color: blue;
            color: white;
            font-weight: bold;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            /* width: 100%;  -> remove width so it adjusts with content */
          }

          .form-container p {
            margin-top: 15px;
            font-weight: 600;
            color: #264653;
            text-align: center;
          }

          @media (max-width: 600px) {
            .form-container {
              padding: 20px;
            }

            .form-container h1 {
              font-size: 20px;
            }

            .form-container input,
            .form-container button {
              font-size: 14px;
              padding: 10px;
            }

            /* On small screens, stack them vertically */
            .form-actions {
              flex-direction: column;
              gap: 10px;
            }

            .form-container button {
              width: 100%;
              padding: 12px;
            }

            .form-container .forgot a {
              text-align: center;
              display: block;
            }
          }
        `}
      </style>

      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="admin@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="admin123"
            value={form.password}
            onChange={handleChange}
            required
          />

          {/* New div for side-by-side layout */}
          <div className="form-actions">
            <div className="forgot">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>
          </div>

          {status && <p>{status}</p>}
        </form>
      </div>
    </>
  );
};

export default Login;
