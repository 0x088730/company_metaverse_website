import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PagesIcon from '@mui/icons-material/Pages';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import TimeSheetIcon from '@mui/icons-material/AccessTime';
import { insertDashboardStatus } from '../../../redux/actions/dashboardActions';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#000',
    borderRight: `1px solid ${theme.palette.divider}`,
    color: '#fff',
    height: '100%',
    padding: theme.spacing(2),
    width: 50,
    transition: 'width 0.5s ease-in-out',
  },
  expanded: {
    width: 200,
  },
}));

const LeftSidebar = ({onButtonClick}) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleButtonClick = (value) => {
    console.log(value)
    onButtonClick(value);
    dispatch(insertDashboardStatus(value));
  }

  return (
    <div className={`${classes.root} ${expanded ? classes.expanded : ''}`} id="leftSideBG">
      <List>
        <div className='sidebarcontrol'>
          {
            expanded ? <ArrowLeftIcon onClick={handleClick}/> : <FormatIndentIncreaseIcon onClick={handleClick}/>
          }
        </div>
        <ListItem button onClick={() => handleButtonClick("Dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleButtonClick("Time Tracking")}>
          <ListItemIcon>
            <TimeSheetIcon />
          </ListItemIcon>
          <ListItemText primary="TimeSheet" />
        </ListItem>
        <ListItem button onClick={() => handleButtonClick("Media")}>
          <ListItemIcon>
            <PhotoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Media" />
        </ListItem>
        <ListItem button onClick={() => handleButtonClick("Pages")}>
          <ListItemIcon>
            <PagesIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItem>
        <ListItem button onClick={() => handleButtonClick("Comments")}>
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText primary="Comments" />
        </ListItem>
        <ListItem button onClick={() => handleButtonClick("Users")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button onClick={() => handleButtonClick("Tools")}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Tools" />
        </ListItem>
        <ListItem button onClick={() => handleButtonClick("Settings")}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps,mapDispatchToProps)(LeftSidebar);
