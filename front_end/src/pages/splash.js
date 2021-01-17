import React, { useEffect } from "react";

import Logo from "../assets/logo.svg";

import "../styles/pages/splash.css";

export default function Splash() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  }, []);

  return (
    <div id="landing-page">
      <img src={Logo} alt="Logo" />
    </div>
  );
}
