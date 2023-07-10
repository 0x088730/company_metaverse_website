import bgImage from "../../../assets/image/backgroundimage/grey-texture-background.jpg";
import threeHero from "../../../assets/image/backgroundimage/monster_hero.png";
import Slide from "react-reveal/Slide";
import React, { useState, useEffect } from "react";

const JobBio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
        console.log(window.scrollY);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
            height: "auto",
          }}
        >
          <div className="jobIntro">
            <div className="leftSide">
              <div className="theTeam">Jobs</div>
              <div className="homeSectionSubtitle">Join the team</div>
              <div className="homeSectionText">
                We’re looking for applicants who are self-driven, put players
                first, and that have a history of making cool stuff. In return,
                we can offer the flexibility of remote working in an environment
                that values and supports individual creativity and passion and
                believes in fostering new talent. We recognize the value of
                diversity in every sense and actively encourage candidates from
                diverse backgrounds to apply. For more information and a list of
                our current openings, please see the Jobs page.
              </div>
            </div>
            <div className="rightSide">
              <div>
                <Slide bottom>
                  <img src={threeHero} alt="" className="threeHero" />
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobBio;
