import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const AboutUs = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div style={styles.body}>
      {/* Center Top Widget & Button */}
      <div style={styles.topCenterContainer}>
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-a55d9b4c-4790-4775-9e0d-66d770209238" data-elfsight-app-lazy style={styles.languageButton}></div>
        <button onClick={toggleNavbar} className="lg:hidden" style={styles.button}>
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div style={styles.container}>
        <h1 style={styles.heading}>About Our Fish Detection System</h1>
        <p style={styles.paragraph}>
          Welcome to our advanced satellite-based Fish Detection System. Our mission is to leverage satellite technology to assist in sustainable fishing practices.
        </p>
        <p style={styles.paragraph}>
          Using cutting-edge satellite imagery and machine learning, we provide real-time data on fish populations, helping fishermen locate abundant areas while ensuring environmental sustainability.
        </p>
        <p style={styles.paragraph}>
          Our system not only helps optimize fishing routes but also minimizes fuel consumption and reduces overfishing. With AI-powered heat maps and navigation tools, our platform offers an innovative approach to marine conservation.
        </p>
        <p style={styles.paragraph}>
          By integrating GPS tracking, real-time weather updates, and predictive analytics, we empower users with actionable insights for a more efficient and eco-friendly fishing industry.
        </p>
        <p style={styles.paragraph}>
          Join us in revolutionizing the way we interact with our oceans—smart, sustainable, and satellite-driven.
        </p>
      </div>
    </div>
  );
};

const styles = {
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },
  container: {
    width: "80%",
    maxWidth: "900px",
    padding: "40px",
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  topCenterContainer: {
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
  },
  languageButton: {
    width: "40px", 
    height: "40px", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center"
  }
};

export default AboutUs;
