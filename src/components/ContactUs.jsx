import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const ContactUs = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.topRight}>
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div className="elfsight-app-a55d9b4c-4790-4775-9e0d-66d770209238 w-8 h-8" data-elfsight-app-lazy></div>
          <button onClick={toggleNavbar} className="lg:hidden" style={styles.button}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
        <h1>Contact Us</h1>
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
    background: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    width: "80%",
    maxWidth: "900px",
    padding: "40px",
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    position: "relative",
  },
  topRight: {
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  contactInfo: {
    marginTop: "20px",
    fontSize: "1.2rem",
  },
  link: {
    textDecoration: "none",
    color: "#0073e6",
    fontWeight: "bold",
    marginLeft: "5px",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export default ContactUs;
