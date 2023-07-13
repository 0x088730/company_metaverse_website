import React, { useState } from 'react';
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

const LeftSidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleClickEvent = () => {

  }

  return (
    <div className={`${classes.root} ${expanded ? classes.expanded : ''}`}>
      <List>
        <div className='sidebarcontrol'>
          {
            expanded ? <ArrowLeftIcon onClick={handleClick}/> : <FormatIndentIncreaseIcon onClick={handleClick}/>
          }
        
        </div>
        <ListItem button onClick={() => handleClickEvent()}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleClickEvent()}>
          <ListItemIcon>
            <PhotoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Media" />
        </ListItem>
        <ListItem button onClick={() => handleClickEvent()}>
          <ListItemIcon>
            <PagesIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItem>
        <ListItem button onClick={() => handleClickEvent()}>
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText primary="Comments" />
        </ListItem>
        <ListItem button onClick={() => handleClickEvent()}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button onClick={() => handleClickEvent()}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Tools" />
        </ListItem>
        <ListItem button onClick={() => handleClickEvent()}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default LeftSidebar;
