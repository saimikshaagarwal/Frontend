import { useState } from "react";

const ContactUs = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us through any of the following channels:</p>

        <div style={styles.contactInfo}>
          <p>
            <strong>Email:</strong>
            <a href="mailto:fishermanscompass@gmail.com" style={styles.link}>
              fishermanscompass@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+919371054539" style={styles.link}>
              +91 9371054539
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>
            <a href="https://www.instagram.com/fisherman_s_compass" target="_blank" rel="noopener noreferrer" style={styles.link}>
              @fisherman_s_compass
            </a>
          </p>
        </div>

        <div className="elfsight-app-a55d9b4c-4790-4775-9e0d-66d770209238" data-elfsight-app-lazy></div>
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
    color: "#ffffff",
    padding: "0 10px", // To ensure some padding on mobile screens
    boxSizing: "border-box",
  },
  container: {
    width: "100%",
    maxWidth: "900px",
    padding: "40px",
    background: "rgba(0, 0, 139, 0.9)",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    position: "relative",
    margin: "10px 0", // Margin to prevent overflow on smaller screens
  },
  heading: {
    fontSize: "2rem", // Reduced font size for mobile
    marginBottom: "20px",
  },
  contactInfo: {
    marginTop: "20px",
    fontSize: "1.2rem",
  },
  link: {
    textDecoration: "none",
    color: "#4AA3E6",
    fontWeight: "bold",
    marginLeft: "5px",
  },
};

export default ContactUs;
