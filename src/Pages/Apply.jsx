import React, { useState } from "react";
import Loader from "../components/Loader"; // Optional
import { MdCheckCircle } from "react-icons/md";  // icon import

const Apply = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    documents: null,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false); // Hover state for button

  const courses = [
    "Computer Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Electronics",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "documents") {
      const file = files[0];
      if (file && file.size > 5 * 1024 * 1024) {
        setStatus("❌ File size should be less than 5MB.");
        return;
      }
      setForm((prev) => ({ ...prev, documents: file }));
      setStatus(""); // clear status on new file select
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.course) {
      setStatus("❌ Please fill all required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    setTimeout(() => {
      setLoading(false);
      setStatus("✅ Application submitted successfully!");
      setForm({
        name: "",
        email: "",
        course: "",
        documents: null,
      });
    }, 2000);
  };

  if (loading) return <Loader />;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📄 Online Admission Form</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>👤 Full Name *</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="Enter your full name"
        />

        <label style={styles.label}>📧 Email Address *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="example@email.com"
        />

        <label style={styles.label}>🎓 Select Course *</label>
        <select
          name="course"
          value={form.course}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">-- Select a course --</option>
          {courses.map((course, idx) => (
            <option key={idx} value={course}>
              {course}
            </option>
          ))}
        </select>

        {/* Label with green circle icon */}
        <label
          style={{
            ...styles.label,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <MdCheckCircle size={24} color="#28a745" />
           Upload Document (PDF, max 5MB)
        </label>
        <input
          type="file"
          name="documents"
          accept=".pdf"
          onChange={handleChange}
          style={styles.file}
        />
        {form.documents && (
          <p style={{ ...styles.fileName, color: "#28a745", display: "flex", alignItems: "center", gap: "6px" }}>
            <MdCheckCircle />
            Selected File: <strong>{form.documents.name}</strong>
          </p>
        )}

        <button
          type="submit"
          style={{
            ...styles.button,
            border: hovered ? "2px solid #21867a" : "2px solid transparent",
            backgroundColor: hovered ? "#21867a" : "#2a9d8f",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          🚀 Submit Application
        </button>
      </form>

      {status && (
        <div
          style={{
            ...styles.status,
            backgroundColor: status.includes("✅") ? "#d1fae5" : "#fee2e2",
            color: status.includes("✅") ? "#065f46" : "#991b1b",
          }}
        >
          {status}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "60px auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#2a9d8f",
    marginBottom: "30px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",      
  borderRadius: "10px",           
  padding: "20px",               
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",  

  },
  label: {
    fontWeight: 600,
    color: "#333",
    marginBottom: "8px",
  },
  input: {
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    transition: "0.2s",
  },
  file: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    transition: "0.2s",
    marginBottom: "5px",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  fileName: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
    fontStyle: "italic",
  },
  button: {
    padding: "12px",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s ease",
  },
  status: {
    marginTop: "20px",
    padding: "12px",
    borderRadius: "6px",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default Apply;
