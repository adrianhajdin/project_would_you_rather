import React from 'react';
import { Paper, Typography, Button, Divider, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import useStyles from './styles';

const QuestionCard = ({ question: { author, optionOne, optionTwo }, users }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  return (
    <>
      <Typography variant="h6" gutterBottom color="textSecondary">{users[author].name} asks:</Typography>
      <Paper className={classes.root} elevation={3}>
        <img className={classes.cover} src={users[author].avatarURL} alt={author} />
        <Divider orientation="vertical" flexItem />
        <FormControl className={classes.formControl}>
          <FormLabel>Would you rather:</FormLabel>
          <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
            <FormControlLabel value={optionOne.text} control={<Radio />} label={optionOne.text} />
            <FormControlLabel value={optionTwo.text} control={<Radio />} label={optionTwo.text} />
          </RadioGroup>
        </FormControl>
        <Button className={classes.button} variant="contained" color="primary">Answer Poll</Button>
      </Paper>
    </>
  );
};

export default QuestionCard;
