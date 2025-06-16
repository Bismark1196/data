import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Appdet.css';
import { Helmet } from "react-helmet-async";

const Appdet = () => {
  const navigate = useNavigate();

  // State for amounts and fees
  const [limit, setLimit] = useState(0);
  const [fee, setFee] = useState(0);
  const [savingAmount, setSavingAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [receivable, setReceivable] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');



 useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedPhone = localStorage.getItem('phone');
    if (storedName) setName(storedName);
    if (storedPhone) setPhone(storedPhone);

    const bundleMB = parseFloat(localStorage.getItem("bundleSizeMB")) || 0;
    const bundleGB = parseFloat(localStorage.getItem("bundleSizeGB")) || 0;
    const topup = parseFloat(localStorage.getItem("bundleCost")) || 0;

    setLimit(bundleMB);
    setSavingAmount(topup);

    const calculatedFee = topup * 0.10;
    setFee(calculatedFee);
    setInterest(0);

    const totalPayable = topup + calculatedFee;
    setReceivable(totalPayable);
  }, []);


 const [processing, setProcessing] = useState(false);

  const goToVerification = () => {
    setProcessing(true);
    setTimeout(() => {
      navigate('/Verification');
    }, 4000);
  };


  return (
    <div className="appdet-container">
      <div className="loan-message">
        <h1>Data Bundle Details</h1>
        <h2>You Qualify for ~{(limit / 1000).toFixed(1)}GB ({limit}MB)</h2>
        <h3>Top-Up Amount</h3>
        <h4 id="limit">Ksh {savingAmount.toFixed(2)}</h4>
        <h5>
          Service Fee <span style={{ marginLeft: '50%' }}>Total Payable</span>
        </h5>
        <h4 id="limit1">
          Ksh {fee.toFixed(2)} <span style={{ marginLeft: '45%' }}>Ksh {receivable.toFixed(2)}</span>
        </h4>
      </div>

      <div className="loan-table">
        <div>
          <div className="labels">Data Bundle Size:</div>
          <div className="labels"><strong>~{(limit / 1000).toFixed(1)}GB</strong></div>
        </div>
        <div>
          <div className="labels">Top-Up Amount:</div>
          <div className="labels"><strong>Ksh {savingAmount.toFixed(2)}</strong></div>
        </div>
        <div>
          <div className="labels">Service Fee (10%):</div>
          <div className="labels"><strong>Ksh {fee.toFixed(2)}</strong></div>
        </div>
        <div>
          <div className="labels">Total Payable:</div>
          <div className="labels"><strong>Ksh {receivable.toFixed(2)}</strong></div>
        </div>
        <div>
          <div className="labels">Phone Number:</div>
          <div className="labels"><strong>{phone}</strong></div>
        </div>
      </div>

      <div className="loan-tabless">
        <div className="labels">NAME: <strong>{name}</strong></div>
        <div className="labels">M-PESA NO: <strong>{phone}</strong></div>
        <button className="verify-button" onClick={goToVerification}>Buy Now</button>
      </div>

      {processing && (
        <div className="processing-overlay">
          <div className="processing-popup">
            <p>Processing your request...</p>
          </div>
        </div>
      )}

      <div className="footer">© Data ChapChap 2025</div>
    </div>
  );
};

export default Appdet;
