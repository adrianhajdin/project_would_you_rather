import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  list: {
    display: 'flex',
    alignItems: 'center',
  },
  typography: {
    marginRight: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    toolbar: {
      flexDirection: 'column',
    },
  },
}));

