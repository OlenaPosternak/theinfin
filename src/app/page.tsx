"use client";
import React, { useState } from "react";
import { CursorWithCrosses } from "./components/CursorWithCrosses/CursorWithCrosses";
import { Hero } from "./components/Hero/Hero";
import styles from "./page.module.scss";
import { Article } from "./components/ArticleSection/Article";
import { WhyChooseTheInfin } from "./components/WhyChooseTheInfin/WhyChooseTheInfin";
import { Business } from "./components/ArticleSection/Business/Business";
import { Individuals } from "./components/ArticleSection/Individuals/Individuals";
import { GetStarted } from "./components/ArticleSection/GetSatarted/GetStarted";

export default function Home() {
  return (
    <main className={styles.main}>
      <CursorWithCrosses />
      <Hero />
      <WhyChooseTheInfin />
      <Business />
      <Individuals />
      <GetStarted />
      <Article />
    </main>
  );
}
