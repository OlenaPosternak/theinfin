"use client";
import styles from "./Article.module.scss";
import { Business } from "./Business/Business";
import { Individuals } from "./Individuals/Individuals";
import { GetStarted } from "./GetSatarted/GetStarted";
import { Reviews } from "./Reviews/Reviews";
import { useArticlesParallaxHook } from "./useArticlesParallaxhook";

export const Article = () => {
  const {
    parallaxContainer,
    businessContainer,
    individualContainer,
    reviewsContainer,
    startedContainer,
  } = useArticlesParallaxHook();

  return (
    <section className={`${styles.pin_space} container`}>
      <div className={styles.wrapper} ref={parallaxContainer.ref}>
        <article className={styles.article} ref={businessContainer.ref}>
          <Business />
        </article>
        <article
          ref={individualContainer.ref}
          className={styles.article}
          style={{ marginTop: "35px" }}
        >
          <Individuals />
        </article>
        <article
          ref={reviewsContainer.ref}
          className={styles.article}
          style={{ marginTop: "70px" }}
        >
          <Reviews />
        </article>
        <article
          ref={startedContainer.ref}
          className={styles.article}
          style={{
            marginTop: "105px",
          }}
        >
          <GetStarted />
        </article>
      </div>
    </section>
  );
};
