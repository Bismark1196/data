import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Eligibility.css";
import loadGif from "../assets/process.gif";
import { Helmet } from "react-helmet-async";


const Eligibilitycheck = () => {
  const [timeLeft, setTimeLeft] = useState(1);
  const [statusText, setStatusText] = useState("Requesting ...");
  const [buttonVisible, setButtonVisible] = useState(false);
  const [gifSrc, setGifSrc] = useState(loadGif);

  const [eligibilityMessage, setEligibilityMessage] = useState(
    "The system is evaluating your Data Bundle eligibility and limits.",
  );

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Start a timer to simulate the process
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime + 1;

        // Update status text based on the timer
        if (newTime >= 11) {
          clearInterval(timerInterval);
          setStatusText("✔ Approved");
          setButtonVisible(true);
          setEligibilityMessage(
            "Eligibility Successful. You qualify for Data Bundle!",
          );
        } else if (newTime === 5) {
          setStatusText("Contacting server 47% ...");
        } else if (newTime === 7) {
          setStatusText("Contacting server 74% ...");
        } else if (newTime >= 3) {
          setStatusText(`Contacting server ${newTime}0% ...`);
        }

        return newTime;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerInterval);
  }, []);

  const nextPage = () => {
    setGifSrc(loadGif); // ✅ re-set the gif
    setTimeout(() => {
      navigate("/savings");
    }, 1000);
  };

  return (
    <div>
      <div className="container">
        <h1 className="wait-heading">Please wait...</h1>
        <div className="gif-container">
          <img src={gifSrc} alt="Authorization GIF" />
        </div>
        <div className="timer">{statusText}</div>
        <h4 className="eligibility-label">{eligibilityMessage}</h4>
        <div className="buttons">
          {buttonVisible && (
            <button id="continueBtn" onClick={nextPage}>
              Check limit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Eligibilitycheck;
