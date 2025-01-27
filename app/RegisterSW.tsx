"use client";
import { use, useEffect } from "react";

function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
      console.log("service worker registered");
    } else {
      console.error("Service worker not supported");
    }
  }, []);

  return null;
}
export default RegisterSW;
