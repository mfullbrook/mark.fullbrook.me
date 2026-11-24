"use client";

import { useEffect, useState, type ReactNode } from "react";

// The address is stored reversed and base64-encoded, so it never appears as
// plain text in the exported HTML or in the JavaScript bundle. It is decoded
// in the browser only after the visitor first moves, scrolls, touches or tabs,
// which keeps it away from scrapers that read the markup or render the page
// without interacting with it.
//
// To change the address, run this in a browser console and paste the result:
//   btoa("you@example.com".split("").reverse().join(""))
const ENCODED = "ZW0ua29vcmJsbHVmQGtyYW0=";

const SIGNS_OF_LIFE = ["pointermove", "pointerdown", "touchstart", "keydown", "scroll"] as const;

export function EmailLink({ children }: { children?: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const stop = () => SIGNS_OF_LIFE.forEach((name) => window.removeEventListener(name, reveal));
    function reveal() {
      setAddress(atob(ENCODED).split("").reverse().join(""));
      stop();
    }
    SIGNS_OF_LIFE.forEach((name) => window.addEventListener(name, reveal, { passive: true }));
    return stop;
  }, []);

  if (!address) {
    return <span className="email-pending">Email {children}</span>;
  }

  return (
    <a href={`mailto:${address}`}>
      {address} {children}
    </a>
  );
}
