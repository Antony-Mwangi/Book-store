// // import React, { useState } from "react";

// // function Login({ setToken }) {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     const response = await fetch("http://localhost:8000/api/login/", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ username, password }),
// //     });

// //     if (response.ok) {
// //       const data = await response.json();
// //       localStorage.setItem("access_token", data.access);
// //       setToken(data.access);
// //       window.location.href = "/"; // Redirect to homepage
// //     } else {
// //       setError("Invalid credentials");
// //     }
// //   };

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "50px" }}>
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           required
// //           style={{ padding: "10px", margin: "5px", width: "200px" }}
// //         /><br />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //           style={{ padding: "10px", margin: "5px", width: "200px" }}
// //         /><br />
// //         <button
// //           type="submit"
// //           style={{
// //             padding: "10px 20px",
// //             backgroundColor: "#4CAF50",
// //             color: "white",
// //             border: "none",
// //             cursor: "pointer",
// //           }}
// //         >
// //           Login
// //         </button> 
// //         <p style={{ marginTop: "10px" }}>
// //   Don't have an account? <a href="/register">Register here</a>
// // </p>

// //       </form>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //     </div>
// //   );
// // }

// // export default Login;


// import React, { useState } from "react";

// function Login({ setToken }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const response = await fetch("http://localhost:8000/api/login/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       localStorage.setItem("access_token", data.access);
//       setToken(data.access);
//       window.location.href = "/"; // Redirect to homepage
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
//       fontFamily: "Arial, sans-serif"
//     }}>
//       <div style={{
//         backgroundColor: "white",
//         padding: "40px",
//         borderRadius: "12px",
//         boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
//         width: "350px",
//         textAlign: "center"
//       }}>
//         <h2 style={{ marginBottom: "25px", color: "#333" }}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={{
//               padding: "12px",
//               marginBottom: "15px",
//               width: "100%",
//               borderRadius: "6px",
//               border: "1px solid #ccc",
//               fontSize: "14px"
//             }}
//           /><br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{
//               padding: "12px",
//               marginBottom: "20px",
//               width: "100%",
//               borderRadius: "6px",
//               border: "1px solid #ccc",
//               fontSize: "14px"
//             }}
//           /><br />
//           <button
//             type="submit"
//             style={{
//               padding: "12px 0",
//               width: "100%",
//               backgroundColor: "#28A745",
//               color: "white",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//               fontSize: "16px",
//               fontWeight: "bold",
//               transition: "0.3s"
//             }}
//             onMouseOver={e => e.target.style.backgroundColor = "#1e7e34"}
//             onMouseOut={e => e.target.style.backgroundColor = "#28A745"}
//           >
//             Login
//           </button>
//         </form>
//         {error && <p style={{ marginTop: "15px", color: "red", fontSize: "14px" }}>{error}</p>}
//         <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
//           Don't have an account? <a href="/register" style={{ color: "#28A745", textDecoration: "none" }}>Register here</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [animatedText, setAnimatedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animated text
  const fullText = "Welcome to MentalLab Library! Discover, Learn, and Grow with Every Book.";

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText(fullText.slice(0, currentIndex + 1));
      setCurrentIndex((prev) => (prev + 1 > fullText.length ? 0 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const response = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("access_token", data.access);
      setToken(data.access);
      window.location.href = "/";
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <style>{`
        body { font-family: Arial, sans-serif; margin:0; padding:0; background-color: #f0f2f5; }
        .container { display: flex; justify-content: center; align-items: center; height: 100vh; padding: 20px; }
        .login-form { background: white; padding: 30px; border-radius: 10px; width: 350px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        .login-form h2 { text-align: center; margin-bottom: 20px; }
        .login-form input { width: 100%; padding: 10px; margin: 8px 0; border-radius: 5px; border: 1px solid #ccc; }
        .login-form button { width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px; }
        .login-form button:hover { background-color: #45a049; }
        .login-form .register-link { text-align: center; margin-top: 15px; }
        .login-form .register-link a { color: #007BFF; text-decoration: none; font-weight: bold; }
        .login-form .register-link a:hover { text-decoration: underline; }
        .error { color: red; margin-top: 10px; text-align: center; }
        .right-side { margin-left: 50px; display: flex; flex-direction: column; align-items: center; max-width: 400px; }
        .book-image { width: 200px; height: 250px; object-fit: cover; margin-bottom: 20px; border-radius: 10px; border: 1px solid #ccc; }
        .animated-text { font-size: 20px; font-weight: bold; color: #333; text-align: center; min-height: 60px; }
      `}</style>

      <div className="container">
        {/* Left side: Login form */}
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            {error && <div className="error">{error}</div>}
          </form>
          <div className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </div>

        {/* Right side: Hardcoded book image + animated text */}
        <div className="right-side">
          <img src="/books.jpeg" alt="Book" className="book-image" />
          <div className="animated-text">{animatedText}</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
