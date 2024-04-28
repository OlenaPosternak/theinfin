import { useParallax } from "react-scroll-parallax";

export const useArticlesParallaxHook = () => {
  const parallaxContainer = useParallax<HTMLDivElement>({
    translateY: ["805px", "2998px"],
    translateX: ["-50%", "-50%"],
    startScroll: 1960,
    endScroll: 2998,
  });

  const businessContainer = useParallax<HTMLDivElement>({
    translateY: ["0px", "-2998px"],
    startScroll: 1960,
    endScroll: 3380,
  });

  const individualContainer = useParallax<HTMLDivElement>({
    translateY: ["0px", "-2099px"],
    startScroll: 2290,
    endScroll: 3300,
  });

  const reviewsContainer = useParallax<HTMLDivElement>({
    translateY: ["0px", "-1200px"],
    startScroll: 2400,
    endScroll: 3300,
  });

  const startedContainer = useParallax<HTMLDivElement>({
    translateY: ["0px", "-401px"],
    startScroll: 2900,
    endScroll: 3300,
  });

  return {
    parallaxContainer,
    businessContainer,
    individualContainer,
    reviewsContainer,
    startedContainer,
  };
};
