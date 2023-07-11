import Logo from "../../../assets/image/Logos/Logo2.png";
import { connect } from 'react-redux';
import { openModal } from '../../../redux/actions/modalActions';
import "./style.scss";

const Header = ({ openModal }) => {
  return (
    <>
      <div className="flexHeader">
        <div>
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="header">
          <div>Who We Are</div>
          <div>HYTALE</div>
          <div>OUR TEAM</div>
          <div>JOBS</div>
          <div onClick={() => openModal(true)}>SignIn</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);