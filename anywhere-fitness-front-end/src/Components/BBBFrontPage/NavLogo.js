import React from "react";
import navLogo from "./../../Images/navLogoFile.png";

export default function Logo() {
  return (
    <div>
      <img
      src={navLogo} class="logo" id="navlogo" alt="Brand Logo for Anywhere Fitness" />
    </div>
  );
}
