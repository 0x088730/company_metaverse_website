import React, { useState, useEffect } from 'react';
import { gapi, loadAuth2 } from 'gapi-script'
import {connect, useDispatch} from 'react-redux'
import { UserCard } from './UserCard';
import {Auth} from "../../../redux/actions/userActions";
import Google from "../../../assets/image/backgroundimage/search.png"
import Linkedin from "../../../assets/image/backgroundimage/linkedin.png"
import FaceBook from "../../../assets/image/backgroundimage/facebook.png"
import './GoogleLogin.css';

const GoogleLogin  = (props) => {
  console.log(props)
  const [user, setUser] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, "44599695390-gup6helb1r9diigcs629dvp14dal92e9.apps.googleusercontent.com", '')
      if (auth2.isSignedIn.get()) {
          updateUser(auth2.currentUser.get())
      } else {
          attachSignin(document.getElementById('customBtn'), auth2);
      }
    }
    setAuth2();
  }, []);

  useEffect(() => {
    if (!user) {
      const setAuth2 = async () => {
        const auth2 = await loadAuth2(gapi, "44599695390-gup6helb1r9diigcs629dvp14dal92e9.apps.googleusercontent.com", '')
        attachSignin(document.getElementById('customBtn'), auth2);
      }
      setAuth2();
    }
  }, [user])

  const updateUser = (currentUser) => {
    console.log(currentUser.getBasicProfile().getEmail())
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();
    const profileEmail = currentUser.getBasicProfile().getEmail();
    const userInfo = {
      name: name,
      profileImg: profileImg,
      email: profileEmail
    }
    dispatch(Auth(userInfo));
    // console.log(userInfo)
    setUser({
      name: name,
      profileImg: profileImg,
      email: profileEmail
    });
  };


  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(element, {},
      (googleUser) => {
        updateUser(googleUser);
      }, (error) => {
      console.log(JSON.stringify(error))
    });
  };

  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setUser(null);
      console.log('User signed out.');
    });
  }


  if(user) {
    return (
      <div className="container">
        <UserCard user={user} />
        <div id="" className="btn logout" onClick={signOut}>
          Logout
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div id="customBtn" className="btn login">
        <img src={Google} alt="" className='googleImg'/>
      </div>
      <div id="customBtn" className="btn login">
        <img src={Linkedin} alt="" className='googleImg'/>
      </div>
      <div id="customBtn" className="btn login">
        <img src={FaceBook} alt="" className='googleImg'/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  Auth
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogin);
