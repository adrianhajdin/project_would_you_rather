const initialState = {
  users: [],
  activeUser: 'johndoe',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, users: action.payload };
    case 'SELECT_ACTIVE_USER':
      return { ...state, activeUser: action.payload };
    default:
      return state;
  }
};
