import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Tabs, Tab, Box } from '@material-ui/core';

// import useStyles from './styles';
import QuestionCard from './QuestionCard/QuestionCard';
import { getQuestions } from '../../actions/questions';

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && (<Box p={3}>{children}</Box>)}
  </div>
);

const Home = () => {
//   const classes = useStyles();
  const [value, setValue] = useState(0);
  const { questions: { questions }, users: { users } } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions('answered'));
  }, [dispatch]);

  return (
    <>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Unanswered" />
          <Tab label="Answered" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {questions.map((question) => <QuestionCard key={question.id} question={question} users={users} />)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Answered
      </TabPanel>
    </>
  );
};
export default Home;
