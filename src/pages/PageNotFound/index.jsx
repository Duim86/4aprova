import { Typography } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import useStyles from './style';

function PageNotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.pageNotFound}>
        <Typography variant="h2" component="h1" className={classes.title}>
          Página não encontrada
        </Typography>
      </div>
      <Footer />
    </div>
  );
}

export default PageNotFound;
