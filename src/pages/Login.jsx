import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Needed for programmatic navigation
import "../styles/Login.css";
import { Helmet } from "react-helmet-async"

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/review");
    } catch (err) {
      setError("Invalid credentials or unregistered account.");
      setLoading(false);
    }
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/forgot-password"); // ✅ Use this when route is ready
    }, 2000);
  };

  const handleSignup = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/signup");
    }, 2000);
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay animate-overlay">
          <div className="spinner-logo-wrapper">
            <img src="/load.gif" alt="Loading..." className="spinner-logo" />
            <p className="loading-text">Please wait...</p>
          </div>
        </div>
      )}

      <main className="login-wrapper">
        <div className="login-container">
          <h1 className="brand-title">DATA CHAPCHAP</h1>
          <p className="subtitle">Secure Instant Data Bundles to Your Mobile</p>

          {error && <p className="error-msg">{error}</p>}

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="forgot" onClick={handleForgot}>
              Forgot Password?
            </div>

            <button type="submit" className="primary-btn">
              {loading ? "Logging in..." : "Log In"}
            </button>

            <div className="signup-callout" onClick={handleSignup}>
              New here? <span>Create an account</span>
            </div>
          </form>
        </div>

        <footer className="footer">
          © 2025 SecureLend Data Bundle Services
        </footer>
      </main>
    </>
  );
};

export default Login;
