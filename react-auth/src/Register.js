// import React, { useState } from "react";

// function Register({ setToken }) {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     // 1️⃣ Register the user
//     const registerResponse = await fetch("http://localhost:8000/api/register/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, email, password }),
//     });

//     if (registerResponse.ok) {
//       // 2️⃣ If registration successful, automatically log in
//       const loginResponse = await fetch("http://localhost:8000/api/login/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       if (loginResponse.ok) {
//         const data = await loginResponse.json();
//         localStorage.setItem("access_token", data.access);
//         setToken(data.access);

//         // 3️⃣ Redirect to homepage
//         window.location.href = "/";
//       } else {
//         setMessage("Registration succeeded, but automatic login failed.");
//       }
//     } else {
//       const data = await registerResponse.json();
//       setMessage("Registration failed: " + JSON.stringify(data));
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Create Account</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           style={{ padding: "10px", margin: "5px", width: "250px" }}
//         /><br />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={{ padding: "10px", margin: "5px", width: "250px" }}
//         /><br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{ padding: "10px", margin: "5px", width: "250px" }}
//         /><br />
//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#007BFF",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Register
//         </button>
//       </form>
//       {message && <p style={{ marginTop: "15px", color: "red" }}>{message}</p>}
//       <p style={{ marginTop: "10px" }}>
//         Already have an account? <a href="/login">Login here</a>
//       </p>
//     </div>
//   );
// }

// export default Register;


import React, { useState } from "react";

function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const registerResponse = await fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (registerResponse.ok) {
      const loginResponse = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (loginResponse.ok) {
        const data = await loginResponse.json();
        localStorage.setItem("access_token", data.access);
        setToken(data.access);
        window.location.href = "/";
      } else {
        setMessage("Registration succeeded, but automatic login failed.");
      }
    } else {
      const data = await registerResponse.json();
      setMessage("Registration failed: " + JSON.stringify(data));
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
        width: "350px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "25px", color: "#333" }}>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "12px",
              marginBottom: "15px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px"
            }}
          /><br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "12px",
              marginBottom: "15px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px"
            }}
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "12px",
              marginBottom: "20px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px"
            }}
          /><br />
          <button
            type="submit"
            style={{
              padding: "12px 0",
              width: "100%",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "0.3s"
            }}
            onMouseOver={e => e.target.style.backgroundColor = "#0056b3"}
            onMouseOut={e => e.target.style.backgroundColor = "#007BFF"}
          >
            Register
          </button>
        </form>
        {message && <p style={{ marginTop: "15px", color: "red", fontSize: "14px" }}>{message}</p>}
        <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
          Already have an account? <a href="/login" style={{ color: "#007BFF", textDecoration: "none" }}>Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
