import bgImage from '../../../assets/image/backgroundimage/bg.png'
import TeamBio from './TeamBio.jsx';
import MaskSection from './MaskSection.jsx';
import CompanyLogo from './CompanyLogoGsap.jsx'
import "./homeStyle.scss";

const HomeContainer = () => {
  return (
    <div className='parent-container'>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "initial",
          backgroundRepeat: "no-repeat",
        }}
      >
        
      </div>
      <div>
        <TeamBio />
        <MaskSection />
      </div>
    </div>
  );
};

export default HomeContainer;
