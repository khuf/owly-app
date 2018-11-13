import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Collapsible from "./Collapsible";
import Info207 from "./PlaceH_INF207";
import Info262 from "./PlaceH_INFO262";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });

    if (!this.state.collapse) {
      document.getElementById("i").className = "fas fa-angle-down fa-3x faster";
    } else {
      document.getElementById("i").className = "fas fa-angle-down fa-3x";
    }
  }

  render() {
    return (
      <Carousel showThumbs={false} emulateTouch>
        <div>
          <Collapsible />
        </div>
        <div>
          <Info207 />
        </div>
        <Info262 />
      </Carousel>
    );
  }
}

export default Slide;
