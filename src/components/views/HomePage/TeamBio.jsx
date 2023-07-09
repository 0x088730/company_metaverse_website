import bgImage from "../../../assets/image/backgroundimage/grey-texture-background.jpg";
import threeHero from "../../../assets/image/backgroundimage/three_hero.png";

const TeamBio = () => {
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
          <div className="teamIntro">
            <div className="leftSide">
              <div className="theTeam">The Team</div>
              <div className="homeSectionSubtitle">Find out who we are</div>
              <div className="homeSectionText">
                We are a team of passionate, self-driven game developers from a
                diverse set of backgrounds. The Hypixel Studios team is a mix of
                modders, indies and industry veterans committed to the goal of
                creating the world’s most empowered gaming communities. Although
                the company is headquartered in Derry~Londonderry, Northern
                Ireland, we operate a remote-first model and our team members
                contribute from all over the world.
              </div>
            </div>
            <div className="rightSide">
              <div>
                <img src={threeHero} alt="" className="threeHero"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamBio;
