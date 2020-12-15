import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/images/notFound.jpg';

const useStyles = makeStyles(() => ({
  root: {},
  pageNotFound: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    minHeight: 600,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  title: {
    fontWeight: 700,
    width: '100%',
    color: 'red',
    textAlign: 'center',
    marginBottom: 500,
  },
}));
export default useStyles;
