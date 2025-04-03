import { useState } from "react";

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Simulate sending message (e.g., API call, etc.)
    setTimeout(() => {
      setFormSubmitted(true); // Set form submission to true after "sending" message
    }, 1000);
  };

  return (
    <div style={styles.body}>
      {/* Center Top Widget */}
      <div style={styles.topCenterContainer}>
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div
          className="elfsight-app-a55d9b4c-4790-4775-9e0d-66d770209238"
          data-elfsight-app-lazy
          style={styles.languageButton}
        ></div>
      </div>

      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Us</h1>

        {/* Show initial content before form submission */}
        {!formSubmitted && (
          <>
            <p style={styles.paragraph}>
              We would love to hear from you! Whether you have a question, suggestion, or feedback, feel free to reach out to us.
            </p>
            <p style={styles.paragraph}>
              Our team is here to assist you and provide the best possible experience with our Fish Detection System.
            </p>
            <p style={styles.paragraph}>
              You can contact us through email or by using the form below. We look forward to connecting with you!
            </p>
          </>
        )}

        {/* Show contact information after form submission */}
        {formSubmitted ? (
          <div style={styles.contactInfo}>
            <h2>We’d love to hear from you! Reach out to us through any of the following channels:</h2>
            <p><strong>Email:</strong> fishermanscompass@gmail.com</p>
            <p><strong>Phone:</strong> +91 9371054539</p>
            <p><strong>Instagram:</strong> @fisherman_s_compass</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.formLabel}>Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.formLabel}>Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.formLabel}>Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                style={styles.formInput}
              ></textarea>
            </div>
            <button type="submit" style={styles.submitButton}>Send Message</button>
          </form>
        )}
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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "10px",
  },
  formGroup: {
    marginBottom: "15px",
    width: "100%",
  },
  formLabel: {
    fontSize: "1.1rem",
    marginBottom: "5px",
    textAlign: "left",
  },
  formInput: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    backgroundColor: "#00BFFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
  contactInfo: {
    background: "#00BFFF",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
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
    languageButton: {
      width: "35px", // Smaller button for mobile
      height: "35px",
    },
  },
};

export default ContactUs;
