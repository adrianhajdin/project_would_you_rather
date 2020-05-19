import React from 'react';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';
import useStyles from './styles';

const Main = ({ children, title }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={10} md={6}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h4">{title}</Typography>
          <Divider className={classes.divider} />
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Main;
