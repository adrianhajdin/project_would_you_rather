import { _getUsers } from '../data';

export const getUsers = () => async (dispatch) => {
  const users = await _getUsers();

  dispatch({ type: 'FETCH_USERS', payload: users });
};

export const selectActiveUser = (user) => async (dispatch) => {
  dispatch({ type: 'SELECT_ACTIVE_USER', payload: user });
};
