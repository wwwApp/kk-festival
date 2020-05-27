import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavigationBar } from "kk-design-system";
import logo from "./../assets/logo.svg";

class Header extends Component {
  state = {};
  render() {
    return (
      <HeaderWrapper>
        <NavigationBar>
          <NavLink to="/">
            <img className="logo-icon" src={logo} />
          </NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </NavigationBar>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.header`
  .logo-icon {
    width: 3rem;
    height: 3rem;
  }
`;

export default Header;
