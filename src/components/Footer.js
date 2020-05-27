import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  state = {};

  render() {
    return (
      <FooterWrapper className="footer bg--black">
        <div className="copyright">KK © 2020</div>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .copyright {
    text-align: center;
  }
`;

export default Footer;
