import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', sans-serif;
          background-color: #f7f9fc;
        }
        .navbar {
          background-color: #2c3e50;
          padding: 20px 40px;
          color: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar nav a {
          color: black;
          margin: 0 10px;
          text-decoration: none;
        }
        .navbar nav a:hover {
          text-decoration: underline;
        }
        .hero {
          padding: 100px 20px;
          text-align: center;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: white;
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .hero p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }
        .apply-btn {
          background-color: #ffffff;
          color: #2575fc;
          border: none;
          padding: 12px 25px;
          font-size: 1rem;
          border-radius: 25px;
          cursor: pointer;
          transition: 0.3s;
        }
        .apply-btn:hover {
          background-color: #f0f0f0;
        }
        .features {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 60px 20px;
          background-color: #f7f7f7;
        }
        .feature {
          background-color: white;
          width: 250px;
          padding: 25px;
          margin: 15px;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: 0.3s;
          text-align: center;
        }
        .feature:hover {
          transform: translateY(-5px);
        }
        .footer {
          background-color: #2c3e50;
          color: white;
          text-align: center;
          padding: 20px;
        }
        `}
      </style>

      <div className="home-wrapper">
        <header className="navbar">
          <h2>Online Admission </h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/apply">Apply</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <section className="hero">
          <h1>Welcome to Our Admission Portal</h1>
          <p>Apply for your desired course from the comfort of your home.</p>
          <Link to="/apply">
            <button className="apply-btn">Apply Now</button>
          </Link>
        </section>

        <section className="features">
          <div className="feature">
            <h3>📝 Online Form</h3>
            <p>Fill and submit your admission form completely online.</p>
          </div>
          <div className="feature">
            <h3>📄 Document Upload</h3>
            <p>Upload all required documents securely with your application.</p>
          </div>
          <div className="feature">
            <h3>📢 Notification</h3>
            <p>Stay updated with email or SMS notifications.</p>
          </div>
        </section>

        <footer className="footer">
          <p>2025 Rapti Engineering College | Developed by Idiot Group
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
