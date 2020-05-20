import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const UserCard = ({ user: { name, questions, answers } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">{name}</Typography>
          <Typography variant="subtitle1" color="textSecondary">Questions Asked: {questions.length}</Typography>
          <Typography variant="subtitle1" color="textSecondary">Questions Created: {Object.keys(answers).length}</Typography>
          <Typography variant="subtitle1" color="textSecondary">Score: {questions.length + Object.keys(answers).length} </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://via.placeholder.com/150"
        title={name}
      />
    </Card>
  );
};

export default UserCard;
