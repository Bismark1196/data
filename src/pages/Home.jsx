import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { Helmet } from 'react-helmet-async';

const Home = ({ showToast }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const interval = setInterval(showToast, 15000);
    return () => clearInterval(interval);
  }, [showToast]);

  return (
    <div className="section">
       <Helmet>
        <title>Home - DATA CHAPCHAP</title>
        <meta name="description" content="Quick, safe and easy data bundle access via DATA CHAPCHAP app" />
        <meta property="og:title" content="DATA CHAPCHAP - Fast, Reliable Data Bundles" />
        <meta property="og:description" content="Buy data bundles instantly with DATA CHAPCHAP. Safe, fast and convenient." />
      </Helmet>
      <header>
        <div className="header-content">
          <img src="/chapaa.jpg" alt="INUA CHAPAA Logo" className="logo" />
          <h2>DATA CHAPCHAP</h2>
          <p>Quick, Safe, and Easy Mobile Data</p>

          <button
            onClick={() => navigate("/signup")}
            className="cta-button"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#00a651",
              padding: "10px 20px",
              border: "none",
              borderRadius: "30px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            <img
              src="/play1.jpeg"
              alt="Download from Play Store"
              style={{ width: "24px", height: "24px" }}
            />
            Download App
          </button>
        </div>
      </header>

      <section className="section" style={{ textAlign: "center" }}>
        <h2>Need Data Bundle Fast?</h2>
        <p>
          Need data fast? DATA CHAPCHAP gives you instant access 
          to affordable data bundle offers to keep you connected 
          when it matters most. Whether it's for emergencies, online classes, 
          work, or staying in touch — we've got your back.
        </p>

        <h2>Why Choose DATA CHAPCHAP?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3> Instant Top-Up</h3>
            <p>Get your data bundles in seconds — no waiting, no queues. 
              Whether you're out of data in the middle of a Zoom call or on the go,
               DATA CHAPCHAP ensures you're reconnected instantly.</p>
          </div>
          <div className="benefit">
            <h3> Affordable Data Plans</h3>
            <p>Choose from a wide range of pocket-friendly data bundle offers tailored to suit every budget. 
              Enjoy more data for less — perfect for daily browsing, streaming, learning, and more.</p>
          </div>
          <div className="benefit">
            <h3>Reliable and Easy to Use</h3>
            <p>Designed for simplicity, DATA CHAPCHAP offers a clean and intuitive interface. 
              Anyone can top up data with just a few taps — no technical skills needed..</p>
          </div>
          <div className="benefit">
            <h3> Perfect for Students, Professionals & Families</h3>
            <p>Whether you’re a student attending online classes, a professional working remotely, 
              or a parent managing family data needs — DATA CHAPCHAP is 
              built to serve all your connectivity needs with ease and flexibility.</p>
          </div>
        </div>
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>⭐⭐⭐⭐⭐
“Affordable and super easy to use. I no longer have to walk to a shop just to buy bundles. 
Everything’s right on my phone.”</p>
            <strong>- Brian K., Freelancer.</strong>
          </div>
          <div className="testimonial">
            <p>⭐⭐⭐⭐⭐
“As a parent, I can top up my kids’ data instantly, even when I’m at work. Super convenient!”</p>
            <strong>- Lucy M., Working Mum.</strong>
          </div>
        </div>

        <h2>Ready to Boost Your Online Experience?</h2>
        <p>Join thousands who trust DATA CHAPCHAP for Data top up instantly.</p>

        <button
          className="cta-button"
          onClick={() => {
            window.gtag?.("event", "conversion", {
              send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
            });
            navigate("/signup");
          }}
        >
          Buy Now!
        </button>

        <footer>&copy; 2025 DATA CHAPCHAP. All rights reserved.</footer>
      </section>
    </div>
  );
};

export default Home;
