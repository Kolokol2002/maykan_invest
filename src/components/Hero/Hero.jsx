import { Button, ButtonText, HeroContainer, Title } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Title>
      <Button to="team_info" smooth={true}>
        <ButtonText>Learn more</ButtonText>
      </Button>
    </HeroContainer>
  );
};

export default Hero;
