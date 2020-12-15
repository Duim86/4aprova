import React, { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import api from '../../server/api';

import useStyles from './style';

export default function DenseTable() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api
      .get('/db.json')
      .then((response) => {
        setShows(response.data.shows);
      })
      .then(setTimeout(() => setIsLoading(false), 1000));
  }, []);
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" component="h2" className={classes.title}>
        Agenda de Shows
      </Typography>
      {isLoading ? (
        <Typography variant="h2" component="h2" className={classes.title}>
          Aguarde
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Data</TableCell>
                <TableCell align="center">Local</TableCell>
                <TableCell align="center">Cidade</TableCell>
                <TableCell align="center">País</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shows.map((show) => (
                <TableRow key={show.id}>
                  <TableCell align="center">{show.date}</TableCell>
                  <TableCell align="center">{show.local}</TableCell>
                  <TableCell align="center">{show.city}</TableCell>
                  <TableCell align="center">{show.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
