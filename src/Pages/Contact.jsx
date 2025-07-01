import React, { useState } from "react";
import "./Contact.css"; // ✅ Import CSS

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }

    setStatus("Sending...");

    setTimeout(() => {
      setStatus("Thank you for contacting us!");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="contact-status">{status}</p>}
    </div>
  );
};

export default Contact;
