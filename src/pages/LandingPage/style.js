import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/images/background.jpg';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'scroll',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    minHeight: 500,
    marginBottom: 20,
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
  },
  text: {
    backgroundColor: 'rgba(21,70,95, 0.5)',
    minHeight: 500,
    width: ' 100vw',
    '& h1': {
      fontSize: 80,
    },
    '& h2': {
      fontSize: 50,
    },
  },
}));

export default useStyles;
