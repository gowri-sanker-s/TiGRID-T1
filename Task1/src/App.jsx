import { useState } from "react";
import Navbar from "./Components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import styled from "styled-components";
import truck from "../src/assets/truck.png";
import truck2 from "../src/assets/truck2.png";
import rupee from "../src/assets/rupee.png";
import arrow from "./assets/arrow.png";
import emp from "../src/assets/emp.png";
import vision from "../src/assets/vision.png";
import mission from "../src/assets/mission.png";
import integrity from "../src/assets/integrity.png";
import dedication from "../src/assets/dedication.png";
import positive from "../src/assets/positivity.png";
import empathy from "./assets/empathy.png";
import messageImg from "./assets/message.png";
import guy1 from "./assets/guy1.png";
import guy2 from "./assets/guy2.png";

import g1 from "./assets/g1.png";
import g2 from "./assets/g2.png";
import g3 from "./assets/g3.png";
import g4 from "./assets/g4.png";
import g5 from "./assets/g5.png";
import g6 from "./assets/g6.png";
import g7 from "./assets/g7.png";
import g8 from "./assets/g8.png";

import Footer from "./Components/Footer";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const contactUs = (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);
    const payload = {
      name,
      email,
      phone,
      message,
    };
    axios
      .post("http://localhost:8000/contactUs", payload)
      .then(() => {
        alert("Message sent Succesfully");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar />
      <MainContainer>
        <HomeSection>
          <HomeContent>
            <TopHeading>MIXING TRUST, POURING STRENGTH</TopHeading>
            <MainHeading>Concrete mastery in every mix</MainHeading>
            <SubHeading>
              Elevate Your Structures with Our Superior Ready-Mix Concrete Where
              Precision Meets Performance
            </SubHeading>
            <HomeButton>
              <ButtonText>Services</ButtonText>
              <HomeArrow src={arrow} alt="Services" />
            </HomeButton>
          </HomeContent>
          <ActivityButtons>
            <PriceButton>
              <PriceImage src={rupee} alt="Rupee" />
              Affordable Price
            </PriceButton>
            <EmpButton>
              <EmpImage src={emp} alt="Rupee" />
              Experienced Employees
            </EmpButton>
          </ActivityButtons>
        </HomeSection>

        <MissionAndValuesSection>
          <LeftMission>
            <Mission>
              <MissionHead>
                <MissionImageContainer>
                  <MissionImage src={mission} alt="Mission" />
                </MissionImageContainer>
                <MissionHeading>Vision</MissionHeading>
              </MissionHead>
              <p>
                Our mission at Mplus Concrete is to be the cornerstone of
                construction reliability, innovation, and sustainability. We
                strive to empower our clients with foremost ready-mix concrete
                solutions, ensuring that their projects not only meet but exceed
                expectations. Committed to precision in every mix, we aim to
                redefine industry standards and contribute to the creation of
                resilient structures that stand the test of time. At Mplus
                Concrete, we visualize a future where every project reflects the
                strength of our mission and the solidity of our foundations
              </p>
            </Mission>
            <Vision>
              <VisionHead>
                <MissionImageContainer>
                  <VisonImage src={vision} alt="Vision" />
                </MissionImageContainer>

                <VisionHeading>Vision</VisionHeading>
              </VisionHead>
              <p>
                At Mplus Concrete, our vision is to be the architects of a
                ground breaking future in the ready-mix concrete sector. We
                imagine a future where our company stands as a beacon of
                innovation, shaping a construction landscape that prioritizes
                efficiency, sustainability, and unmatched quality. Our vision
                extends beyond supplying concrete, it encompasses shaping
                skylines, promote sustainable practices, and contributing to the
                creation of iconic structures that withstand the test of time.
                we expect a future for the next generation of construction
                venture
              </p>
            </Vision>
          </LeftMission>
          <Values>
            <ValuesHeading>Our Values</ValuesHeading>
            <LineOne></LineOne>
            <ValuesList>
              <ListItem>
                <ValuesImage src={integrity} alt="Integrity" />
                Integrity
              </ListItem>
              <ListItem>
                <ValuesImage src={dedication} alt="Dedication" />
                Dedication & Commitment and Teamwork
              </ListItem>
              <ListItem>
                <ValuesImage src={empathy} alt="empathy" />
                Empathy
              </ListItem>
              <ListItem>
                <ValuesImage src={positive} alt="Positivity" />
                Positivity
              </ListItem>
              <ListItem>
                <ValuesImage src={positive} alt="Positivity" />
                Responsiveness
              </ListItem>
              <ListItem>
                <ValuesImage src={positive} alt="Positivity" />
                Safety
              </ListItem>
              <ListItem>
                <ValuesImage src={positive} alt="Positivity" />
                Innovate And Improve To Excel
              </ListItem>
              <ListItem>
                <ValuesImage src={positive} alt="Positivity" />
                Trust
              </ListItem>
            </ValuesList>
          </Values>
        </MissionAndValuesSection>

        <MessageSection>
          <MessageContent>
            <MessageImage src={messageImg} alt="Chairman" />
            <ChairmanMessage>
              <ChairmanMsgHead>Chairman's Message</ChairmanMsgHead>
              <ChairmanMsgPara>
                As Chairman of Mplus Concrete, it is my pleasure to welcome you
                to a world of transformative ready-mix concrete solutions. As
                Chairman, I am proud to lead a team dedicated to shaping the
                future of ready-mix concrete. Here at Mplus Concrete we don't
                just provide concrete; we shape foundations for success. Join us
                in building a future where strength, precision, and
                environmental responsibility converge harmoniously. Thank you
                for considering Mplus Concrete as your partner in constructing a
                flexible and creative tomorrow.
              </ChairmanMsgPara>
            </ChairmanMessage>
          </MessageContent>
        </MessageSection>

        <ModeOfOp>
          <ModeOfOpLeft>
            <ModeOfOpHead>Mode Of Operation</ModeOfOpHead>
            <ModeOfOpPara>
              At Mplus Concrete, our mode of operation is focused on efficiency
              and precision, we ensure that each batch of ready-mix concrete is
              carefully crafted and promptly delivered, guaranteeing a
              hassle-free construction experience for our clients.
            </ModeOfOpPara>
            <ModeOfOpList>
              <ModeOfOpListItems>
                <ModeOfOpListItemsHead>
                  <ModeOfOpSpan></ModeOfOpSpan>Raw Materials
                </ModeOfOpListItemsHead>
                <ModeOfOpListItemsDesc>
                  Obtain high-quality raw materials, including cement,
                  aggregates, water, and admixtures, from trusted suppliers.
                  Conduct quality checks to ensure materials meet specified
                  standards.
                </ModeOfOpListItemsDesc>
              </ModeOfOpListItems>
              <ModeOfOpListItems>
                <ModeOfOpListItemsHead>
                  <ModeOfOpSpan></ModeOfOpSpan>Batching and Mixing
                </ModeOfOpListItemsHead>
                <ModeOfOpListItemsDesc>
                  Develop mix designs based on project specifications. Use
                  computerized batching systems to precisely measure and combine
                  materials.{" "}
                </ModeOfOpListItemsDesc>
              </ModeOfOpListItems>
              <ModeOfOpListItems>
                <ModeOfOpListItemsHead>
                  <ModeOfOpSpan></ModeOfOpSpan>Quality Control{" "}
                </ModeOfOpListItemsHead>
                <ModeOfOpListItemsDesc>
                  Implement an accurate quality control process at every stage,
                  from raw materials to the final product. Conduct tests to
                  ensure the concrete meets strength, durability, and
                  consistency standards.{" "}
                </ModeOfOpListItemsDesc>
              </ModeOfOpListItems>
              <ModeOfOpListItems>
                <ModeOfOpListItemsHead>
                  <ModeOfOpSpan></ModeOfOpSpan>Transportation
                </ModeOfOpListItemsHead>
                <ModeOfOpListItemsDesc>
                  Optimize transportation routes and schedules for efficient
                  concrete delivery.{" "}
                </ModeOfOpListItemsDesc>
              </ModeOfOpListItems>
              <ModeOfOpListItems>
                <ModeOfOpListItemsHead>
                  <ModeOfOpSpan></ModeOfOpSpan>Delivery
                </ModeOfOpListItemsHead>
                <ModeOfOpListItemsDesc>
                  Ensure timely and reliable delivery of ready-mix concrete to
                  construction sites.{" "}
                </ModeOfOpListItemsDesc>
              </ModeOfOpListItems>
              <ModeOfOpListItems>
                <ModeOfOpListItemsHead>
                  <ModeOfOpSpan></ModeOfOpSpan>
                  Environmental Responsibility
                </ModeOfOpListItemsHead>
                <ModeOfOpListItemsDesc>
                  Implement eco-friendly practices in concrete production and
                  bond to environmental regulations.{" "}
                </ModeOfOpListItemsDesc>
              </ModeOfOpListItems>
              <ModeOfOpListItems>
                <ModeOfOpListItemsHead>
                  <ModeOfOpSpan></ModeOfOpSpan>
                  Customer Interaction
                </ModeOfOpListItemsHead>
                <ModeOfOpListItemsDesc>
                  Maintain open communication with customers, addressing queries
                  and providing updates.{" "}
                </ModeOfOpListItemsDesc>
              </ModeOfOpListItems>
              <ModeOfOpListItems>
                <ModeOfOpListItemsHead>
                  <ModeOfOpSpan></ModeOfOpSpan>Raw Materials
                </ModeOfOpListItemsHead>
                <ModeOfOpListItemsDesc>
                  Obtain high-quality raw materials, including cement,
                  aggregates, water, and admixtures, from trusted suppliers.
                  Conduct quality checks to ensure materials meet specified
                  standards.
                </ModeOfOpListItemsDesc>
              </ModeOfOpListItems>
            </ModeOfOpList>
          </ModeOfOpLeft>
          <ModeOfOpRight src={truck2} alt="Mode Of Operations" />
        </ModeOfOp>

        <Gallery>
          <GalleryHead>Gallery</GalleryHead>
          <GalleryPara>
            Discover the artistry of concrete in our Photo Gallery. Each picture
            encapsulates the quality and craftsmanship that defines our
            projects.
          </GalleryPara>
          <GalleryList>
            <GalleryListItems>
              {" "}
              <GalleryImages src={g1} alt="Gallery images" />
            </GalleryListItems>
            <GalleryListItems>
              {" "}
              <GalleryImages src={g2} alt="Gallery images" />
            </GalleryListItems>
            <GalleryListItems>
              {" "}
              <GalleryImages src={g3} alt="Gallery images" />
            </GalleryListItems>
            <GalleryListItems>
              {" "}
              <GalleryImages src={g4} alt="Gallery images" />
            </GalleryListItems>
            <GalleryListItems>
              {" "}
              <GalleryImages src={g5} alt="Gallery images" />
            </GalleryListItems>
            <GalleryListItems>
              {" "}
              <GalleryImages src={g6} alt="Gallery images" />
            </GalleryListItems>
            <GalleryListItems>
              {" "}
              <GalleryImages src={g7} alt="Gallery images" />
            </GalleryListItems>
            <GalleryListItems>
              {" "}
              <GalleryImages src={g8} alt="Gallery images" />
            </GalleryListItems>
          </GalleryList>
        </Gallery>

        <Testimonials>
          <TestimonialsLeft>
            <h3>OUR CLIENTS SAY</h3>
            <h2>OUR CREDIBILITY HAS BEEN PROVEN</h2>
          </TestimonialsLeft>
          <TestimonialsRight>
            <p>
              With a proven track record of reliability, quality assurance, and
              timely deliveries, we have earned the trust of our clients. Choose
              us for concrete solutions you can depend on for the success of
              your construction projects.
            </p>
          </TestimonialsRight>
        </Testimonials>

        <TestimonialsPeople>
          <Slider {...settings}>
            <Peoples>
              <SingleSlide>
                <PeopleImg src={guy1} alt="User" />
                <PeopleName>ram kumar</PeopleName>
                <PeoplePara>
                  Choosing Mplus Concrete for our concrete needs was a
                  game-changer. The quality of their ready mix and the precision
                  in their delivery significantly contributed to the success of
                  our project. Working with a team that values excellence and
                  customer satisfaction has made all the difference.
                </PeoplePara>
              </SingleSlide>
            </Peoples>
            <Peoples>
              <SingleSlide>
                <PeopleImg src={guy2} alt="User" />
                <PeopleName>ram kumar</PeopleName>
                <PeoplePara>
                  Choosing Mplus Concrete for our concrete needs was a
                  game-changer. The quality of their ready mix and the precision
                  in their delivery significantly contributed to the success of
                  our project. Working with a team that values excellence and
                  customer satisfaction has made all the difference.
                </PeoplePara>
              </SingleSlide>
            </Peoples>
            <Peoples>
              <SingleSlide>
                <PeopleImg src={guy2} alt="User" />
                <PeopleName>ram kumar</PeopleName>
                <PeoplePara>
                  Choosing Mplus Concrete for our concrete needs was a
                  game-changer. The quality of their ready mix and the precision
                  in their delivery significantly contributed to the success of
                  our project. Working with a team that values excellence and
                  customer satisfaction has made all the difference.
                </PeoplePara>
              </SingleSlide>
            </Peoples>
          </Slider>
        </TestimonialsPeople>

        <GetInTouch>
          <GITHead>GET IN TOUCH</GITHead>
          <GITPara>
            Connecting with our ready-mix concrete services is easy and
            efficient. Whether you're planning a project, need a quote, or have
            inquiries, our team is ready to assist. Reach out to us, and let's
            collaborate to make your construction aim a success
          </GITPara>
          <MapAndForm>
            <Map>
              <iframe
                style={{ height: "100vh" }}
                className="gmap_iframe"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=Technopark Trivandrum&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </Map>
            <Form>
              <Input
                type="text"
                name=""
                id=""
                placeholder="Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                name=""
                id=""
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                name=""
                id=""
                placeholder="Phone *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                type="text"
                name=""
                id=""
                placeholder="Message *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button>Send</Button>
            </Form>
          </MapAndForm>
        </GetInTouch>

        <Footer />
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// Home Section Styles

const HomeSection = styled.div`
  background: url(${truck});
  height: 100vh;

  background-size: contain;
  background-repeat: no-repeat;
  position: relative;

  @media screen and (max-width: 880px) {
    height: 82vh;
  }
  @media screen and (max-width: 880px) {
    height: 82vh;
  }
  @media screen and (max-width: 680px) {
    height: 70vh;
  }
  @media screen and (max-width: 580px) {
    height: 60vh;
  }
  @media screen and (max-width: 434px) {
    height: 21vh;
  }
  @media screen and (max-width: 380px) {
    height: 34vh;
  }
`;
const HomeContent = styled.div`
  position: absolute;
  top: 15%;
  left: 8%;
  @media screen and (max-width: 320px) {
    top: 8%;
    left: 8%;
  }
`;
const TopHeading = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  font-family: Jaldi;

  @media screen and (max-width: 1080px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 980px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 580px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 434px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.5rem;
  }
`;
const MainHeading = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  font-family: "Josefin Sans";
  color: #ba181a;
  text-transform: uppercase;
  width: 700px;
  font-weight: 700;

  @media screen and (max-width: 1080px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 980px) {
    font-size: 1.7rem;
    width: 400px;
  }
  @media screen and (max-width: 580px) {
    font-size: 1.4rem;
    width: 300px;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    width: 200px;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.82rem;
  }
`;
const SubHeading = styled.h2`
  font-size: 1.3rem;
  width: 550px;
  font-family: Jost;
  font-weight: 300;

  @media screen and (max-width: 1080px) {
    font-size: 0.8rem;
    width: 450px;
  }
  @media screen and (max-width: 980px) {
    font-size: 0.5rem;
    width: 250px;
  }
  @media screen and (max-width: 580px) {
    font-size: 0.5rem;
    width: 200px;
  }
  @media screen and (max-width: 434px) {
    font-size: 0.4rem;
    width: 180px;
  }
  @media screen and (max-width: 320px) {
    width: 150px;
  }
`;
const HomeButton = styled.div`
  margin: 5% 0;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #ba181a;
  width: 200px;
  height: 2.5rem;
  line-height: 2.3;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 160px;
    height: 2rem;
  }
  @media screen and (max-width: 580px) {
    width: 140px;
    height: 1.8rem;
  }
  @media screen and (max-width: 434px) {
    width: 120px;
    height: 1.6rem;
  }
`;
const ButtonText = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  background-color: #ba181a;
  color: white;
  font-size: 16px;
`;
const HomeArrow = styled.img`
  position: absolute;
  right: 0;
  height: 100%;
  border-radius: 10px;
  background-color: #931315;
`;
const ActivityButtons = styled.div`
  position: absolute;
  bottom: 2%;
  right: 5%;
  width: 35%;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    bottom: 70px;
    width: 45%;
  }

  @media screen and (max-width: 880px) {
    display: none;
  }
`;
const EmpImage = styled.img`
  border: 2px solid #ba181a;
  border-radius: 50%;
  height: 30px;
  padding: 1%;
`;
const PriceImage = styled.img`
  border: 2px solid #ffff;
  border-radius: 50%;
  height: 30px;
  padding: 1%;
`;
const EmpButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #ffff;
  color: #ba181a;
  border: none;

  height: 5rem;
  width: 50%;
`;
const PriceButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5rem;
  border-radius: 20px;
  background-color: #ba181a;
  color: #ffff;
  border: none;
  width: 50%;
`;

// Mission and Vision Section Styles

const MissionAndValuesSection = styled.div`
  margin: 2% auto;
  width: 82%;
  display: flex;
  align-items: center;

  gap: 50px;

  @media screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
const LeftMission = styled.div`
  width: 50%;
  text-align: justify;
  background: #ba181a;
  border-radius: 8px;
  padding: 2%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 880px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 8%;
  }
`;
const Mission = styled.div`
  font-size: 14px;
  font-family: Karla;
  background: #efefef;
  border-radius: 10px;
  width: 90%;
  min-height: 50%;
  padding: 8%;
  @media screen and (max-width: 880px) {
    width: 100%;
    min-height: 90%;
    max-height: 90%;
  }
`;
const MissionHead = styled.div`
  font-family: Jaldi;
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const MissionImageContainer = styled.div`
  height: 7%;
  width: 6%;
`;
const MissionHeading = styled.div``;
const MissionImage = styled.img`
  background: #ba181a;
  padding: 2%;

  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
const Vision = styled.div`
  font-size: 14px;
  font-family: Karla;
  background: #efefef;
  border-radius: 10px;
  width: 90%;
  min-height: 50%;
  padding: 8%;
  @media screen and (max-width: 880px) {
    width: 100%;
    min-height: 90%;
    max-height: 90%;
  }
`;
const VisonImage = styled.img`
  background: #ba181a;
  padding: 2%;

  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
const VisionHead = styled.div`
  font-family: Jaldi;
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const VisionHeading = styled.div``;
const Values = styled.div`
  padding: 2% 0;
`;
const ValuesHeading = styled.h3`
  font-size: 22px;
  font-weight: 500;
  font-family: "Josefin Sans";
  text-transform: uppercase;
  color: #ba181a;
`;
const ValuesList = styled.div`
  list-style-type: none;

  @media screen and (max-width: 880px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 380px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 9% 0;
  font-family: "Josefin Sans";
  border-radius: 5px;
`;
const ValuesImage = styled.img`
  height: 34px;
  width: 34px;
  background-color: #ba181a;
  border-radius: 5px;
  padding: 1%;
`;
const LineOne = styled.div`
  padding-top: 20px;
  border-bottom: 1px solid gray;
`;

// Message Section Styles

const MessageSection = styled.div`
  background-color: white;
  width: 82%;
  margin: auto;
`;
const MessageContent = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  padding: 2% 10%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const MessageImage = styled.img`
  width: 243px;
  height: 285px;
  padding: 1%;
  border: 1px solid grey;
`;
const ChairmanMessage = styled.div``;
const ChairmanMsgHead = styled.div`
  color: #ab181a;
  font-size: 2.4rem;
  font-family: "Josefin Sans";
  text-transform: uppercase;
  font-weight: 500;
  margin: 0 0 20px 0;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    margin: 6% 0;
  }
`;
const ChairmanMsgPara = styled.div`
  width: 99%;
  text-align: justify;
  font-size: 1.3rem;
  font-family: "Karla";

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

// Mode Of Op Section Styles

const ModeOfOp = styled.div`
  padding: 4% 0 0 0;
  width: 82%;
  margin: auto;
  position: relative;

  @media screen and (max-width: 680px) {
    margin-bottom: 15%;
  }
`;
const ModeOfOpLeft = styled.div`
  width: 100%;
`;
const ModeOfOpRight = styled.img`
  height: 28rem;
  width: 28rem;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);

  @media screen and (max-width: 1080px) {
    height: 15rem;
    width: 15rem;
    margin-top: 19%;
    position: static;
    display: none;
  }
  @media screen and (max-width: 680px) {
    height: 15rem;
    width: 15rem;
  }
