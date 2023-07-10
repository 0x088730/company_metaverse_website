import Logo from '../../../assets/image/Logos/Logo2.png';
import "./style.scss";
const Header = () => {
  return (
    <>
    <div className='flexHeader'>
      <div>
        <img src={Logo} alt="" className='logo'/>
      </div>
      <div className="header">
        <div>Who We Are</div>
        <div>HYTALE</div>
        <div>OUR TEAM</div>
        <div>JOBS</div>
      </div>
      <div>
        <div>
          SignUp
        </div>
        <div>
          SignIn
        </div>
      </div>
    </div>
    </>
  )
}
export default Header;