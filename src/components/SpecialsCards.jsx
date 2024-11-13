import React from "react";
import ButtonLogo from "../assets/images/special-card-desc-footer-button-logo.png";
import { SpecialCardsDatas } from "./SpecialsCardsData";

export default function SpecialsCards() {
  return (
    <>
      {SpecialCardsDatas.map((item, index) => (
        <article className="SpecialsCard">
          <img className="SpecialPic" src={item.cardPicture} alt="pic" />
          <div className="SpecialCardDesc">
            <div className="SpecialCardDescHeader">
              <div className="SpecialCardDescHeaderTitle">{item.cardTitle}</div>
              <div className="SpecialCardDescHeaderPrice">{item.cardPrice}</div>
            </div>
            <p className="SpecialCardDescParagraph">{item.cardParagraph}</p>
            <div className="SpecialCardDescFooter">
              <button className="SpecialCardDescFooterButton">
                Order a delivery{" "}
              </button>
              <img
                className="SpecialCardDescFooterButtonLogo"
                src={ButtonLogo}
                alt="orderLogo"
              />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
