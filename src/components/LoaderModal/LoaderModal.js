import React, { Component } from "react";
import Modal from "react-modal";
import { BeatLoader } from "react-spinners";
import PropTypes from "prop-types";

class LoaderModal extends Component {
  // componentWillMount() {
  //     Modal.setAppElement('body');
  // }

  render() {
    return (
      <Modal
        isOpen={this.props.status}
        contentLabel="Loader Modal"
        overlayClassName={"loader-modal-overlay"}
        className={"loader-modal-content"}
      >
        <BeatLoader sizeUnit={"px"} color={"#001061"} size={13} margin={"1px"} loading={true} />
      </Modal>
    );
  }
}

LoaderModal.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default LoaderModal;
