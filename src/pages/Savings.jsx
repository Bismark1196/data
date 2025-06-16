import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Savings.css";
import { Helmet } from "react-helmet-async";

const Savings = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("John Doe");
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  const [plans, setPlans] = useState([]);
  const [userData, setUserData] = useState({});
  const [dataline, setDataLine] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("name");
    if (stored) setName(stored);

    const storedLine = localStorage.getItem("dataline");
    if (storedLine) setDataLine(storedLine);

    const getRandom = (min, max) => {
      const rand = Math.floor(Math.random() * (max - min + 1) + min);
      return rand - (rand % 10);
    };

    const dataBundlePlans = [
      { savings: 150, limit: getRandom(2500, 3500) },     // ~2.5–3.5 GB
      { savings: 170, limit: getRandom(4000, 5000) },     // ~4–5 GB
      { savings: 220, limit: getRandom(6000, 7000) },     // ~6–7 GB
      { savings: 300, limit: getRandom(7000, 10000) },    // ~7–10 GB
      { savings: 450, limit: getRandom(10000, 14000) },   // ~10–14 GB
      { savings: 950, limit: getRandom(14000, 19000) },   // ~14–19 GB
      { savings: 1550, limit: getRandom(20000, 25000) },  // ~20–25 GB
    ];
    setPlans(dataBundlePlans);
  }, []);

  const handleSelect = (plan) => {
    setSelected(plan);
    setError(plan.savings === 1550); // Error if highest tier selected
  };

 const handleProceed = () => {
    if (selected && !error) {
      localStorage.setItem("limit", selected.limit);
      localStorage.setItem("bundleCost", selected.savings);
      localStorage.setItem("bundleSizeGB", Math.floor(selected.limit / 1000));
      localStorage.setItem("bundleSizeMB", selected.limit);
      navigate("/appdet");
    }
  };

  const fname = name.split(" ")[0];
  return (
    <div className="container">
      <h1>DATA CHAPCHAP</h1>
      <p className="subtitle">
        Dear <strong className="highlighted">{fname}</strong>, you're eligible for  <strong className="highlighted">{dataline}</strong> data bundles worth up to  
        <strong> Ksh 350</strong>—that’s about <strong>50GB</strong> of internet!  
        Select your preferred data plan to continue. Valid for <strong>30 days</strong>.
      </p>

      <div className="radio-group">
        {plans.map((plan) => (
          <label
            key={plan.savings}
            className={`radio-option ${selected?.savings === plan.savings ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="savings"
              value={plan.savings}
              onChange={() => handleSelect(plan)}
            />
            <div className="savings-amount">Ksh {plan.savings}</div>
            <div className="loan-limit">
              Data bundle: ~{Math.floor(plan.limit / 1000)}GB ({plan.limit}MB)
            </div>
          </label>
        ))}
      </div>

      <div className={`result ${error ? "error" : ""}`}>
        {selected
          ? error
            ? "Only existing members allowed"
            : `Your data bundle: ~${Math.floor(selected.limit / 1000)}GB`
          : "Select a savings amount to see your data bundle"}
      </div>

      <div className="buttons">
        <button
          id="continueBtn"
          onClick={handleProceed}
          disabled={!selected || error}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Savings;
