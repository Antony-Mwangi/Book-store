import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/articles/")
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p style={{ textAlign: "center", marginTop: "50px", fontSize: "18px" }}>
        Loading articles...
      </p>
    );
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <header style={{
        backgroundColor: "#1f2937",
        color: "#fff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1 style={{ margin: 0 }}>My Articles</h1>
        <nav>
          <Link 
            to="/" 
            style={{
              color: "#fff",
              textDecoration: "none",
              backgroundColor: "#4f46e5",
              padding: "8px 16px",
              borderRadius: "6px",
              marginRight: "15px",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#4338ca"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#4f46e5"}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{
              color: "#fff",
              textDecoration: "none",
              backgroundColor: "#4f46e5",
              padding: "8px 16px",
              borderRadius: "6px",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#4338ca"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#4f46e5"}
          >
            About
          </Link>
        </nav>
      </header>

      {/* Articles Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "40px 20px",
          gap: "20px"
        }}
      >
        {articles.map(article => (
          <div
            key={article.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "600px",
              padding: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            {article.image && (
              <img
                src={`http://localhost:8000${article.image}`}
                alt={article.title}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
            )}
            <h3 style={{ fontSize: "22px", margin: "10px 0", color: "#111827" }}>
              {article.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}>
              by {article.author_name}
            </p>
            <p style={{ fontSize: "16px", color: "#374151", lineHeight: "1.7" }}>
              {article.content}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#1f2937",
        color: "#fff",
        padding: "20px 30px",
        textAlign: "center",
        marginTop: "40px"
      }}>
        <p>&copy; {new Date().getFullYear()} My Articles. All rights reserved.</p>
        <div>
          <Link 
            to="/" 
            style={{
              color: "#fff",
              textDecoration: "none",
              backgroundColor: "#4f46e5",
              padding: "8px 16px",
              borderRadius: "6px",
              marginRight: "15px",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#4338ca"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#4f46e5"}
          >
            Home
          </Link>
          <Link 
            to="/contact" 
            style={{
              color: "#fff",
              textDecoration: "none",
              backgroundColor: "#4f46e5",
              padding: "8px 16px",
              borderRadius: "6px",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#4338ca"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#4f46e5"}
          >
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Articles;
