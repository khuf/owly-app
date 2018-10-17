import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./card.css";

const flipToBack = function() {
  var card = document.querySelector(".card");
  card.classList.toggle("is-flipped");
};

const flipToFront = function() {
  var card = document.querySelector(".card");
  card.classList.toggle("is-flipped");
};

let frontToBack = true;

const comp = function() {
  if (frontToBack) {
    console.log("flipping to back");
    flipToBack();
    frontToBack = false;
  } else {
    console.log("flipping to front");
    flipToFront();
    frontToBack = true;
  }
};

class Card extends Component {
  render() {
    return (
      <div className="container">
        <div onClick={comp} className="scene scene--card">
          <div className="card">
            <div className="card__face card__face--front">
              <div className="titleLayer">
                <h1 className="title">INFO212</h1>
                <h5 className="subTitle">SYSTEMUTVIKLING</h5>
              </div>
            </div>
            <div className="card__face card__face--back" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
