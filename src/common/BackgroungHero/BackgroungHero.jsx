import { useEffect, useRef } from "react";
import { BackgroungHeroContainer, VideoHero } from "./BackgroungHero.styled";

const BackgroungHero = ({ children }) => {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.playbackRate = 1;
  }, []);

  return (
    <BackgroungHeroContainer>
      <VideoHero
        ref={videoRef}
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline
        muted
        src="/maykan_invest/for_hero.mp4"
        type="video/mp4"
      />
      {children}
    </BackgroungHeroContainer>
  );
};

export default BackgroungHero;
