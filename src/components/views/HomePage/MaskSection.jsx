import bgImage from '../../../assets/image/backgroundimage/zoneImage.jpg'
import maskImage from '../../../assets/image/backgroundimage/mask_bg.png'

const MaskSection = () => {
  return (
    <>
      <div style={{
        maskImage: `url(${maskImage})`,
        WebkitMaskImage: `url(${maskImage})`,
        marginTop: '-90px',
        height: '980px'
      }}>
        <img src={bgImage} className='zoneBg'/>
      </div>
    </>
  );
};

export default MaskSection;