`;
const ModeOfOpHead = styled.h3`
  margin: 0 0 3% 0;
  font-size: 22px;
  font-weight: 500;
  font-family: "Josefin Sans";
  color: #ab181a;
  text-transform: uppercase;
`;
const ModeOfOpPara = styled.p`
  font-weight: 500;
  font-family: "Karla";
`;
const ModeOfOpSpan = styled.span`
  display: inline-block;
  min-height: 15px;
  min-width: 15px;
  background-color: #ab181a;
`;
const ModeOfOpList = styled.ul`
  list-style-type: none;
  @media screen and (max-width: 1024px) {
    display: grid;
    width: 100%;
    gap: 6%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  @media screen and (max-width: 480px) {
    display: grid;
    width: 100%;
    gap: 6%;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
`;
const ModeOfOpListItems = styled.li`
  margin: 3% 0;
`;
const ModeOfOpListItemsHead = styled.h3`
  font-family: "Jaldi";
  margin: 1% 0;
  display: flex;
  align-items: baseline;
  gap: 10px;
`;
const ModeOfOpListItemsDesc = styled.p`
  font-family: "Karla";
  width: 60%;
  word-spacing: 1px;
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

// Gallery Section Styles
const Gallery = styled.div`
  padding: 2% 0;
  margin: 5% auto;
  width: 82%;

  @media screen and (max-width: 380px) {
    margin-top: 10%;
  }
`;
const GalleryHead = styled.h3`
  font-size: 30px;
  font-weight: 500;
  font-family: "Josefin Sans";
  color: #ab181a;
  text-transform: uppercase;
  margin: 2% 0;
`;
const GalleryPara = styled.p`
  font-family: "Karla";
  margin: 2% 0;
`;
const GalleryList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 434px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const GalleryListItems = styled.li``;
const GalleryImages = styled.img`
  margin-right: 10px;
  margin-top: 10px;

  height: 100%;
  width: 100%;
`;

const Testimonials = styled.div`
  margin: 3% 0;
  height: 300px;
  background-color: #ba181a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;
const TestimonialsLeft = styled.div`
  width: 20%;
  h3 {
    font-weight: 400;
    font-family: "Jaldi";
  }
  h2 {
    font-weight: 500;
    font-family: "Josefin Sans";
  }
  @media screen and (max-width: 680px) {
    width: 90%;
  }
`;
const TestimonialsRight = styled.div`
  font-family: "Karla";

  width: 50%;
  @media screen and (max-width: 680px) {
    width: 90%;
  }
`;
const TestimonialsPeople = styled.div`
  margin-top: -6rem;
  @media screen and (max-width: 680px) {
    margin-top: -2rem;
  }
`;
const SingleSlide = styled.div`
  width: 90%;
  margin: auto;
  padding: 5% 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d9d9d9;
`;
const Peoples = styled.div`
  overflow: hidden;
`;
const PeopleImg = styled.img``;
const PeopleName = styled.h3`
  margin: 2% 0;
`;
const PeoplePara = styled.p`
  width: 80%;
  text-align: justify;
  margin: 3% 0;
`;

const GetInTouch = styled.div`
  margin: 5% auto;
  width: 80%;
`;
const MapAndForm = styled.div`
  background: #ba181a;
  margin: 5% auto;
  width: 82%;
  display: flex;
  align-items: center;
  gap: 2%;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const GITHead = styled.h3`
  font-size: 30px;
  font-weight: 500;
  color: #ab181a;
  text-transform: uppercase;
  font-family: "Josefin Sans";
`;
const GITPara = styled.p`
  font-family: "Karla";
  margin: 2% 0;
`;
const Map = styled.div`
  width: 60%;
  height: 100vh;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;
const Form = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  gap: 40px;
  padding: 2% 0;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;
const Input = styled.input`
  background: transparent;
  height: 40px;
  width: 90%;
  padding: 10px 15px;
  border: none;
  border-bottom: 1px solid #ffff;
  &::placeholder {
    color: #ffff;
  }
`;
const Button = styled.button`
  margin: 0;
  height: 48px;
  width: 110px;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 400;
  color: #ba181a;
  background-color: #ffff;
  text-transform: uppercase;
`;
export default App;
