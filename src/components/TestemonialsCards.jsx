import React from "react";
import { TestemonialsCardsData } from "./TestemonialsCardsData";

export default function TestemonialsCards() {
  return (
    <>
      {TestemonialsCardsData.map((item, index) => (
        <div className="TestimonialsCard">
          <div className="TestimonialsCardRating">
            <img className="Star" src={item.cardFilledStar} alt="star" />
            <img className="Star" src={item.cardFilledStar} alt="star" />
            <img className="Star" src={item.cardFilledStar} alt="star" />
            <img className="Star" src={item.cardFilledStar} alt="star" />
            <img className="Star" src={item.cardFilledStar} alt="star" />
          </div>
          <div className="TestimonialsCardProfile">
            <img
              className="TestimonialsCardProfilePic"
              src={item.cardPicture}
              alt="pfp"
            />
            <div className="TestimonialsCardProfileNames">
              <div className="TestimonialsCardProfileFullname">
                {item.cardFullName}
              </div>
              <div className="TestimonialsCardProfileNickname">
                {item.cardNickName}
              </div>
            </div>
          </div>
          <p className="TestimonialsCardParagraph">{item.cardParagraph}</p>
        </div>
      ))}
    </>
  );
}
