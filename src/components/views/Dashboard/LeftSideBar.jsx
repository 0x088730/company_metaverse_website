import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#000',
    borderRight: `1px solid ${theme.palette.divider}`,
    color: '#fff',
    height: '100%',
    padding: theme.spacing(2),
  },
}));

const LeftSidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhotoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Media" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PagesIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText primary="Comments" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Tools" />
        </ListItem>
        <ListItem button>
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
