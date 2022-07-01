import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WebIcon from '@material-ui/icons/Web';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FiberPin from '@material-ui/icons/FiberPin';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers({data}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WebIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary="Portal" primary={data.portal} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary="User Name" primary={data.username} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FiberPin />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary="Password" primary={data.password} />
      </ListItem>
    </List>
  );
}
