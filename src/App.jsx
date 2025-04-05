import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Chatbotfrontend from './components/Chatbotfrontend';
import Satellite1 from './components/Satellite1';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (isDark) {
      document.body.style.background = 'black';
      document.documentElement.classList.add("dark");
    } else {
      document.body.style.background = 'linear-gradient(to bottom, #60a5fa, #bfdbfe)';
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>      
      {[{ left: '10%', dur: '12s', size: '15px' },
        { left: '22%', dur: '9s', size: '17px' },
        { left: '47%', dur: '11s', size: '19px' },
        { left: '55%', dur: '8s', size: '25px' },
        { left: '63%', dur: '13s', size: '18px' },
        { left: '70%', dur: '10s', size: '14px' },
        { left: '86%', dur: '5s', size: '20px' },
        { left: '97%', dur: '18s', size: '12px' },
        { left: '30%', dur: '7s', size: '16px' },
      ].map((bubble, index) => (
        <div
          key={index}
          className="bubble"
          style={{ left: bubble.left, animationDuration: bubble.dur, width: bubble.size, height: bubble.size }}
        />
      ))}

      <div className="w-full overflow-x-hidden m-0 p-0 fixed top-0 left-0 z-50">
        <Navbar isDark={isDark} />
      </div>

      <div className="pt-20">
        {/* Dark Mode Toggle */}
        <div className="absolute top-24 right-5 z-50">
          <button
            onClick={handleToggle}
            className="bg-white text-black p-2 rounded-full shadow border border-gray-400 hover:bg-gray-200"
          >
            🌓
          </button>
        </div>

        <Chatbotfrontend />

        {location.pathname === "/" && (
          <>
            <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 z-10 relative">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white break-words">
                Welcome to Fisherman's Compass
              </h1>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white break-words">
                Find Fish, Anytime, Anywhere.
              </h3>
              <p className="text-base sm:text-lg md:text-2xl mb-6 text-white break-words max-w-[90%]">
                Real-time GPS-powered fish finder for smarter fishing.
              </p>
              <a
                href="/satellite1"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
              >
                Launch App
              </a>
            </section>

            <section className="bg-white bg-opacity-80 backdrop-blur-md py-12 px-4 relative z-10 text-black dark:text-white">
              <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">📍 GPS Location Tracking</h3>
                  <p>Know exactly where you are and where the fish are biting.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">🎣 Real-Time Fish Hotspots</h3>
                  <p>Live updates of fish activity on your map.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">🗺️ Interactive Map</h3>
                  <p>Zoom, pan, and explore fishing zones easily.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">📊 Multilingual Options</h3>
                  <p>Access the site in the language of your choice.</p>
                </div>
                <div className="sm:col-span-2">
                  <h3 className="text-xl font-semibold mb-2">🤖 Fisherbot</h3>
                  <p>Chatbot to help you with FAQs, location guidance - 24/7.</p>
                </div>
              </div>
            </section>
          </>
        )}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/satellite1" element={<Satellite1 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        <footer className="bg-blue-100 text-center py-6 mt-12 relative z-10 m-0 text-black dark:text-white">
          <p>&copy; 2025 Fisherman's Compass. Built with ❤️</p>
        </footer>
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
