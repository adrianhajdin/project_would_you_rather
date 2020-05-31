import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  cover: {
    width: 75,
    paddingRight: theme.spacing(2),
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  formControl: {
    width: '100%',
    paddingLeft: theme.spacing(2),
  },
}));

