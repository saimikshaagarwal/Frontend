import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Chatbotfrontend from './components/Chatbotfrontend';
import Satellite1 from './components/Satellite1';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  const location = useLocation(); // Get current route

  return (
    <>
      <Navbar />
      <Chatbotfrontend />

      {/* Show the welcome section ONLY on the home page */}
      {location.pathname === "/" && (
        <div 
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            color: "white",
            background: "rgba(0, 0, 0, 0.3)",
            padding: "20px",
            borderRadius: "10px",
            fontSize: "clamp(1.5rem, 5vw, 3rem)", // Responsive font size
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 8vw, 5rem)", // Ensure font size scales on mobile
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Welcome to Fisherman's Compass
          </h1>
          <p
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3.3rem)", // Scalable text for mobile
              maxWidth: "80%",
              fontWeight: "600",
            }}
          >
            Navigate smarter and fish sustainably with real-time interactive maps
          </p>
        </div>
      )}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/satellite1" element={<Satellite1 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Chatbotfrontend />
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
