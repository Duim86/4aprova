import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './style';
import logo from '../../assets/pw-header.png';

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link to="/" className={classes.menuButton}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img className={classes.logo} src={logo} alt="logo" />
            </IconButton>
          </Link>
          <Link to="/about" className={classes.links}>
            <Button color="inherit">Sobre</Button>
          </Link>
          <Link to="/albuns" className={classes.links}>
            <Button color="inherit">Albuns</Button>
          </Link>
          <Link to="/contato" className={classes.links}>
            <Button color="inherit">Contato</Button>
          </Link>
          <Link to="/shows" className={classes.links}>
            <Button color="inherit">Shows</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
