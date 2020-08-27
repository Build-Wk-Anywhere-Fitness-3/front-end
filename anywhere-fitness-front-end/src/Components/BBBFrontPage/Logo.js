import React, { useEffect, useRef } from "react";
import logo from "../../Images/logoFile.png";
import { TweenMax, Power3 } from 'gsap';

export default function Logo() {
  let logoItem = useRef(null);

  useEffect(() => {
    console.log(logoItem);
    // formItem.style.display = 'none'
    TweenMax.to(
      logoItem, 
      .8,
      { 
        opcacity: 1,
        y: -30,
        ease: Power3.easeOut 
      }
    )
  }, [])
  return (
    <div >
      <img
      ref={el => {logoItem = el}}
      src={logo} className="logo" id="mainLogo" alt="Brand Logo for Anywhere Fitness" />
    </div>
  );
}
