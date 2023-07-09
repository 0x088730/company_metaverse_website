import Logo from "../../../assets/image/Logos/Logo2.png";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <div className="footerStyleSection">
        <div className="logoSection">
          <div className="logoPos">
            <img src={Logo} alt="" className="bottonLogo" />
          </div>
          <div className="footerMenu">
            <div>Contact</div>
            <div>Cookie Policy</div>
            <div>Privacy</div>
            <div>Security</div>
            <div>Legal</div>
            <div>Press</div>
          </div>
        </div>
        <div className="footerStyleHrSection"></div>
      </div>
    </>
  );
};
export default Footer;
