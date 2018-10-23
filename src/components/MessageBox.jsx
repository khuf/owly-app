import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class MessageBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
        <ModalBody>{this.props.message}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>
            {this.props.buttonText}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default MessageBox;
