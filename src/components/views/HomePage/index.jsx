import bgImage from "../../../assets/image/backgroundimage/treezone.jpg";
import TeamBio from "./TeamBio.jsx";
import JobBio from "./JobBio.jsx";
import MaskSection from "./MaskSection.jsx";
import ImageAnimationEffect from "./ImageAnimationEffect";
import LogoImage from "../../../assets/image/Logos/Logo2.png";
import Footer from "../../layout/Footer";
import TextEmphasis from "./TextEmphasis";
import { Canvas } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect, useState, useRef } from "react";
import "./homeStyle.scss";
import Modal from "./Modal";

function Model({ url }) {
  const [model, setModel] = useState(null);
  const groupRef = useRef(null);
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        setModel(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );
  }, [url]);

  // return model ? <primitive object={model} /> : null;
  return (
    <>
      {model && (
        <group ref={groupRef} scale={[3,3,3]} position={[0,-3,0]}>
          <primitive object={model} />
        </group>
      )}
    </>
  )
}

function HomeContainer() {
  return (
    <div className="parent-container">
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "initial",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div class="three-hero-image-container">
          <img src={Character} alt="" className="CharacterHero" />
        </div> */}
        <div className="characterPos">
          <Canvas style={{height: '969px'}}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model url="./archerglb.glb" />
          </Canvas>
        </div>
        <ImageAnimationEffect src={LogoImage} alt="Description of the image" />
        <TextEmphasis />
      </div>
      <div>
        <Modal />
        <TeamBio />
        <MaskSection />
        <JobBio />
      </div>
      <Footer />
    </div>
  );
}

export default HomeContainer;
