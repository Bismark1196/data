import React, { useEffect } from "react";
import "../styles/Loancheck.css";
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

const LoanEligibility = () => {
  useEffect(() => {
    const limitVal = parseFloat(localStorage.getItem("limit")) || 0;
    const formattedLimit = `Ksh ${limitVal.toFixed(2)}`;
    document.getElementById("limit").textContent = formattedLimit;
    document.getElementById("limit1").textContent = formattedLimit;
  }, []);

  const goToSecondPage = () => {
    window.location.href = "/apply";
  };

  return (
    <div className="loan-wrapper">
      {/* PWA Install Popup */}
      <div id="pwa-install-popup" className="pwa-popup">
        <div className="pwa-popup-content">
          <div className="gif-container">
            <img src="assets/process.gif" alt="Authorization GIF" />
          </div>
        </div>
      </div>

      {/* Loan Message */}
      <div className="loan-message">
        <h1>Eligibility Successful. You Qualify for a Loan.</h1>
        <h2>Early settlement may result in reduction of interest.</h2>
        <h3>Loan Amount Qualified</h3>
        <h4 id="limit">Ksh 0.00</h4>
        <h5>
          Term <span>Receive Amount</span>
        </h5>
        <h4>
          14 days <span id="received">Ksh 0.00</span>
        </h4>
      </div>

      {/* Loan Table 1 */}
      <div className="loan-table">
        <div>
          <div className="labels">Awarded Loan Amount :</div>
          <div className="labels" id="limit1">
            <strong>Ksh 0.00</strong>
          </div>
        </div>
        <div>
          <div className="labels">Service Fee :</div>
          <div className="labels" id="Servicefee">
            <strong>Ksh 636</strong>
          </div>
        </div>
        <div>
          <div className="labels">Interest Rate :</div>
          <div className="labels">
            <strong>8%</strong>
          </div>
        </div>
        <div>
          <div className="labels">Interest Applied(8%) :</div>
          <div className="labels" id="interestrate">
            <strong>Ksh 520</strong>
          </div>
        </div>
        <div>
          <div className="labels">Disburseable Amount to Mpesa :</div>
          <div className="labels" id="received1">
            <strong>Ksh 5,344</strong>
          </div>
        </div>
      </div>

      {/* Loan Table 2 */}
      <div className="loan-tabless">
        <div>
          <div className="labels center">
            <strong>Mpesa Account</strong>
          </div>
        </div>
        <div>
          <div className="labels" id="phonenumber"></div>
        </div>
        <div>
          <div className="labels" id="youname"></div>
        </div>
        <button className="verify-button" onClick={goToSecondPage}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LoanEligibility;
