import { useState } from "react";

const AboutUs = () => {
  return (
    <div style={styles.body}>
      {/* Center Top Widget */}
      <div style={styles.topCenterContainer}>
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-a55d9b4c-4790-4775-9e0d-66d770209238" data-elfsight-app-lazy style={styles.languageButton}></div>
      </div>

      <div style={styles.container}>
        <h1 style={styles.heading}>About Our Fish Detection System</h1>
        <p style={styles.paragraph}>
          Welcome to our advanced satellite-based Fish Detection System. Our mission is to leverage satellite technology to assist in sustainable fishing practices.
        </p>
        <p style={styles.paragraph}>
          Using cutting-edge satellite imagery, we provide real-time data on fish populations, helping fishermen locate abundant areas while ensuring environmental sustainability.
        </p>
        <p style={styles.paragraph}>
          Our system not only helps optimize fishing routes but also minimizes fuel consumption and reduces overfishing. With AI-powered heat maps and navigation tools, our platform offers an innovative approach to marine conservation.
        </p>
        <p style={styles.paragraph}>
          By integrating GPS tracking, and predictive analytics, we empower users with actionable insights for a more efficient and eco-friendly fishing industry.
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
    background: "linear-gradient(180deg, #B0E0E6 0%, #00BFFF 100%)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    padding: "0 10px", // Padding added for mobile responsiveness
    boxSizing: "border-box",
  },
  container: {
    width: "100%",
    maxWidth: "900px",
    padding: "20px",
    background: "rgba(0, 0, 139, 0.9)",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    margin: "20px 0", // Margin to avoid overflow and give space around content
    boxSizing: "border-box",
    overflowX: "hidden", // Ensure content doesn't overflow horizontally
  },
  heading: {
    fontSize: "2.5rem", // Make heading size responsive for mobile
    marginBottom: "20px",
    padding: "0 10px", // Added padding to ensure heading fits
    wordWrap: "break-word", // Ensure long words wrap properly
    textAlign: "center", // Ensure heading is centered
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "15px",
    wordWrap: "break-word", // Ensure long words wrap in paragraph
  },
  topCenterContainer: {
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%", // Ensure widget does not overflow
    zIndex: 10, // Ensure it's on top of content
  },
  languageButton: {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Media Queries for mobile responsiveness
  "@media (max-width: 768px)": {
    body: {
      padding: "0 10px",
    },
    heading: {
      fontSize: "1.8rem", // Adjust font size for smaller screens
      marginBottom: "10px", // Reduce margin to fit on smaller screens
    },
    paragraph: {
      fontSize: "1rem", // Adjust paragraph font size for mobile
    },
    container: {
      padding: "15px", // Adjust padding for smaller devices
    },
    topCenterContainer: {
      top: "5px", // Adjust for mobile screens
    },
  },
};

export default AboutUs;
