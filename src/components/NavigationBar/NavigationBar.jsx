import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.list}>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/new-poll" color="inherit">New Poll</Button>
            <Button component={Link} to="/leaderboard" color="inherit">Leaderboard</Button>
          </div>
          <div className={classes.list}>
            <Typography className={classes.typography} display="inline" variant="subtitle1">Logged in as: Person</Typography>
            <Button component={Link} to="change-user" color="inherit">Change User</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
