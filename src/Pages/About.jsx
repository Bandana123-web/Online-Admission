import React, { useEffect, useState } from 'react';
import './About.css'; // ✅ Import CSS file

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const data = {
      objective: "The Online Admission System simplifies and automates the admission process for educational institutions, making it efficient, transparent, and paperless.",
      forStudents: [
        "Fill application forms online",
        "Upload required documents",
        "Track application status",
        "Receive notifications"
      ],
      forAdmins: [
        "Manage applications",
        "Download reports",
        "Reduce paperwork and errors"
      ],
      features: [
        "User registration/login",
        "Course selection",
        "Document uploads",
        "Admin dashboard"
      ],
      vision: "To digitize the admission process and make it smarter, faster, and accessible to all."
    };
    setAboutData(data);
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  return (
    <div className="about-container">
      <h1>About Online Admission System</h1>

      <section>
        <h2>🎯 Objective</h2>
        <p>{aboutData.objective}</p>
      </section>

      <section>
        <h2>👩‍🎓 For Students</h2>
        <ul>
          {aboutData.forStudents.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>🧑‍💼 For Administrators</h2>
        <ul>
          {aboutData.forAdmins.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>✅ Key Features</h2>
        <ul>
          {aboutData.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>🌐 Vision</h2>
        <p>{aboutData.vision}</p>
      </section>
    </div>
  );
};

export default About;
