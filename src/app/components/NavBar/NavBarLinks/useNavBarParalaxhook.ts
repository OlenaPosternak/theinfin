import { useParallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";

export const useNavBarParalax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const homeScrollValue = () => {
    if (scrollPosition < 200) {
      return -50;
    } else if (scrollPosition >= 200 && scrollPosition < 400) {
      return -160;
    } else if (scrollPosition >= 400 && scrollPosition < 600) {
      return -270;
    } else if (scrollPosition >= 600 && scrollPosition < 900) {
      return -360;
    } else {
      return -360;
    }
  };
  const businessesScrollValue = () => {
    if (scrollPosition < 200) {
      return 0;
    } else if (scrollPosition >= 200 && scrollPosition < 400) {
      return -100;
    } else if (scrollPosition >= 400 && scrollPosition < 600) {
      return -220;
    } else {
      return -300;
    }
  };

  const individualsScrollValueX = () => {
    if (scrollPosition < 400) {
      return 0;
    } else if (scrollPosition >= 400 && scrollPosition < 600) {
      return -110;
    } else if (scrollPosition >= 400 && scrollPosition < 600) {
      return -160;
    } else {
      return -200;
    }
  };
  const individualsScrollValueY = () => {
    if (scrollPosition < 200) {
      return -17;
    } else if (scrollPosition >= 200 && scrollPosition < 400) {
      return -34;
    } else if (scrollPosition >= 400 && scrollPosition < 600) {
      return -34;
    } else {
      return -34;
    }
  };

  const capitalismScrollValueY = () => {
    if (scrollPosition < 200) {
      return -17;
    } else if (scrollPosition >= 200 && scrollPosition < 400) {
      return -34;
    } else if (scrollPosition >= 400 && scrollPosition < 600) {
      return -51;
    } else {
      return -51;
    }
  };
  const capitalismScrollValueX = () => {
    if (scrollPosition < 600) {
      return 0;
    } else if (scrollPosition >= 400 && scrollPosition < 600) {
      return -60;
    } else {
      return -100;
    }
  };

  const marketingScrollValueY = () => {
    if (scrollPosition < 200) {
      return -17;
    } else if (scrollPosition >= 200 && scrollPosition < 400) {
      return -34;
    } else if (scrollPosition >= 400 && scrollPosition < 600) {
      return -51;
    } else if (scrollPosition >= 600 && scrollPosition < 900) {
      return -68;
    } else {
      return -68;
    }
  };
  console.log(homeScrollValue);

  const parallaxHome = useParallax<HTMLLIElement>({
    translateX: ["0px", `${homeScrollValue()}px`],
    startScroll: 0,
    endScroll: 200,
  });

  const parallaxBusinesses = useParallax<HTMLLIElement>({
    translateY: ["0px", "-17px"],
    translateX: ["0px", `${businessesScrollValue()}px`],
    startScroll: 0,
    endScroll: 200,
  });

  const parallaxIndividuals = useParallax<HTMLLIElement>({
    translateY: ["0px", `${individualsScrollValueY()}px`],
    translateX: ["0px", `${individualsScrollValueX()}px`],
    startScroll: 0,
    endScroll: 200,
  });

  const parallaxCapitalism = useParallax<HTMLLIElement>({
    translateY: ["0px", `${capitalismScrollValueY()}px`],
    translateX: ["0px", `${capitalismScrollValueX()}px`],

    startScroll: 0,
    endScroll: 200,
  });
  const parallaxMarketing = useParallax<HTMLLIElement>({
    translateY: ["0px", `${marketingScrollValueY()}px`],
    startScroll: 0,
    endScroll: 200,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition);

  return {
    parallaxHome,
    parallaxBusinesses,
    parallaxIndividuals,
    parallaxCapitalism,
    parallaxMarketing,
  };
};
