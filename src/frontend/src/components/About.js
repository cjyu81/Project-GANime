import React from "react";
import "./About.css";
import AboutCard from "./AboutCard";

function Cards() {
  return (
    <div className="cards">
      <h1>What the heck is Ganime?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <AboutCard
              src="images/aboutImg.png"
              text="Inspired by Waifu Labs, we created Ganime, a web application that uses a generative adversarial network (GAN) to generate new images of anime backgrounds."
              title="Inspiration"
            />
            <AboutCard
              src="images/meetImg.jpg"
              text="Nick, Dan, and Charlie worked on the GAN.  Vince and Vardan worked on the Frontend.  Evan worked on the Backend. "
              title="Meet the team"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
