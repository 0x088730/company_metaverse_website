import "./style.scss";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import AppsIcon from "@mui/icons-material/Apps";
import Logo from "../../../assets/image/Logos/logoIcon.png";
import { openModal } from "../../../redux/actions/modalActions";

const TopNavBar = ({openModal}) => {

  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  }

  const handleClick = (value) => {
    console.log(value)
  }


  return (
    <>
      <div className="flexHeader">
        <div className={`topnav ${isResponsive ? "responsive" : ""}`}>
          <button
            style={{
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
            className="logoPos"
            onClick={() => handleClick("logo")}
          >
            <img src={Logo} alt="" />
          </button>
          <button
            style={{
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => handleClick("logo")}
          >
            What We Are
          </button>
          <button
            style={{
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => handleClick("logo")}
          >
            Our Team
          </button>
          <button
            style={{
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => handleClick("logo")}
          >
            Jobs
          </button>
          <button
            style={{
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={openModal}
          >
            SignIn
          </button>
          <button
            style={{
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
            href="#"
            className="icon"
            onClick={toggleResponsive}
          >
            <AppsIcon />
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);
