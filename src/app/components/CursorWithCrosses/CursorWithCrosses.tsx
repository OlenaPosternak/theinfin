import React, { useState, useEffect } from "react";
import { Matrix } from "./Matrix/Matrix";
import styles from "./CursorWithCrosses.module.scss";

const POINTER_CURSOR_SIZE = 0;
const MATRIX_CURSOR_SIZE = 304;

export const CursorWithCrosses = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") ===
        `${styles.pointer}`
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const flareSize = isPointer ? POINTER_CURSOR_SIZE : MATRIX_CURSOR_SIZE;

  useEffect(() => {
    document.body.style.cursor = isPointer ? "none" : "auto";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [isPointer]);

  return (
    <div
      className={`${styles.cursor} ${isPointer ? styles.pointer : ""} `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    >
      <Matrix />
    </div>
  );
};
