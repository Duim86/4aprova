import React from 'react';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import Header from '../../components/Header';
import useStyles from './style';

function RegisterForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default RegisterForm;
