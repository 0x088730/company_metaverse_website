import "./style.scss";
import { useEffect } from "react";
import TopNavBar from "./TopNavBar";
import UserDashBar from "./UserDashBar";
import { connect } from "react-redux";
import { openModal } from "../../../redux/actions/modalActions";

const Header = ({ auth,isAuthenticated }) => {
  useEffect(() => {});
  {console.log(auth)}
  return (
    <>
    {
      isAuthenticated ? <UserDashBar />: <TopNavBar /> 
    }
    </>
  );
};

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
