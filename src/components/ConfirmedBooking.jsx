import React from "react";
import SuccessPic from "../assets/images/success-pic.png";
import Header from "./Header";
import Footer from "./Footer";

export default function ConfirmedBooking() {
  return (
    <div className="Prototype">
      <Header />
      <div className="Success">
        <div className="SuccessText">
          <span>
            table reserved successfully!
            <br />
          </span>
          <span>
            <br />
            We are waiting for you at our restaurant!
          </span>
        </div>
        <img className="SuccessPic" src={SuccessPic} alt="success-pic" />
        <a href="/">
          <button className="ButtonPrimary" style={{ width: 200, height: 40 }}>
            <div className="Label">Return to home</div>
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
