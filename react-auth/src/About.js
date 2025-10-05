import React from "react";
import { Link } from "react-router-dom";

function About() {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  return (
    <div>
      <style>{`
        body { font-family: Arial, sans-serif; margin:0; padding:0; background-color: #f9f9f9; }

        /* Header */
        header {
          background-color: #2C3E50;
          color: white;
          padding: 15px;
          text-align: center;
        }
        header h1 {
          margin: 0;
          font-size: 28px;
        }
        nav {
          margin-top: 10px;
        }
        nav a {
          color: white;
          text-decoration: none;
          margin: 0 15px;
          font-weight: bold;
        }
        nav a:hover {
          text-decoration: underline;
        }
        .logout-btn {
          background-color: #FF4C4C;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 5px;
          cursor: pointer;
          margin-left: 15px;
        }
        .logout-btn:hover {
          background-color: #cc0000;
        }

        /* About container */
        .about-container { 
          max-width: 900px; 
          margin: 50px auto; 
          padding: 30px; 
          background: #fff; 
          border-radius: 10px; 
          box-shadow: 0 5px 15px rgba(0,0,0,0.1); 
        }
        .about-title { 
          font-size: 28px; 
          font-weight: bold; 
          margin-bottom: 20px; 
          color: #333; 
          text-align: center; 
        }
        .about-section { margin-bottom: 20px; }
        .about-section h3 { color: #4CAF50; font-size: 20px; margin-bottom: 10px; }
        .about-section p { font-size: 16px; line-height: 1.6; color: #555; }

        /* Team Section */
        .team-section { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px; justify-content: center; }
        .team-member { background: #f0f2f5; padding: 15px; border-radius: 8px; text-align: center; flex: 1; min-width: 200px; max-width: 250px; }
        .team-member img { width: 80px; height: 80px; border-radius: 50%; margin-bottom: 10px; }
        .team-member h4 { margin: 5px 0; font-size: 18px; }
        .team-member p { font-size: 14px; color: #666; }

        /* Footer */
        footer {
          background-color: #2C3E50;
          color: white;
          text-align: center;
          padding: 15px;
          position: fixed;
          width: 100%;
          bottom: 0;
        }
      `}</style>

      {/* Header */}
      <header>
        <h1>MentalLab Library</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/purchase">Purchase</Link>
          <Link to="/profile">Profile</Link>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      {/* About Content */}
      <div className="about-container">
        <h2 className="about-title">About MentalLab Library</h2>

        <div className="about-section">
          <h3>Who We Are</h3>
          <p>
            MentalLab Library is an online bookstore dedicated to bringing knowledge, 
            creativity, and inspiration to readers worldwide. We believe that books 
            have the power to change lives, spark ideas, and open doors to endless possibilities.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            Our mission is simple: to make books accessible to everyone, everywhere. 
            Whether you’re a student, a professional, or simply a book lover, 
            MentalLab Library provides a wide range of books tailored to your needs.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Vision</h3>
          <p>
            To become the leading online bookstore that nurtures a global reading 
            culture, empowers individuals, and inspires communities through knowledge.
          </p>
        </div>

        <div className="about-section">
          <h3>Meet Our Team</h3>
          <div className="team-section">
            <div className="team-member">
              <img src="/anto.jpeg" alt="Antony" />
              <h4>Antony Mwangi</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="/jackie.jpeg" alt="Jackson" />
              <h4>Jackson Munene</h4>
              <p>Operations Manager</p>
            </div>
            <div className="team-member">
              <img src="/richie.jpeg" alt="Richard" />
              <h4>Richard Wamalwa</h4>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 MentalLab Library. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
