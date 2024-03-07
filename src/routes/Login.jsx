/* eslint-disable react/prop-types */
import { useState } from "react";
import BgImage from "../assets/bg3.jpg";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      onLogin();
    } else {
      setError("Please enter valid credentials.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
    },
    leftSide: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: `url(${BgImage})`,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      padding: "40px",
    },
    rightSide: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    formContainer: {
      maxWidth: "400px",
      width: "100%",
    },
    input: {
      margin: "10px 0",
      padding: "12px 20px",
      width: "100%",
      border: "1px solid #dddddd",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
      transition: "border-color 0.3s ease",
    },
    inputFocus: {
      borderColor: "#4285f4",
    },
    inputHover: {
      borderColor: "#999",
    },
    button: {
      margin: "10px 0",
      padding: "12px 20px",
      backgroundColor: "#ff5733",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      width: "100%",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#ff7755",
    },
    buttonFocus: {
      outline: "none",
      boxShadow: "0 0 0 2px #ff5733",
    },
    errorMessage: {
      color: "#d32f2f",
      marginTop: "10px",
      fontSize: "14px",
      textAlign: "center",
    },
    heading: {
      fontSize: "4rem",
      fontWeight: "900",
      marginBottom: "10px",
      color: "#fff",
    },
    description: {
      fontSize: "2rem",
      fontWeight: "900",
      marginBottom: "20px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
    },
    p: {
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <h1 style={styles.heading}>Notify.</h1>
        <p style={styles.description}>An App For Your Memory!</p>
      </div>
      <div style={styles.rightSide}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Welcome Back!</h2>
          <p style={styles.p}>Login to continue to your notes.</p>
          {error && <p style={styles.errorMessage}>{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
