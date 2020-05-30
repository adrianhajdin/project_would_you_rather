import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

const QuestionCard = ({ question: { author, optionOne, optionTwo }, users }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <div className={classes.details}>
        <Typography component="h5" variant="h5">{author} asks:</Typography>
        <Typography component="h6" variant="h6">Would you rather</Typography>
        <Typography variant="subtitle1" color="textSecondary">{optionOne.text} or...</Typography>
        <Typography variant="subtitle1" color="textSecondary">{optionTwo.text}</Typography>
      </div>
      <Button variant="contained" color="primary">Answer Poll</Button>
      <img className={classes.cover} src={users[author].avatarURL} alt={author} />
    </Paper>
  );
};

export default QuestionCard;
