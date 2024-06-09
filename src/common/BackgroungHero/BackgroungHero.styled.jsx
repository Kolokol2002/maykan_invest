import styled from "@emotion/styled";
// import { Link } from "react-scroll";
// import { desktop, min, tablet } from "../../styles/media";

export const BackgroungHeroContainer = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100vh;
`;

export const VideoHero = styled.video`
  object-fit: cover;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  /* filter: hue-rotate(100%); */
`;
