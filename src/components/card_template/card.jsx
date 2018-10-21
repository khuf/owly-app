import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./card.css";

const flip = function() {
  var card = document.querySelector(".card");
  card.classList.toggle("is-flipped");
};

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardImg: {
        backgroundImage: `url(${this.props.img})`
      }
    };
  }
  render() {
    return (
      //Removed className=".container" from the div below. Was in conflict with bootstraps .container.
      <div>
        <div onClick={flip} className="scene scene--card">
          <div className="card">
            <div
              className="card__face card__face--front"
              style={this.state.cardImg}
            >
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
