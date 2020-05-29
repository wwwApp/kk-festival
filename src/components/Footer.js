import React, { Component } from "react";
import styled from "styled-components";
import { TextInput, Button } from "kk-design-system";

class Footer extends Component {
  state = {};

  render() {
    return (
      <FooterWrapper className="footer">
        <div className="o-container footer__inner">
          <div className="footer__sub-wrapper">
            <h2>Subscribe to our newsletter!</h2>
            <p>
              Make sure you subscribe and receive latest information on upcoming
              festivals and perks!
            </p>
            <form className="footer__sub-form btn--pink-wrapper">
              <label>
                <span className="u-sr-only">Newsletter subscription</span>
                <TextInput placeholder="enter your email"></TextInput>
              </label>
              <Button>subscribe</Button>
            </form>
          </div>
          <div className="footer__copyright">KK © 2020</div>
        </div>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  background-color: var(--tp-navy);
  color: var(--kk-white);

  .footer__inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 4rem 1rem 3rem;
  }

  .footer__copyright {
    text-align: center;
  }

  .footer__sub-wrapper {
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 1rem;

      @media only screen and (min-width: 768px) {
        width: 40%;
      }
    }
  }

  .footer__sub-form {
    display: flex;
    flex-direction: row;

    label > * {
      padding: 0;
    }

    & > * {
      padding: 0;
    }

    input {
      min-width: 0;

      @media only screen and (min-width: 768px) {
        width: 20rem;
      }
    }

    button {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export default Footer;
