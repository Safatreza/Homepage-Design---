"use client";

import { useEffect } from "react";

/** Forces the page to start at the very top on every visit. */
export default function ScrollReset() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);
  return null;
}
