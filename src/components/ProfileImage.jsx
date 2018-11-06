import React, { Component } from "react";

class ProfileImage extends Component {
  state = {};

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile-image-outer-container">
        <div className="profile-image-inner-container c-pointer">
          <img src={this.props.image ? this.props.image : null} />
        </div>
      </div>
    );
  }
}

export default ProfileImage;
