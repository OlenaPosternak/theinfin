"use client";
import { useEffect, useRef, useState } from "react";
import { SplashImages } from "../SplashScreenImages/SplashImages";

export const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsloading] = useState(true);

  const splashRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (splashRef.current) {
        splashRef.current.style.display = "none";
      }
      setIsloading(false);
    }, 4500);
  }, []);

  return (
    <>{isLoading ? <SplashImages splashRef={splashRef} /> : <>{children}</>}</>
  );
};
