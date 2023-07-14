import "./style.scss";
import react, {useState} from 'react';
import { connect, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {Auth} from "../../../redux/actions/userActions";
import Logo from "../../../assets/image/Logos/logoIcon.png";

const UserDashBar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  }

  const gotoRoot = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  }
  const handleClick = () => {

  }
  return (
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
            onClick={gotoRoot}
          >
            LogOut
          </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  Auth
};

export default connect(null, mapDispatchToProps)(UserDashBar);
