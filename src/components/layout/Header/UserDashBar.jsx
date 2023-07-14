import "./style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { connect, useDispatch } from "react-redux";
import { Auth } from "../../../redux/actions/userActions";
import Logo from "../../../assets/image/Logos/Logo3.png";

const UserDashBar = () => {

  const [isResponsive, setIsResponsive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  const gotoRoot = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const handleClick = (value) => {
    navigate("/");
    console.log(value)
  };

  return (
    <div className="flexHeaderDash">
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
          <img src={Logo} alt="" style={{width: '13rem'}}/>
        </button>
        <button
          style={{
            textDecoration: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "center",
          }}
          onClick={gotoRoot}
        >
          LogOut
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
  );
};

const mapDispatchToProps = {
  Auth,
};

export default connect(null, mapDispatchToProps)(UserDashBar);
