import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import { HomePage } from "./Home.styled";
import Container from "../../common/Container/Container";
import Hero from "../../components/Hero/Hero";
import BackgroungHero from "../../common/BackgroungHero/BackgroungHero";
import TeamInfo from "../../components/TeamInfo/TeamInfo";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
// import { useMediaQuery } from "react-responsive";

const Home = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <HomePage>
      <Container home>
        <BackgroungHero>
          <Header />
          <Hero />
        </BackgroungHero>
      </Container>
      <Container name={"team_info"}>
        <TeamInfo />
      </Container>
      <Container name={"contact_us"}>
        <ContactUs />
      </Container>
      <Container>
        <Footer />
      </Container>
    </HomePage>
  );
};

export default Home;
