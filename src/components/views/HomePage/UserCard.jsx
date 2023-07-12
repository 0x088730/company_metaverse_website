import React, {useEffect} from 'react';

export const UserCard = (props) => {
  useEffect(() => {
    
  })
  return (
    <div>
      <h2>{props.user.name}</h2>
      <h1>{props.user.email}</h1>
      <img src={props.user.profileImg} alt="user profile" />
    </div>
  );
}
