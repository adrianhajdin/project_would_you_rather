import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './styles';

const QuestionCard = ({ question: { author, optionOne, optionTwo } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">{author} asks:</Typography>
          <Typography component="h6" variant="h6">Would you rather</Typography>
          <Typography variant="subtitle1" color="textSecondary">{optionOne.text} or...</Typography>
          <Typography variant="subtitle1" color="textSecondary">{optionTwo.text}</Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://via.placeholder.com/150"
        title={author}
      />
    </Card>
  );
};

export default QuestionCard;
