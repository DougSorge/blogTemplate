import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xyylllqv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-1">
      <input id="name" type="text" name="name" placeholder="Name" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input id="email" type="email" name="email" placeholder="Email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input id="topic" type="text" name="topic" placeholder="Topic" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Message" rows="10" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
