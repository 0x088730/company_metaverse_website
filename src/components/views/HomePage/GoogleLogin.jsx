import React, { useState, useEffect } from 'react';
import { gapi, loadAuth2 } from 'gapi-script'
import { Auth } from '../../../redux/actions/userActions'
import { UserCard } from './UserCard';
import { connect } from 'react-redux';
import './GoogleLogin.css';

const GoogleLogin  = () => {
  const [user, setUser] = useState(null);

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
      userName: name,
      userEmail: profileEmail,
      userImg: profileImg
    }
    Auth(userInfo);
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
        Login
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = {
  Auth,
};


export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogin);
