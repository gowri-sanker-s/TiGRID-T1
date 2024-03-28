import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo2.png";
import "../css/main.css";
const Navbar = () => {
  const [active, setActive] = useState(null);
  const [responsive, setResponsive] = useState(true);

  const toggleNavbar = () => {
    setResponsive(!responsive);
  };
  const list = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "MODE OF OPERATION",
    "WHY CHOOSE US",
    "GALLERY",
    "TESTIMONIALS",
    "CONTACT US",
  ];

  return (
    <>
      <Navigation>
        <h1>
          <a href="">
            <Image src={logo} alt="Logo not found" />
          </a>
        </h1>
        <NavLists>
          {list.map((items, index) => (
            <NavListItems
              key={index}
              onClick={() => setActive(index)}
              active={active === index}
              className={responsive ? "nav_links active_class" : "nav_links"}
            >
              <a href="">{items}</a>
            </NavListItems>
          ))}
        </NavLists>
        <Responsive onClick={toggleNavbar}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Responsive>
      </Navigation>
    </>
  );
};

const Navigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: inter;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 2%;
  }
`;

const NavLists = styled.ul`
  font-size: 1rem;
  display: flex;
  font-weight: 300;
  gap: 2rem;
  list-style-type: none;
  @media screen and (max-width: 1024px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 880px) {
    display: none;
  }
`;
const NavListItems = styled.li`
  color: ${(props) => (props.active === true ? `#ba181a` : `#D9D9D9`)};

  a {
    text-decoration: none;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1080px) {
    font-size: 0.4rem;
  }
`;
const Image = styled.img`
  height: 68px;
  width: 190px;
  @media screen and (max-width: 1024px) {
    height: 58px;
    width: 150px;
  }
  @media screen and (max-width: 768px) {
    height: 48px;
    width: 110px;
  }
`;
const Responsive = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 7px;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Line = styled.div`
  height: 0px;
  width: 15px;
  margin: 2px 0;
  border: 1px solid black;
`;
export default Navbar;
