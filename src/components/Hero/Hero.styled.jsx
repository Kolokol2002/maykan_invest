import styled from "@emotion/styled";
import { Link } from "react-scroll";
// import { desktop, min, tablet } from "../../styles/media";

export const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -58px;
`;
export const Title = styled.h1`
  max-width: 1060px;
  text-align: center;
  font-size: 50px;
`;
export const Button = styled(Link)`
  /* border: none;
  background-color: transparent; */
  /* color: white; */
  font-size: 25px;
  cursor: pointer;
  &:hover {
  }
`;
export const ButtonText = styled.span``;
