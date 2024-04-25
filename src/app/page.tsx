"use client";
import React, { useState } from "react";
import { CursorWithCrosses } from "./components/CursorWithCrosses/CursorWithCrosses";
import { Hero } from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="px-[30px] pb-[30px] cursore-cursore">
      <CursorWithCrosses />
      <Hero />
    </main>
  );
}
