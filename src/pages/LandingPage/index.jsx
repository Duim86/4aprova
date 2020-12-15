import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useStyles from './style';
import DenseTable from '../../components/ShowsTable';

function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <section className={classes.section}>
        <div className={classes.text}>
          <h1>Pennywise</h1>
          <h2>NEVER GONNA DIE</h2>
        </div>
      </section>
      <DenseTable />
      <Footer />
    </div>
  );
}

export default LandingPage;
