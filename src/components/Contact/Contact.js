import React from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <>
      <header className="contact-header">
        <h1>We want to hear from you</h1>
      </header>
      <div className="form-info-box">
        <div className="why-contact">
          <h2>Why bother?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            vitae auctor eu augue ut lectus. Orci dapibus ultrices in iaculis
            nunc sed augue lacus viverra. A cras semper auctor neque vitae. Non
            consectetur a erat nam at lectus. Dignissim sodales ut eu sem
            integer vitae justo eget magna.
          </p>
          <p>
            Lectus magna fringilla urna porttitor rhoncus dolor purus non.
            Aliquet lectus proin nibh nisl condimentum id. Non consectetur a
            erat nam at lectus. Dignissim sodales ut eu sem integer vitae justo
            eget magna.
          </p>
          <p>
            Ultrices vitae auctor eu augue ut lectus. Orci dapibus ultrices in
            iaculis nunc sed augue lacus viverra. A cras semper auctor neque
            vitae. Non consectetur a erat nam at lectus. Dignissim sodales ut eu
            sem integer vitae justo eget magna.
          </p>
          <a href="https://paypal.com" target="_blank" rel="noreferrer">
            <i class="im im-paypal"></i>
          </a>
        </div>
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
