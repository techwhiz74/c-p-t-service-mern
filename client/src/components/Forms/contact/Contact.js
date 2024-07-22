import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.2 },
      });

      animation2.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.4 },
      });
      animation3.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.4 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 50,
      });

      animation2.start({
        opacity: 0,
        y: -100,
      });
      animation3.start({
        opacity: 0,
        y: 100,
      });
    }

    console.log("inView", inView);
  }, [inView, animation, animation2, animation3]);

  const initialFormData = {
    fullName: "",
    organization: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailjs.init("tMlFyEVmgVGBEb4JO");

    const emailParams = {
      to_email: "markloughlingm@gmail.com",
      from_name: formData.fullName,
      organization: formData.organization,
      phone_number: formData.phoneNumber,
      email_address: formData.emailAddress,
      message: formData.message,
    };

    try {
      await emailjs.send("service_ccfo6aa", "template_7eu0ycd", emailParams);

      setFormData(initialFormData);
      setSubmissionStatus("success");
      setErrorMessage("");
      console.log("Email sent successfully!");
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Error sending email. Please try again.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="full-container">
      <motion.h1 className="contactHeading" animate={animation}>
        Get In Touch
      </motion.h1>
      <div className="card-container" ref={ref}>
        <motion.div className="contactCard" animate={animation2}>
          <h2>Contact Us</h2>
                    
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization:</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address:</label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control"
                style={{minHeight:300}}
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            {submissionStatus === "success" && (
              <p className="submission-success">Message sent successfully!</p>
            )}
            {submissionStatus === "error" && (
              <p className="submission-error">{errorMessage}</p>
            )}
          </form>
        </motion.div>
        <motion.div className="contactCard" animate={animation3}>
          <h2>Address</h2>
          <iframe
            title="This is a unique title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7785916.048345349!2d4.3914067294194945!3d17.663566181182347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1198304cfa812ae1%3A0x1649c0960397249a!2sAgadez%2C%20Niger!5e0!3m2!1sen!2sde!4v1721130975937!5m2!1sen!2sde"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
