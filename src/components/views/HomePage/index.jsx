import bgImage from "../../../assets/image/backgroundimage/bg.png";
import TeamBio from "./TeamBio.jsx";
import MaskSection from "./MaskSection.jsx";
import ImageAnimationEffect from "./ImageAnimationEffect";
import LogoImage from "../../../assets/image/Logos/Logo2.png";
// import Character from "../../../assets/image/backgroundimage/chracter.png";
import "./homeStyle.scss";

const HomeContainer = () => {
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
        <ImageAnimationEffect src={LogoImage} alt="Description of the image" />
      </div>
      <div>
        <TeamBio />
        <MaskSection />
      </div>
    </div>
  );
};

export default HomeContainer;
