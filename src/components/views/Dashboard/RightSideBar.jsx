import React from 'react';
import { connect } from 'react-redux';

const RightSidebar = ({buttonValue}) => {

  return (
    <div className='right-sidebar'>
      <h1>Ghost: {buttonValue }</h1>
    </div>
  );
};


export default connect(null, null)(RightSidebar);
