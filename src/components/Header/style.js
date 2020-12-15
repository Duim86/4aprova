import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'black',
  },
  logo: {
    width: 200,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  links: {
    margin: theme.spacing(1),
    textDecoration: 'none',
  },
}));

export default useStyles;
