import React, { useState } from "react";
import WalletConnect from "./WalletComponents";

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
    }, 500);
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Contact Us</h1>

      {!formSubmitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      ) : (
        <div style={styles.thankYou}>
          <h2>Thanks for reaching out!</h2>
          <p>We'll get back to you soon.</p>
          <div style={styles.contactDetails}>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:fishermanscompass@gmail.com"
                style={styles.contactLink}
              >
                fishermanscompass@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919371054539"
                style={styles.contactLink}
              >
                +91 9371054539
              </a>
            </p>
            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://instagram.com/fisherman_s_compass"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.contactLink}
              >
                @fisherman_s_compass
              </a>
            </p>
          </div>
        </div>
      )}

      <div style={{ marginTop: "2rem" }}>
        <WalletConnect />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "2rem 1rem",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "1rem",
    padding: "0.75rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  thankYou: {
    marginTop: "2rem",
    textAlign: "center",
  },
  contactDetails: {
    marginTop: "1.5rem",
    fontSize: "1rem",
    textAlign: "left",
    display: "inline-block",
    wordBreak: "break-word",
    maxWidth: "100%",
  },
  contactLink: {
    color: "#007BFF",
    textDecoration: "none",
    wordWrap: "break-word",
  },
};

export default ContactUs;
