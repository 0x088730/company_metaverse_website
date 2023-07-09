import React, { useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);


function CompanyLogo(props) {
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  return (
    <>
      <div
        className="image-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img ref={imgRef} src={props.src} alt={props.alt} />
      </div>
    </>
  );
}

export default CompanyLogo;
