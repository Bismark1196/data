import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./App.css";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup";
import Eligibilitycheck from "./pages/Eligibilitycheck";
import Savings from "./pages/Savings";
import Appdet from "./pages/Appdet";
import Verification from "./pages/Verification";
import Review from "./pages/Review";

const users = [
  { name: "Ali Kamau", phone: "0712345123", amount: 8700 },
  { name: "Jane Njeri", phone: "0723456789", amount: 4500 },
  { name: "Samuel Kibet", phone: "0709876543", amount: 6100 },
  { name: "John Mwangi", phone: "0711122233", amount: 5000 },
  // ... you can keep all the rest
];

const generateTransactionID = () =>
  "TEF" + Math.floor(1000 + Math.random() * 9000);
const maskTransactionID = (txid) => txid.slice(0, 3) + "****";
const maskPhoneNumber = (phone) =>
  phone.slice(0, 2) + "** ***" + phone.slice(7);
const formatDate = (date) =>
  `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
const formatTime = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
};

const showToast = () => {
  const user = users[Math.floor(Math.random() * users.length)];
  const date = new Date();
  const txid = generateTransactionID();
  const msg = `${maskTransactionID(txid)} Confirmed ${user.amount} sent to ${user.name} (${maskPhoneNumber(user.phone)}) on ${formatDate(date)} ${formatTime(date)}`;

  Toastify({
    text: msg,
    duration: 10000,
    gravity: "top",
    position: "right",
    style: { background: "#02c122da", color: "#fff" },
  }).showToast();
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Routes>
          <Route path="/" element={<Home showToast={showToast} />} />
          <Route path="/signup" element={<Signup showToast={showToast} />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/appdet" element={<Appdet />} />
          <Route path="/eligibilitycheck" element={<Eligibilitycheck />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}


