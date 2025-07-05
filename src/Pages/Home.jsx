import React from "react";
import { Link } from "react-router-dom";

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
          color: #333;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        .navbar {
          background-color: #2c3e50;
          padding: 20px 40px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .navbar nav a {
          color: white;
          margin: 0 12px;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .navbar nav a:hover {
          color: #57c7d4;
          text-decoration: underline;
        }

        /* Hero Section */
        .hero {
          padding: 100px 20px 80px;
          text-align: center;
          color: white;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)
          ), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: bgFadeIn 1.5s ease forwards;
        }
        @keyframes bgFadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        .hero h1, .hero p {
          opacity: 0;
          transform: translateY(20px);
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          animation-name: fadeSlideUp;
          animation-duration: 1s;
          animation-delay: 0.5s;
        }
        .hero p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          animation-name: fadeSlideUp;
          animation-duration: 1s;
          animation-delay: 1s;
        }
        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .apply-btn {
          background-color: #ffffff;
          color: #2575fc;
          border: none;
          padding: 12px 30px;
          font-size: 1rem;
          border-radius: 25px;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
          font-weight: bold;
          animation: fadeSlideUp 1s ease forwards;
          animation-delay: 1.5s;
          opacity: 0;
          transform: translateY(20px);
          box-shadow: 0 4px 12px rgba(37, 117, 252, 0.3);
        }
        .apply-btn:hover {
          background-color: #2575fc;
          color: white;
          box-shadow: 0 6px 16px rgba(37, 117, 252, 0.6);
        }

        /* Features Section */
        .features {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 60px 20px;
          background-color: #f7f7f7;
          gap: 25px;
        }
        .feature {
          background-color: white;
          width: 280px;
          padding: 30px 25px;
          margin: 0;
          border-radius: 15px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.07);
          transition: 0.3s ease;
          text-align: center;
          font-weight: 600;
          color: #2a9d8f;
          cursor: default;
        }
        .feature:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        }
        .feature h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
        }
        .feature p {
          font-weight: normal;
          color: #444;
          font-size: 1rem;
          line-height: 1.4;
        }

        /* Why Choose Us */
        .why-choose {
          padding: 70px 20px;
          background: white;
          text-align: center;
          max-width: 900px;
          margin: 0 auto 60px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.05);
        }
        .why-choose h2 {
          color: #2a9d8f;
          margin-bottom: 30px;
          font-size: 2.4rem;
          font-weight: 700;
        }
        .why-list {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 25px;
        }
        .why-item {
          flex: 1 1 250px;
          background: #e6f3f1;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(42, 157, 143, 0.15);
          font-weight: 600;
          color: #064c44;
          transition: background 0.3s ease;
          cursor: default;
        }
        .why-item:hover {
          background: #c3e6dc;
          box-shadow: 0 6px 18px rgba(42, 157, 143, 0.3);
        }

        /* Testimonials Section */
        .testimonials {
          padding: 60px 20px;
          background: #2a9d8f;
          color: white;
          text-align: center;
        }
        .testimonials h2 {
          font-size: 2.4rem;
          margin-bottom: 40px;
          font-weight: 700;
        }
        .testimonial-list {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }
        .testimonial {
          background: #1b5d6d;
          padding: 25px;
          border-radius: 15px;
          max-width: 300px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          font-style: italic;
          font-size: 1rem;
          line-height: 1.5;
          position: relative;
        }
        .testimonial::before {
          content: "“";
          font-size: 3rem;
          position: absolute;
          top: 10px;
          left: 15px;
          color: rgba(255, 255, 255, 0.3);
        }
        .testimonial-author {
          margin-top: 15px;
          font-weight: 700;
          font-style: normal;
          color: #d1e8e2;
        }

        /* Footer */
        .footer {
          background-color: #2c3e50;
          color: white;
          text-align: center;
          padding: 20px;
          font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .features {
            flex-direction: column;
            align-items: center;
          }
          .why-list {
            flex-direction: column;
            align-items: center;
          }
          .testimonial-list {
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 480px) {
          .hero h1 {
            font-size: 2rem;
          }
          .hero p {
            font-size: 1rem;
          }
          .apply-btn {
            font-size: 0.9rem;
            padding: 10px 20px;
          }
        }
        `}
      </style>

      <div className="home-wrapper">
        {/* Navbar */}
        <header className="navbar">
          <h2>Online Admission</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/apply">Apply</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to Our Admission Portal</h1>
          <p>Apply for your desired course from the comfort of your home.</p>
          <Link to="/apply">
            <button className="apply-btn">Apply Now</button>
          </Link>
        </section>

        {/* Features */}
        <section className="features" aria-label="Main Features">
          <div className="feature" tabIndex="0">
            <h3>📝 Online Form</h3>
            <p>Fill and submit your admission form completely online.</p>
          </div>
          <div className="feature" tabIndex="0">
            <h3>📄 Document Upload</h3>
            <p>Upload all required documents securely with your application.</p>
          </div>
          <div className="feature" tabIndex="0">
            <h3>📢 Notification</h3>
            <p>Stay updated with email or SMS notifications.</p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose" aria-label="Why Choose Us">
          <h2>Why Choose Us?</h2>
          <div className="why-list">
            <div className="why-item" tabIndex="0">
              Experienced Faculty & Staff
            </div>
            <div className="why-item" tabIndex="0">
              Modern Labs & Infrastructure
            </div>
            <div className="why-item" tabIndex="0">
              Affordable Fees & Scholarships
            </div>
          </div>
        </section>

                {/* Footer */}
        <footer className="footer" role="contentinfo">
          <p>
            &copy; 2025 <strong>Rapti Engineering College</strong> <br />
            Developed by <strong>Idiot Group</strong>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
