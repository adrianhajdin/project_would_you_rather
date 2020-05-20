const initialState = {
  questions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS':
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

