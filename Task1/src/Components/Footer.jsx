import React from "react";
import styled from "styled-components";
import logo from "../assets/logo1.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import fb from "../assets/fb.png";
import whatsapp from "../assets/whatsapp.png";
import insta from "../assets/insta.png";
const Footer = () => {
  return (
    <>

      <FooterContainer>
        <Wrapper>
          <FooterLeft>
            <LogoContainer>
              <a href="">
                <Logo src={logo} alt="Company logo" />
              </a>
            </LogoContainer>
            <FooterDesc>
              Elevate your construction projects in Kerala with our top-notch
              ready mix concrete services.
            </FooterDesc>
            <FooterSocial>
              <a href="https://www.facebook.com" target="_blank">
                <Fb src={fb} alt="facebook" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <Insta src={insta} alt="instagram" />
              </a>
              <a href="https://www.whatsapp.com" target="_blank">
                <Whatsapp src={whatsapp} alt="whatsapp" />
              </a>
            </FooterSocial>
          </FooterLeft>
          <FooterRight>
            <RightHead>QUICK LINKS</RightHead>
            <RightLinksContainer>
              <RightLinksColumn>
                <RightLinks>
                  <a href="">Home</a>
                </RightLinks>
                <RightLinks>
                  <a href="">About Us</a>
                </RightLinks>
                <RightLinks>
                  <a href="">Services</a>
                </RightLinks>
                <RightLinks>
                  <a href="">Mode Of Operation</a>
                </RightLinks>
                <RightLinks>
                  <a href="">Why Choose Us</a>
                </RightLinks>
              </RightLinksColumn>
              <RightLinksColumn>
                <RightLinks>
                  <a href="">Equipments</a>
                </RightLinks>
                <RightLinks>
                  <a href="">Gallery</a>
                </RightLinks>
                <RightLinks>
                  <a href="">Testimonials</a>
                </RightLinks>
                <RightLinks>
                  <a href="">FAQ</a>
                </RightLinks>
                <RightLinks>
                  <a href="">Contact</a>
                </RightLinks>
              </RightLinksColumn>
              <RightLinksColumn>
                <RightLinks>
                  <IconContainer>
                    <Address src={location} alt="Adress" />
                    hi
                  </IconContainer>
                </RightLinks>
                <RightLinks>
                  <IconContainer>
                    <Phone src={phone} alt="Phone Number" />
                  </IconContainer>
                  +91 984 5596 235
                </RightLinks>
                <RightLinks>
                  <IconContainer>
                    <Email src={mail} alt="Email" />
                  </IconContainer>
                  info@mplusconcrete.com
                </RightLinks>
              </RightLinksColumn>
            </RightLinksContainer>
          </FooterRight>
        </Wrapper>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.div`
  padding: 2% 0;
  background: #ba181a;
`;
const Wrapper = styled.div`
  margin: auto;
  width: 82%;

  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const FooterLeft = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterRight = styled.div`
  width: 100%;
`;
const LogoContainer = styled.div`
  height: 30%;
  width: 33%;
  display: inline-block;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
const FooterDesc = styled.div`
  color: #d9d9d9;
  margin: 5% 0;
  width: 80%;
  font-family: "Karla";
`;
const FooterSocial = styled.div`
  margin: 2% 0;
  display: flex;
  width: 30%;
  gap: 20%;
`;
const Fb = styled.img`
  height: 100%;
  width: 100%;
`;
const Insta = styled.img`
  height: 100%;
  width: 100%;
`;
const Whatsapp = styled.img`
  height: 100%;
  width: 100%;
`;
const RightHead = styled.h3`
  margin-top: 3%;
  font-size: 1.3rem;
  color: #d9d9d9;
  font-family: "Josefin Sans";
`;
const RightLinksColumn = styled.div`
  font-family: "Inter";
`;
const RightLinksContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  list-style-type: none;
  color: #d9d9d9;

  @media screen and (max-width:  680px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const RightLinks = styled.li`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  margin: 3% 0;
  a {
    text-decoration: none;
    color: #d9d9d9;
  }

  @media screen and (max-width: 680px) {
    margin: 6% 0;
  }
`;
const Address = styled.img`
  height: 100%;
  width: 100%;
  display: block;
`;
const Phone = styled.img`
  height: 100%;
  width: 100%;
  display: block;
`;
const Email = styled.img`
  height: 100%;
  width: 100%;
  display: block;
`;
const IconContainer = styled.div`
  height: 12%;
  width: 12%;
`;

export default Footer;
