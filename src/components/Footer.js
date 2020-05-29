import React, { Component } from "react";
import styled from "styled-components";
import { TextInput, Button, Footer } from "kk-design-system";

const TPFooter = (props) => {
  return (
    <FooterWrapper className="footer-wrapper">
      <Footer
        title="Subscribe to our newsletter!"
        description="Make sure you subscribe and receive latest information on upcoming
            festivals and perks!"
        btnText="subscribe"
      />
    </FooterWrapper>
  );
};

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

export default TPFooter;
