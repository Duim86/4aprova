import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import DenseTable from '../../components/ShowsTable';
import useStyles from './style';

function ShowsPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <DenseTable />
      <Footer />
    </div>
  );
}

export default ShowsPage;
