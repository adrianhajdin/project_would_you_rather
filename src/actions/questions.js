import { _getQuestions } from '../data';

export const getQuestions = (type) => async (dispatch, getState) => {
  const questions = await _getQuestions();
  const { users: { activeUser } } = getState();

  const answeredIds = Object.keys(activeUser.answers);

  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  dispatch({ type: 'FETCH_QUESTIONS', payload: (type === 'answered' ? answered : unanswered) });
};

