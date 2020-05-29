import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  state = {};
  render() {
    return (
      <HeaderWrapper>
        <div className="o-container">
          <div class="logo">
            techno<div class="logo__kick">pop</div>
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.header`
  /* .logo-icon {
    width: 3rem;
    height: 3rem;
  } */

  position: absolute;
  top: 0;
  width: 100%;
  z-index: 5;

  .logo {
    font-size: 3rem;
    line-height: 1.85rem;
    padding: 2rem 0;
    color: var(--kk-white);
  }

  .logo__kick {
    font-weight: 700;
    color: var(--tp-pink);
  }
`;

export default Header;
