import React, { useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
// import "./styles.css";

gsap.registerPlugin(CSSPlugin);

function ImageAnimationEffect(props) {
  const imgRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(imgRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div className="image-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="image-overlay" ref={overlayRef}></div>
      <img ref={imgRef} src={props.src} alt={props.alt} />
    </div>
  );
}

export default ImageAnimationEffect;