"use client";
import { useEffect } from "react";
import "./globals.css";
import Lenis from "lenis";
import Head from "next/head";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <html lang="en">
      <Head>
        <title>Jonas Guzman - FullStack Dev</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
