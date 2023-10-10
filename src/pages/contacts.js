import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello {userName}</h3>
          <p>Want to get in contact?</p>
          <address>
            Ottawa, ON, Canada <br />
            P: <a href="tel:819-329-7085">819-329-7085</a>
            <br />
            E:{" "}
            <a href="mailto://ayushmanisharma@gmail.com">
              ayushmanisharma@gmail.com
            </a>
          </address>
        </div>

        {/* contact form section  */}
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* Name */}
            <label for="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* Email */}
            <label for="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;