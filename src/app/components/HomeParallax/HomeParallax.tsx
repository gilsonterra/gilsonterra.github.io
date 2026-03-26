"use client";

import { useEffect } from "react";

type HomeParallaxProps = {
  children: React.ReactNode;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const HomeParallax: React.FC<HomeParallaxProps> = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement;
    const state = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
      frame: 0 as number | null,
    };

    const setSafeHeight = () => {
      const headerHeightValue = getComputedStyle(root)
        .getPropertyValue("--header-height")
        .trim();
      const headerHeight = Number.parseFloat(headerHeightValue || "0");
      const safeHeight = Math.max(window.innerHeight - headerHeight, 0);

      root.style.setProperty("--safe-height", safeHeight + "px");
    };

    const animateParallax = () => {
      state.currentX += (state.targetX - state.currentX) * 0.08;
      state.currentY += (state.targetY - state.currentY) * 0.08;

      root.style.setProperty("--pointer-x", `${state.currentX.toFixed(2)}px`);
      root.style.setProperty("--pointer-y", `${state.currentY.toFixed(2)}px`);

      const moving =
        Math.abs(state.targetX - state.currentX) > 0.05 ||
        Math.abs(state.targetY - state.currentY) > 0.05;

      state.frame = moving ? window.requestAnimationFrame(animateParallax) : null;
    };

    const setParallaxTarget = (clientX: number, clientY: number) => {
      const xRatio = clientX / window.innerWidth - 0.5;
      const yRatio = clientY / window.innerHeight - 0.5;

      state.targetX = clamp(xRatio * 28, -14, 14);
      state.targetY = clamp(yRatio * 20, -10, 10);

      if (!state.frame) {
        state.frame = window.requestAnimationFrame(animateParallax);
      }
    };

    const resetParallax = () => {
      state.targetX = 0;
      state.targetY = 0;

      if (!state.frame) {
        state.frame = window.requestAnimationFrame(animateParallax);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      setParallaxTarget(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (touch) {
        setParallaxTarget(touch.clientX, touch.clientY);
      }
    };

    setSafeHeight();
    window.addEventListener("resize", setSafeHeight);
    window.addEventListener("orientationchange", setSafeHeight);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mouseleave", resetParallax);
    window.addEventListener("touchend", resetParallax);

    return () => {
      window.removeEventListener("resize", setSafeHeight);
      window.removeEventListener("orientationchange", setSafeHeight);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", resetParallax);
      window.removeEventListener("touchend", resetParallax);

      if (state.frame) {
        window.cancelAnimationFrame(state.frame);
      }
    };
  }, []);

  return <>{children}</>;
};

export default HomeParallax;
