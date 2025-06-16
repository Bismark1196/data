import React, { useState, useEffect } from "react";
import "../styles/Verification.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Verification = () => {
  const [limit, setLimit] = useState(7000);
  const [savingAmount, setSavingAmount] = useState(160);
  const [messageVisible, setMessageVisible] = useState(false);
  const [mpesaMessage, setMpesaMessage] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");
  const [verificationClass, setVerificationClass] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    const storedLimit = parseFloat(localStorage.getItem("limit"));
    const storedSaveAmount = parseFloat(localStorage.getItem("saveamount"));
    if (!isNaN(storedLimit)) setLimit(storedLimit);
    if (!isNaN(storedSaveAmount)) setSavingAmount(storedSaveAmount);
  }, []);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("0708639395");
    alert("Phone Number!");
  };

  const openModal = () => setMessageVisible(true);
  const closeModal = () => {
    setMessageVisible(false);
    setMpesaMessage("");
    setVerificationMessage("");
    setVerificationClass("");
  };

  const verifyTransaction = () => {
  const message = mpesaMessage.trim().toLowerCase();

  const isValid =
    message.includes("confirmed") &&
    message.includes("ksh") &&
    (message.includes("sent to") || message.includes("paid to") || message.includes("payment to")) &&
    message.includes("gadgetcom ventures") // ✅ Require exact business name

  if (isValid) {
    setVerificationMessage("Payment verified successfully!");
    setVerificationClass("success");
    setTimeout(() => {
      closeModal();
      navigate("/review");
    }, 3000);
  } else {
    setVerificationMessage(
      "Please paste the full and correct M-PESA confirmation message, including recipient 'GADGETCOM VENTURES'."
    );
    setVerificationClass("error");
  }
  };

  const goToSavingsPlan = () => {
    window.location.href = "savings";
  };

  useEffect(() => {
  const isAuthenticated = localStorage.getItem("name") && localStorage.getItem("phone");
  if (!isAuthenticated) {
    navigate("/signup");
  }
}, []);


  return (
    <>
      <h3>.</h3>
      <div className="container">
        <h5>
          You're just one step away from receiving{" "}
          <strong>Ksh {(limit / 1000).toFixed(1)} GB ({limit}MB)</strong>!
          Delay could cost you this opportunity.
          Receive your data bundle instantly, and enjoy uninterrupted browsing.
        </h5>

        <div className="labels">
          <button
            className="verify-btnn"
            onClick={goToSavingsPlan}
            style={{
              marginTop: "5%",
              color: "orangered",
              background: "linear-gradient(135deg, #31463f, #070930)",
              fontSize: "medium",
            }}
          >
            Change Data Plan
          </button>
        </div>

        <div className="loan-tabless">
          <div className="labels">
            <span style={{ marginLeft: "5%" }}>
              <strong>How to receive Data on DATA CHAPCHAP:</strong>
            </span>
          </div>
          <div className="labels">
            Go to M~Pesa :{" "}
            <span style={{ marginLeft: "5.5%" }}>
              <strong>M~pesa</strong>
            </span>
          </div>
          <div className="labels">
            Send Money :{" "}
            <span>
              <strong>Phone Number</strong>
            </span>
          </div>
          <div className="labels">
            Phone Number :{" "}
            <span>
              <strong>0725523509</strong>
            </span>
          </div>
          <div className="labels">
            Phone Name :{" "}
            <span>
              <strong>Kevin Kipkoech</strong>
            </span>
          </div>

          <div className="labels">
            <button
              className="verify-btnn"
              onClick={copyPhoneNumber}
              id="copytill"
            >
              CLICK TO COPY TILL
            </button>
          </div>
          <div className="labels">
            Enter Amount :{" "}
            <span style={{ marginLeft: "13%" }}>
              <strong id="savingsamountt">
                Ksh {savingAmount.toLocaleString()}
              </strong>
            </span>
          </div>
          <div className="labels">
            Complete Payment :{" "}
            <span style={{ marginLeft: "3%" }}>
              <strong>Enter M~Pesa Pin</strong>
            </span>
          </div>

          <button className="open-modal-btn" onClick={openModal}>
            Verify Payment to Initiate Loan Disbursement
          </button>
        </div>

        <div className={`overlay ${messageVisible ? "show" : ""}`}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="verifyTitle">
  <h2 id="verifyTitle">Verify Payments</h2>
  
  <button className="close-modal-btn" onClick={closeModal} aria-label="Close Modal">×</button>
  
  <p>
    Copy the entire confirmation message you received from M-PESA
    after making payments and paste it in the field below, then click the verify button.
  </p>

  <textarea
    className="input-field"
    placeholder="Paste M-PESA Message Here"
    rows="4" 
    value={mpesaMessage}
    onChange={(e) => setMpesaMessage(e.target.value)}
  />

  <button className="verify-btn" onClick={verifyTransaction}>
    VERIFY
  </button>

  {verificationMessage && (
    <div className={`message ${verificationClass}`}>
      {verificationMessage}
    </div>
            )}
          </div>
        </div>

        <div className="footer">© Data ChapChap 2025</div>
      </div>
    </>
  );
};

export default Verification;
