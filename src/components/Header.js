import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "kk-design-system";

const TPHeader = (props) => {
  const logo = (
    <LogoWrapper className="logo">
      techno<div className="logo__kick">pop</div>
    </LogoWrapper>
  );

  return (
    <HeaderWrapper>
      <Header logo={logo} />
    </HeaderWrapper>
  );
};

const LogoWrapper = styled.div`
  font-size: 3rem;
  line-height: 1.85rem;
  color: var(--kk-white);
  cursor: default;

  .logo__kick {
    font-weight: 700;
    color: var(--tp-pink);
  }
`;

const HeaderWrapper = styled.div`
  z-index: 5;
  position: relative;
  top: 0;
  height: 0;
`;

export default TPHeader;
