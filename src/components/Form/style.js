import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw',
    maxWidth: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
      width: '60ch',
    },
  },
  title: {
    color: '#007bda',
    textAlign: 'center',
    marginBottom: 20,
  },
}));

export default useStyles;
