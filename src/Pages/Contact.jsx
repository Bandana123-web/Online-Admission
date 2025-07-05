import React, { useState } from "react";
import { FaEnvelope, FaUserAlt, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("❌ Please fill all fields.");
      return;
    }

    setStatus("📨 Sending...");

    setTimeout(() => {
      setStatus("✅ Thank you for contacting us!");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <style>
        {`
        .contact-container {
          max-width: 620px;
          width: 90%;
          margin: 50px auto;
          padding: 30px;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .contact-container h1 {
          text-align: center;
          font-size: 28px;
          background: linear-gradient(to right, #2a9d8f, #0a9396);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 25px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
        }

        .contact-form label {
          font-weight: 600;
          color: #444;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          margin-bottom: 20px;
          font-size: 16px;
          transition: 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #2a9d8f;
          outline: none;
          box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.2);
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 100px;
        }

        .contact-form button {
          padding: 12px;
          background: linear-gradient(to right, #2a9d8f, #38b2ac);
          color: white;
          font-weight: bold;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .contact-form button:hover {
          background: linear-gradient(to right, #21867a, #2a9d8f);
        }

        .contact-status {
          margin-top: 15px;
          text-align: center;
          font-weight: 600;
          color: #264653;
        }

        @media (max-width: 600px) {
          .contact-container {
            padding: 20px;
          }

          .contact-container h1 {
            font-size: 22px;
          }

          .contact-form input,
          .contact-form textarea,
          .contact-form button {
            font-size: 14px;
          }
        }
      `}
      </style>

      <div className="contact-container">
        <h1>Contact Us</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <FaUserAlt size={14} /> Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />

          <label>
            <FaEnvelope size={14} /> Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />

          <label>
            <FaCommentDots size={14} /> Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          />

          <button type="submit">Send Message</button>
        </form>

        {status && <p className="contact-status">{status}</p>}
      </div>
    </>
  );
};

export default Contact;
