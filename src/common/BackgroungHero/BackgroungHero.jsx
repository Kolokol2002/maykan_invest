import { useEffect, useRef } from "react";
import { BackgroungHeroContainer, VideoHero } from "./BackgroungHero.styled";

const BackgroungHero = ({ children }) => {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.playbackRate = 1;
  }, []);

  return (
    <BackgroungHeroContainer>
      <VideoHero ref={videoRef} preload="auto" autoPlay loop muted>
        <source src="for_hero.mp4" type="video/mp4"></source>
      </VideoHero>
      {children}
    </BackgroungHeroContainer>
  );
};

export default BackgroungHero;
