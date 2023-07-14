import React from 'react';
import { useSelector } from 'react-redux';
import TimeTrack from './TimeTrack'

const RightSidebar = () => {
  const dashboardStatus = useSelector((state) => state.dashboard.dashboardStatus);
  return (
    <div className='right-sidebar'>
      <div>
        <h1>{dashboardStatus}</h1>
      </div>
      {
        dashboardStatus === "TimeSheet" ? <TimeTrack /> : null
      }
    </div>
  );
};


export default RightSidebar;
