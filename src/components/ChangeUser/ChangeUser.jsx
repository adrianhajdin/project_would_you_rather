import React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { selectActiveUser } from '../../actions/users';

const ChangeUser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users, activeUser } = useSelector((store) => store.users);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>User</InputLabel>
      <Select value={activeUser} onChange={(e) => dispatch(selectActiveUser(e.target.value))}>
        {Object.keys(users).map((user) => <MenuItem key={user} value={user}>{user}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default ChangeUser;
