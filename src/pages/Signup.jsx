import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import "../styles/shared.css";
import "../styles/main.css";
import "toastify-js/src/toastify.css";
import { Helmet } from "react-helmet-async";

const Signup = ({ showToast }) => {
  const navigate = useNavigate();

  // Define state variables for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [dataUsage, setDataUsage] = useState("");
  const [dataLine, setDataLine] = useState("");
  const [dob, setDob] = useState("");
  const [county, setCounty] = useState("");



  

  const handleSignup = (e) => {
  e.preventDefault();

  if (!name.trim() || !county || !dataLine || !phone || !password || !email || !dob) {
    alert("Please fill in all the required fields.");
    return;
  }

   // Phone number format check
  if (!/^07\d{8}$/.test(phone)) {
    alert("Please enter a valid Kenyan MPESA phone number starting with 07.");
    return;
  }

   // Password validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }
    // Save details
  localStorage.setItem("name", name);
localStorage.setItem("phone", phone);
localStorage.setItem("email", email);
localStorage.setItem("dob", dob);
localStorage.setItem("county", county);
localStorage.setItem("dataLine", dataLine);
localStorage.setItem("dataUsage", dataUsage);

  navigate('/Appdet'); // or use appropriate path
    // Show toast after saving
    if (typeof showToast === "function") {
      console.log("Toast function exists. Showing toast...");
      showToast();

      // Wait briefly so toast has time to show
      setTimeout(() => {
        navigate("/Eligibilitycheck");
      }, 200); // 200ms delay is usually enough
    } else {
      console.log("Toast function not passed!");
      navigate("/Eligibilitycheck");
    }
  };

  
  return (
    <>
      {/* PWA Install Popup */}
      <div id="pwa-install-popup">
        <div className="pwa-popup-content">
          <div className="gif-container">
            <img
              src="assets/process.gif"
              alt="Authorization GIF"
              id="gifcontent"
            />
          </div>
        </div>
      </div>

      {/* Preloader Section */}
      <div
        className="preloader"
        id="preloader"
        style={{ opacity: 0, display: "none" }}
      >
        <div className="loader">
          <div className="arc"></div>
          <div className="arc"></div>
          <div className="arc"></div>
        </div>
        <div className="preloader-text">Loading, please wait...</div>
      </div>

      <div className="main-container">
        <div className="left-content">
          <h1>
            DATA <br /> CHAPCHAP
          </h1>
          <p>
            Let DATA CHAPCHAP help you stay online without stress.
             Whether it’s for work, school, emergencies, or entertainment,
              get the data you need — fast, affordable, and reliable.
          </p>
        </div>

        <div className="form-wrapper">
          <h1>Find Your Data bundles Eligibility</h1>
          <h3>We offer data bundles from 5GB - 200GB instantly in your online data line</h3>

          <form id="loanForm" onSubmit={handleSignup}>
            {/* Fields for user to input information */}
            <input
              type="text"
              id="names"
              placeholder="Input User Name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
              required
            />
            <select 
             id="county"
  value={county}
  onChange={(e) => setCounty(e.target.value)}
  required
>
              <option value="mombasa">Mombasa</option>
              <option value="kwale">Kwale</option>
              <option value="kilifi">Kilifi</option>
              <option value="tana_river">Tana River</option>
              <option value="lamu">Lamu</option>
              <option value="taita_taveta">Taita-Taveta</option>
              <option value="garissa">Garissa</option>
              <option value="wajir">Wajir</option>
              <option value="mandera">Mandera</option>
              <option value="marsabit">Marsabit</option>
              <option value="isiolo">Isiolo</option>
              <option value="meru">Meru</option>
              <option value="tharaka_nithi">Tharaka-Nithi</option>
              <option value="embu">Embu</option>
              <option value="kitui">Kitui</option>
              <option value="machakos">Machakos</option>
              <option value="makueni">Makueni</option>
              <option value="nyandarua">Nyandarua</option>
              <option value="nyeri">Nyeri</option>
              <option value="kirinyaga">Kirinyaga</option>
              <option value="murang_a">Murang’a</option>
              <option value="kiambu">Kiambu</option>
              <option value="turkana">Turkana</option>
              <option value="west_pokot">West Pokot</option>
              <option value="samburu">Samburu</option>
              <option value="trans_nzoia">Trans Nzoia</option>
              <option value="uasin_gishu">Uasin Gishu</option>
              <option value="elgeyo_marakwet">Elgeyo-Marakwet</option>
              <option value="nandi">Nandi</option>
              <option value="baringo">Baringo</option>
              <option value="laikipia">Laikipia</option>
              <option value="nakuru">Nakuru</option>
              <option value="narok">Narok</option>
              <option value="kajiado">Kajiado</option>
              <option value="kericho">Kericho</option>
              <option value="bomet">Bomet</option>
              <option value="kakamega">Kakamega</option>
              <option value="vihiga">Vihiga</option>
              <option value="bungoma">Bungoma</option>
              <option value="busia">Busia</option>
              <option value="siaya">Siaya</option>
              <option value="kisumu">Kisumu</option>
              <option value="homa_bay">Homa Bay</option>
              <option value="migori">Migori</option>
              <option value="kisii">Kisii</option>
              <option value="nyamira">Nyamira</option>
              <option value="nairobi">Nairobi</option>
            </select>

            <select
  id="dataLine"
  value={dataLine}
  onChange={(e) => setDataLine(e.target.value)}
  required
>
  <option value="" disabled>
    Select your Data Line Provider
  </option>
  <option value="Safaricom">Safaricom</option>
  <option value="Airtel">Airtel</option>
  <option value="Telkom">Telkom</option>
  <option value="Faiba">Faiba</option>
</select>
            <input
              type="tel"
              id="mpesas"
              name="mpesas"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="^07\d{8}$" // Validates Kenyan phone numbers starting with '07' and 10 digits long
              title="Enter a valid Kenyan phone number starting with 07"
            />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
              title="Password must be at least 6 characters long"
              style={{ paddingRight: "30px" }} // Add space for the eye icon
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
            <select
  id="dataUsage"
  value={dataUsage}
  onChange={(e) => setDataUsage(e.target.value)}
>
  <option value="" disabled>
    How do you use your data bundles? (optional)
  </option>
  <option value="Online Work / Freelancing">Online Work / Freelancing</option>
  <option value="Remote Job / Virtual Meetings">Remote Job / Virtual Meetings</option>
  <option value="Academic Research / Online Classes">Academic Research / Online Classes</option>
  <option value="YouTube / Music / Video Streaming">YouTube / Music / Video Streaming</option>
  <option value="Social Media (WhatsApp, Facebook, etc.)">Social Media (WhatsApp, Facebook, etc.)</option>
  <option value="Mobile Browsing & Communication">Mobile Browsing & Communication</option>
  <option value="Running an Online Business">Running an Online Business</option>
  <option value="Home Wi-Fi / Smart Devices Use">Home Wi-Fi / Smart Devices Use</option>
  <option value="Gaming / Online Tournaments">Gaming / Online Tournaments</option>
  <option value="Mobile Money / Financial Apps">Mobile Money / Financial Apps</option>
  <option value="Other">Other</option>
</select>           
           <input
  id="DOB"
  placeholder="Date of Birth: dd/mm/yy"
  value={dob}
  onChange={(e) => setDob(e.target.value)}
  required
/>
            <button
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Next
            </button>
          </form>

          <p className="note">
           No delays. No paperwork. Just data, when you need it.
          </p>
          <p className="disclaimer">
            By submitting you confirm that you accept the{" "}
            <a href="#">Terms and Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <footer>
        <p>
          © 2025 Data ChapChap All rights reserved. <a href="/">Home</a>
          <a href="/login">Login</a>
        </p>
      </footer>
    </>
  );
};

export default Signup;
