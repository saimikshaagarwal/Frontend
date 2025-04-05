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

  return (
    <>
      {/* Bubbles on all pages */}
      <div className="bubble" style={{ left: '10%', animationDuration: '12s', width: '15px', height: '15px' }}></div>
      <div className="bubble" style={{ left: '22%', animationDuration: '9s', width: '17px', height: '17px' }}></div>
      <div className="bubble" style={{ left: '47%', animationDuration: '11s', width: '19px', height: '19px' }}></div>
      <div className="bubble" style={{ left: '55%', animationDuration: '8s', width: '25px', height: '25px' }}></div>
      <div className="bubble" style={{ left: '63%', animationDuration: '13s', width: '18px', height: '18px' }}></div>
      <div className="bubble" style={{ left: '70%', animationDuration: '10s', width: '14px', height: '14px' }}></div>
      <div className="bubble" style={{ left: '86%', animationDuration: '5s', width: '20px', height: '20px' }}></div>
      <div className="bubble" style={{ left: '97%', animationDuration: '18s', width: '12px', height: '12px' }}></div>
      <div className="bubble" style={{ left: '30%', animationDuration: '7s', width: '16px', height: '16px' }}></div>

      {/* Simple Navbar without slider */}
      <div className="w-full overflow-x-hidden m-0 p-0 fixed top-0 left-0 z-50">
        <Navbar />
      </div>
      <div className="pt-20">
        <Chatbotfrontend />

        {/* Home page hero and features */}
        {location.pathname === "/" && (
          <>
            <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 z-10 relative">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white break-words">Welcome to Fisherman's Compass</h1>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white break-words">Find Fish, Anytime, Anywhere.</h3>
              <p className="text-base sm:text-lg md:text-2xl mb-6 text-white break-words max-w-[90%]">Real-time GPS-powered fish finder for smarter fishing.</p>
              <a href="/satellite1" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
                Launch App
              </a>
            </section>

            <section className="bg-white bg-opacity-80 backdrop-blur-md py-12 px-4 relative z-10 text-black">
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
                  <h3 className="text-xl font-semibold mb-2">🤖Fisherbot</h3>
                  <p>Chatbot to help you with FAQs, location guidance-24/7.</p>
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

        {/* Footer on all pages */}
        <footer className="bg-blue-100 text-center py-6 mt-12 relative z-10 m-0">
          <p>&copy; 2025 Fisherman's Compass. Built with ❤️</p>
        </footer>
      </div>
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
