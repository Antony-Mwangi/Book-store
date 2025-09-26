import React, { useEffect, useState } from "react";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

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
    // Save to localStorage for now
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${book.title} added to cart!`);
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading books...</p>;

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      {books.map((book) => (
        <div key={book.id} style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          width: "220px",
          margin: "15px",
          padding: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}>
          <img 
            src={book.cover_image ? `http://localhost:8000${book.cover_image}` : "https://via.placeholder.com/150"} 
            alt={book.title} 
            style={{ width: "150px", height: "200px", objectFit: "cover", borderRadius: "6px" }}
          />
          <h3 style={{ fontSize: "16px", margin: "10px 0 5px" }}>{book.title}</h3>
          <p style={{ fontSize: "14px", color: "#555", margin: "0 0 10px" }}>by {book.author}</p>
          <p style={{ fontSize: "13px", height: "50px", overflow: "hidden", color: "#333" }}>
            {book.description}
          </p>
          <p style={{ fontWeight: "bold", margin: "10px 0" }}>${book.price}</p>
          <button 
            onClick={() => handleAddToCart(book)}
            style={{
              padding: "10px 15px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s"
            }}
            onMouseOver={e => e.target.style.backgroundColor = "#0056b3"}
            onMouseOut={e => e.target.style.backgroundColor = "#007BFF"}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
