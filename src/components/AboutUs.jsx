import { useState } from "react";

const AboutUs = () => {
  return (
    <div style={styles.body}>
      {/* Top Right Language Widget */}
      

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
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    padding: "0 10px",
    boxSizing: "border-box",
  },
  container: {
    width: "100%",
    maxWidth: "900px",
    padding: "20px",
    background: "rgba(0, 0, 139, 0.9)",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    margin: "20px 0",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    padding: "0 10px",
    wordWrap: "break-word",
    textAlign: "center",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "15px",
    wordWrap: "break-word",
  },
  topRightContainer: {
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px",
    zIndex: 10,
  },
  languageButton: {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "@media (max-width: 768px)": {
    body: {
      padding: "0 10px",
    },
    heading: {
      fontSize: "1.8rem",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1rem",
    },
    container: {
      padding: "15px",
    },
    topRightContainer: {
      top: "5px",
      right: "5px",
    },
  },
};

export default AboutUs;
