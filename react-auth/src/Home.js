import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/books/")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (book) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${book.title} added to cart!`);
  };

  return (
    <div>
      <style>{`
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        header { background-color: #2C3E50; color: white; padding: 15px; text-align: center; }
        header h1 { margin: 0; font-size: 28px; }
        nav { margin-top: 10px; }
        nav a { color: white; text-decoration: none; margin: 0 15px; font-weight: bold; }
        nav a:hover { text-decoration: underline; }
        .content { padding: 20px; text-align: center; }
        .books { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 30px; }
        .book-card { background: white; border: 1px solid #ddd; border-radius: 8px; padding: 15px; width: 200px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .book-card img { width: 100%; height: 250px; object-fit: cover; border-radius: 5px; }
        .book-card h3 { font-size: 18px; margin: 10px 0; }
        .book-card p { font-size: 14px; height: 50px; overflow: hidden; color: #555; margin: 5px 0; }
        .book-card button { padding: 8px 12px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer; }
        .book-card button:hover { background-color: #0056b3; }
        footer { background-color: #2C3E50; color: white; text-align: center; padding: 15px; position: fixed; width: 100%; bottom: 0; }
        .logout-btn { margin-top: 20px; padding: 10px 20px; background-color: #FF4C4C; color: white; border: none; cursor: pointer; border-radius: 5px; }
      `}</style>

      <header>
  <style>{`
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #2C3E50;
      padding: 10px 20px;
      color: white;
      flex-wrap: wrap;
    }
header {
      position: sticky;
      top: 0;
      z-index: 100;
      background-color: #2C3E50;
      color: white;
      padding: 10px 20px;
    }

  
    .logo-title {
      display: flex;
      align-items: center;
    }
    .logo-title img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      margin-right: 10px;
      border-radius: 5px;
    }
    .logo-title h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .nav-right {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .nav-btn {
      padding: 8px 15px;
      background-color: #FF4C4C;
      color: white;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }
    .nav-btn:hover {
      background-color: #cc3b3b;
    }
  `}</style>

  <div className="header-container">
    <div className="logo-title">
      <img src="/mental lab.jpeg" alt="Logo" />
      <h1>MENTAL LAB</h1>
    </div>

    <div className="nav-right">
      <a href="/" className="nav-btn">Home</a>
      <a href="/about" className="nav-btn">About</a>
      <a href="/articles" className="nav-btn">Articles</a>
      <a href="/purchase" className="nav-btn">Purchase</a>
      <button className="nav-btn" onClick={() => { localStorage.removeItem("access_token"); window.location.href="/login"; }}>
        Logout
      </button>
      <Link to="/profile">Profile</Link>
    </div>
    

    
  </div>
</header>


      <div className="content">
        <h2>Available Books</h2>
        {loading ? (
          <p>Loading books...</p>
        ) : (
          <div className="books">
            {books.map((book) => (
              <div key={book.id} className="book-card">
                <img
                  src={book.cover_image ? `http://localhost:8000${book.cover_image}` : "https://via.placeholder.com/200x250"}
                  alt={book.title}
                />
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <p>${book.price}</p>
                <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
              </div>
            ))}
          </div>
        )}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

  <style>{`
  .content {
    padding: 20px;
    margin-top: 10px; 
    margin-bottom: 40px; /* Add space between content and footer */
  }

  footer {
    background-color: #2C3E50;
    color: white;
    text-align: center;
    padding: 15px 20px;
    font-size: 14px;
    font-family: Arial, sans-serif;
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .footer-section {
    flex: 1 1 200px;
    margin: 5px;
  }

  .footer-section h4 {
    margin-bottom: 10px;
    font-size: 16px;
    border-bottom: 2px solid #FF4C4C;
    display: inline-block;
    padding-bottom: 3px;
  }

  .footer-section p, .footer-section a {
    font-size: 13px;
    color: white;
    text-decoration: none;
    display: block;
    margin: 3px 0;
  }

  .footer-section a:hover { color: #FF4C4C; }
  .footer-bottom { text-align: center; margin-top: 10px; font-size: 12px; color: #ccc; width: 100%; }
`}</style>


<footer>
  <div className="footer-container">
    <div className="footer-section">
      <h4>About Us</h4>
      <p>MentalLab Library is your one-stop online bookstore for professional and educational books.</p>
    </div>
    <div className="footer-section">
      <h4>Quick Links</h4>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/articles">Articles</a>
      <a href="/purchase">Purchase</a>
    </div>
    <div className="footer-section">
      <h4>Contact Us</h4>
      <p>Email: antonymwangiw85@gmail.com</p>
      <p>Phone: +254 711668298</p>
      <p>Address: shinyalu, Nairobi</p>
    </div>
  </div>
  <div className="footer-bottom">
    &copy; 2025 MentalLab Library. All rights reserved.
  </div>
</footer>


    </div>
  );
}

export default Home;



