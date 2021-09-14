import React from "react";
import "./FundUs.css";

function FundUs() {
  return (
    <section>
      <div className="hero-section-funding">
        <h1>Money is the name of the game</h1>
        <h2>Chip in if you love my work</h2>
      </div>
      <div className="content-section-funding">
        <p>
          We run on donations so if you love what you see and read on my site
          you can drop me a monetary tip for the hardwork right here: <br />{" "}
          <a href="https://paypal.com" target="_blank" rel="noreferrer">
            Fake PayPal!{" "}
          </a>
        </p>
      </div>
    </section>
  );
}

export default FundUs;
