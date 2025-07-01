import React, { useState } from "react";
import Loader from "../components/Loader";
import "./Apply.css"; // ✅ Import CSS file

const Apply = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    documents: null,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const courses = [
    "Computer Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Electronics",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documents") {
      setForm((prev) => ({ ...prev, documents: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) {
      setStatus("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    setTimeout(() => {
      setLoading(false);
      setStatus("Application submitted successfully!");
      setForm({
        name: "",
        email: "",
        course: "",
        documents: null,
      });
    }, 2000);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="form-container">
      <h1>Apply for Admission</h1>

      <form onSubmit={handleSubmit}>
        <label>Full Name *</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email Address *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Select Course *</label>
        <select
          name="course"
          value={form.course}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          {courses.map((course, idx) => (
            <option key={idx} value={course}>
              {course}
            </option>
          ))}
        </select>

        <label>Upload Documents (PDF, max 5MB)</label>
        <input
          type="file"
          name="documents"
          onChange={handleChange}
          accept=".pdf"
        />

        <button type="submit">Submit Application</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default Apply;
