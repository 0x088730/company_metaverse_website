import React from 'react';

const RightSidebar = ({ activeButton }) => {
  let content = null;

  switch(activeButton) {
    case 'Posts':
      content = <h1>Posts Content</h1>;
      break;
    case 'Media':
      content = <h1>Media Content</h1>;
      break;
    case 'Pages':
      content = <h1>Pages Content</h1>;
      break;
    case 'Comments':
      content = <h1>Comments Content</h1>;
      break;
    case 'Users':
      content = <h1>Users Content</h1>;
      break;
    case 'Tools':
      content = <h1>Tools Content</h1>;
      break;
    case 'Settings':
      content = <h1>Settings Content</h1>;
      break;
    default:
      content = null;
  }

  return (
    <div className='right-sidebar'>
      {content}
    </div>
  );
};

export default RightSidebar;
