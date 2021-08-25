import React from 'react';
import styled from 'styled-components';
// import logo from './../images/logo.jpg';
const Nav=styled.nav`
  margin:5px;
  width: 100%;
  top: 0;
  left: 0;
  background: #FFFFFF;;
  z-index: 1;
  flex-wrap:wrap;
  & img{
      flex:right;
      margin:10px 100px;
  }
`;
const NavLinks = styled.ul`
  float:right;
  padding-left:165px;
  padding-right:100px;
  padding-top:20px;
  padding-botton:20px;
//   justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #18191F;
    font-feature-settings: 'salt' on, 'liga' off;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    margin: 0 1.0rem;
    font:roboto;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    font-weight:bold;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
const Button = styled.button`
  background: #0F6EFF;
  margin:0 1.0rem;
  color: white;
  cursor: pointer;
  height: 40px;
  width: 155px;
  font-size: 0.85em;
  border: none;
  border-radius: 6px 6px 6px 6px;
  font: poppins;
  font-weight: 630;
  text-align: center;
  letter-spacing: 0.4px;
`;
const Navbar = (props) => {
    return(
        <Nav>
            <img id="logo" src={require('./../images/logo.jpg').default} alt= "logo"/>
            <NavLinks >
            <a href="/">Services</a>
            <a href="/">Why us</a>
            <a href="/">About</a>
            <a href="/">Pricing</a>
            <a href="/">Contact</a>
            <Button >Get Early Access</Button>
          </NavLinks>
        </Nav>
    );
}
export default Navbar;