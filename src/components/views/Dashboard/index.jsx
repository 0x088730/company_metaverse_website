import react, {useState} from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import './style.scss'
const Dashboard = () => {
  const [buttonValue, setButtonValue] = useState('');

  const handleButtonClick = (value) => {
    setButtonValue(value);
    console.log("---------", value)
  };

  return (
    <>
    <div className='dashboardflexbar'>
      <LeftSideBar onButtonClick={handleButtonClick} />
      <RightSideBar buttonValue={buttonValue}/>
    </div>
    </>
  )
}
export default Dashboard;