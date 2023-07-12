import React, {useEffect} from 'react';

export const UserCard = (props) => {
  useEffect(() => {
    
  })
  return (
    <div className='userProfileStyle'>
      <h2>Name: {props.user.name}</h2>
      <h1>Email: {props.user.email}</h1>
      <img src={props.user.profileImg} alt="user profile" />
    </div>
  );
}
