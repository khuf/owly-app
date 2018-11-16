import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/card.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "@fortawesome/fontawesome-free";
import { Link } from "react-router-dom";

class CourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardImg: {
        backgroundImage: `url(${this.props.img})`
      },
      modal: false,
      centered: true
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const closeBtn = (
      <i className="far fa-times-circle fa-2x" onClick={this.toggle} />
    );
    return (
      <div>
        <div onClick={this.toggle} className="card" style={this.state.cardImg}>
          <div className="titleLayer">
            <h6 className="title">{this.props.courseCode}</h6>
            <h6 className="subTitle">{this.props.courseName}</h6>
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          centered={this.state.centered}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            <a className="headerText">
              {this.props.courseCode}/{this.props.courseName}
            </a>
          </ModalHeader>
          <ModalBody>
            <span className="thing">Lorem</span> ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.luptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborumdd.
          </ModalBody>

          <ModalFooter>
            <div className="footerIcons progressIcon">
              <Link to={"/courses/" + this.props.courseCode} />
              <a className="iconName">Progress</a>
            </div>
            <div className="footerIcons cMaterialIcon" onClick={this.toggle}>
              <a className="iconName">Materials</a>
            </div>
            <div className="footerIcons scheduleIcon" onClick={this.toggle}>
              <a className="iconName">Schedule</a>
            </div>
            <div className="footerIcons addIcon" onClick={this.toggle}>
              <a className="iconName">Add to List</a>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CourseCard;
