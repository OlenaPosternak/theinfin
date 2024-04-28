"use client";
import styles from "./Article.module.scss";
import { useParallax } from "react-scroll-parallax";

export const Article = () => {
  // const parallaxContainer = useParallax<HTMLDivElement>({
  //   translateY: ["805px", "2998px"],
  //   startScroll: 760,
  //   endScroll: 2994,
  // });

  // const businessContainer = useParallax<HTMLDivElement>({
  //   translateY: ["0px", "-1655px"],
  //   startScroll: 760,
  //   endScroll: 2298,
  // });

  // const individualContainer = useParallax<HTMLDivElement>({
  //   translateY: ["0px", "-1455px"],
  //   startScroll: 1140,
  //   endScroll: 2994,
  // });

  // const reviewsContainer = useParallax<HTMLDivElement>({
  //   translateY: ["0px", "-955px"],
  //   startScroll: 2080,
  //   endScroll: 2970,
  // });

  // const startedContainer = useParallax<HTMLDivElement>({
  //   translateY: ["0px", "-696px"],
  //   startScroll: 3100,
  //   endScroll: 3994,
  // });

  const parallaxContainer = useParallax<HTMLDivElement>({
    translateY: ["805px", "2998px"],
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
    startScroll: 2560,
    endScroll: 3870,
  });

  const startedContainer = useParallax<HTMLDivElement>({
    // translateY: ["0px", "-696px"],
    startScroll: 4100,
    endScroll: 5994,
  });

  return (
    <section className={`${styles.pin_space} container`}>
      <div className={styles.wrapper} ref={parallaxContainer.ref}>
        <article className={styles.article} ref={businessContainer.ref}>
          01
        </article>
        <article
          ref={individualContainer.ref}
          className={styles.article}
          style={{ background: "black", marginTop: "35px" }}
        >
          02
        </article>
        <article
          ref={reviewsContainer.ref}
          className={styles.article}
          style={{ background: "green", marginTop: "70px" }}
        >
          03
        </article>
        <article
          ref={startedContainer.ref}
          className={styles.article}
          style={{
            background: "yellow",
            marginTop: "105px",
          }}
        >
          04
        </article>
      </div>
    </section>
  );
};
