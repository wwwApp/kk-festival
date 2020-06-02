import React, { Component } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { Button, TextInput, SelectorInput } from "kk-design-system";

const options = [
  { value: 1, label: "one tickets" },
  { value: 2, label: "two tickets" },
  { value: 3, label: "three tickets" },
  { value: 4, label: "four tickets" },
  { value: 5, label: "five tickets" },
];

class TicketModal extends Component {
  modalContent = () => {
    return (
      <ModalWrapper>
        <div className="modal__title-wrapper">
          <h1 className="modal__title">Checkout</h1>
          <p className="modal__desc">
            ...you selected the ‘{this.props.selectedTicket}’ pkg
          </p>
          <Button onClick={this.props.toggleModal}>change pkg</Button>
          <button className="modal__close-btn" onClick={this.props.toggleModal}>
            &#xd7;
          </button>
        </div>
        <form className="modal__form-wrapper">
          <label>
            Number of Tickets (max 5)
            <SelectorInput options={options} />
          </label>
          <label>
            Full Name
            <TextInput placeholder="" />
          </label>
          <label>
            Credit Card
            <TextInput placeholder="" />
            <div className="additional-cc-info">
              <TextInput placeholder="CVV" />
              <TextInput placeholder="EXP date" />
            </div>
          </label>
          <div className="modal__form-submit">
            <Button
              buttonStyle="btn--primary--outline"
              onClick={this.props.toggleModal}
            >
              purchase
            </Button>
          </div>
        </form>
        <div className="modal__price">
          Your total
          <div className="ticket-price">$1350.00</div>
        </div>
      </ModalWrapper>
    );
  };

  render() {
    return (
      <Modal
        isOpen={this.props.visible}
        onRequestClose={this.props.toggleModal}
        style={customStyles}
      >
        {this.modalContent()}
      </Modal>
    );
  }
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: 0,
    width: "50rem",
    maxWidth: "90vw",
    maxHeight: "90vh",
    backgroundColor: "var(--tp-navy)",
    color: "var(--kk-white)",
    margin: "1rem",
  },
  overlay: {
    zIndex: 9999,
    // backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ModalWrapper = styled.div`
  position: relative;
  margin: 1rem;

  @media only screen and (min-width: 768px) {
    margin: 2rem;
  }

  .modal__title-wrapper {
    margin-bottom: 2rem;
    position: relative;

    .modal__title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .modal__desc {
      font-size: 1.5rem;
    }
  }

  .modal__form-wrapper {
    label {
      position: relative;
      display: block;
      margin-bottom: 1rem;

      & > div {
        display: block;
        width: 25rem;
        max-width: 100%;

        .c-select {
          min-width: 0;
        }

        input {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }
      }
    }

    .additional-cc-info {
      display: flex;

      & > div {
        width: 50%;
      }
    }
  }

  .modal__form-submit {
    margin-bottom: 1rem;

    @media only screen and (min-width: 768px) {
      text-align: right;
      margin-bottom: 0;
      width: 25rem;
    }
  }

  .modal__price {
    right: 0;
    bottom: 0;
    font-size: 2rem;
    line-height: 2.5rem;

    @media only screen and (min-width: 768px) {
      position: absolute;
    }
  }

  .modal__close-btn {
    position: absolute;
    right: 0;
    top: 0;
    color: var(--kk-white);
    font-size: 2rem;
  }
`;

export default TicketModal;
