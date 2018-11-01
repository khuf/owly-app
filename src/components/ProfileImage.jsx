import React, { Component } from "react";
import DefaultProfilePic from "../assets/images/man.png";

class ProfileImage extends Component {
  state = {};

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile-image-outer-container">
        <div className="profile-image-inner-container c-pointer">
          <img src={this.props.image ? this.props.image : DefaultProfilePic} />
        </div>
      </div>
    );
  }
}

export default ProfileImage;
