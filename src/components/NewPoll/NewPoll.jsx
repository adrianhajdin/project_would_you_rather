import React from 'react';
import { Typography, TextField } from '@material-ui/core';
import useStyles from './styles';

const NewPoll = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" align="center">Would you rather...</Typography>

      <div className={classes.container}>
        <TextField label="Option 1" />
        <Typography variant="h5">OR</Typography>
        <TextField label="Option 2" />
      </div>
    </>
  );
};

export default NewPoll;
