import bgImage from "../../../assets/image/backgroundimage/zoneImage.jpg";
import maskImage from "../../../assets/image/backgroundimage/mask_bg.png";

const MaskSection = () => {
  return (
    <>
      <div>
        <div
          className="masked-image"
          style={{
            maskImage: `url(${maskImage})`,
            WebkitMaskImage: `url(${maskImage})`,
            marginTop: "-90px",
            height: "980px",
          }}
        >
          <img src={bgImage} className="zoneBg" alt="zoneBg"/>
        </div>
        <div style={{height: 0}}>
          <div className="maskedSectionBio">
            <div className="leftMaskedSection"></div>
            <div className="rightMaskedSection">
              <div className="companyTxtStyle">Hytale</div>
              <div className="companyPTxtStyle">
                We are currently working on Hytale, a block game that combines
                the scope of a sandbox with the depth of a roleplaying game,
                immersing players in a procedurally generated world where
                teetering towers and deep dungeons promise rich rewards.
                Designed with creative players in mind, Hytale’s engine supports
                everything from block-by-block castle construction to scripting
                and customization delivered using easy to use and powerful
                tools.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaskSection;
