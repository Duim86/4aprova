import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa';

import useStyles from './style';
import logo from '../../assets/pw-header.png';

export default function Footer() {
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
          <a href="https://www.facebook.com/pennywise/" target="blank">
            <IconButton color="primary" size="medium">
              <FaFacebookSquare />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/_pennywise/?hl=pt" target="blank">
            <IconButton color="primary" size="medium">
              <FaInstagramSquare />
            </IconButton>
          </a>
          <a href="https://twitter.com/pennywise" target="blank">
            <IconButton color="primary" size="medium">
              <FaTwitterSquare />
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
