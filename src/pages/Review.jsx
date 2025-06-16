import React, { useEffect, useState } from "react";
import "../styles/Review.css";
import { Helmet } from "react-helmet-async";

<Helmet>
  {/* Primary SEO */}
  <title>INUA CHAPAA - Instant Mpesa Loans in Kenya</title>
  <meta
    name="description"
    content="Need fast cash? INUA CHAPAA offers instant mobile loans sent to your Mpesa account. Quick, safe, and hassle-free."
  />
  <meta
    name="keywords"
    content="Mpesa loan, instant loan Kenya, mobile loan app, INUA CHAPAA, emergency loan Kenya, online loans"
  />
  <meta name="author" content="INUA CHAPAA" />
  <link rel="canonical" href="https://inua-chapaa.com/" />

  {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://inua-chapaa.com/" />
  <meta property="og:title" content="INUA CHAPAA - Get Instant Mpesa Loans" />
  <meta
    property="og:description"
    content="Instant cash to Mpesa. Apply in minutes with INUA CHAPAA mobile loans."
  />
  <meta
    property="og:image"
    content="https://inua-chapaa.com/assets/social-banner.jpg"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://inua-chapaa.com/" />
  <meta
    name="twitter:title"
    content="INUA CHAPAA - Fast Mpesa Loans in Kenya"
  />
  <meta
    name="twitter:description"
    content="Quick and easy mobile loans. Apply now and receive your funds via Mpesa."
  />
  <meta
    name="twitter:image"
    content="https://inua-chapaa.com/assets/social-banner.jpg"
  />

  {/* TikTok Preview (optional if you're embedding a video) */}
  <meta
    property="og:video"
    content="https://www.tiktok.com/@inua_chapaa/video/1234567890123456"
  />
  <meta property="og:video:type" content="text/html" />
  <meta property="og:video:width" content="325" />
  <meta property="og:video:height" content="576" />

  {/* Google Ads Global Site Tag */}
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
  ></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-XXXXXXXXX');
    `}
  </script>

  {/* Favicon + Manifest */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="manifest" href="/manifest.json" />
</Helmet>;

const Review = () => {
  const [limit, setLimit] = useState(0);
  const [savingAmount, setSavingAmount] = useState(0);
  const [loanType, setLoanType] = useState("Personal Loan");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lim = parseFloat(localStorage.getItem("limit")) || 0;
    const saveAmt = parseFloat(localStorage.getItem("saveamount")) || 0;
    const loan = localStorage.getItem("name") || "Education Loan";

    // Simulate loading delay
    setTimeout(() => {
      setLimit(lim);
      setSavingAmount(saveAmt);
      setLoanType(loan);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="review-container">Loading your loan details...</div>;
  }

  return (
    <div className="review-container">
      <div className="header">
        <div className="logo">
          INUA CHAPAA
          <div className="logo-circle">
            <span className="bolt">⚡</span>
          </div>
        </div>
        <div className="dark-mode">🌙</div>
      </div>

      <h1>Your loan application was successful. Kindly wait as we process</h1>
      <span className="dot-flashing"></span>

      <div className="loan-message">
        Your loan application was successful and is under review. Your M-Pesa
        account will be credited as soon as the review is completed.
        <button className="verify-buttons">
          Your Loan Application Details :
        </button>
      </div>

      <div className="loan-table">
        <div>
          <div className="label">Name :</div>
          <div className="label">{loanType}</div>
        </div>
        <div>
          <div className="label">Applied Amount :</div>
          <div className="label">Ksh {limit.toFixed(2)}</div>
        </div>
        <div>
          <div className="label">Loan Status :</div>
          <div className="status-pending">
            <span style={{ marginLeft: "8px" }}>Processing...</span>
          </div>
        </div>
        <div>
          <div className="label">Account Savings :</div>
          <div className="label">Ksh {savingAmount.toFixed(2)}</div>
        </div>
        <div>
          <div className="label">Disbursement Status :</div>
          <div className="label">
            <span className="status-not-verified">Pending</span>
          </div>
        </div>
      </div>

      <div className="footer">© Inua Chapaa 2025</div>
    </div>
  );
};

export default Review;
