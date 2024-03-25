// import { useEffect, useRef } from "react";
import { BackgroungHeroContainer, VideoHero } from "./BackgroungHero.styled";

const BackgroungHero = ({ children }) => {
  // const videoRef = useRef();
  // useEffect(() => {
  //   videoRef.current.playbackRate = 1;
  // }, []);

  return (
    <BackgroungHeroContainer>
      <VideoHero
        playsinline
        autoPlay
        loop
        muted
        data-wf-ignore
        data-object-fit="cover"
      >
        <source
          src="/maykan_invest/for_hero.mp4"
          type="video/mp4"
          data-wf-ignore
        ></source>
      </VideoHero>
      {children}
    </BackgroungHeroContainer>
  );
};

export default BackgroungHero;
