import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./card.css";

const flip = function() {
  var card = document.querySelector(".card");
  card.classList.toggle("is-flipped");
};

class Card extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="container">
        <div onClick={flip} className="scene scene--card">
          <div className="card">
            <div className="card__face card__face--front">
              <div className="titleLayer">
                <h6 className="title">{this.props.courseCode}</h6>
                <h6 className="subTitle">{this.props.courseName}</h6>
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
