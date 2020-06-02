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
`;

export default TPFooter;
