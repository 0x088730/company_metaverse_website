import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import './style.scss'
const Dashboard = () => {
  return (
    <>
    <div className='dashboardflexbar'>
      <LeftSideBar />
      <RightSideBar />
    </div>
    </>
  )
}
export default Dashboard;