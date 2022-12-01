import React from 'react'
import { useLocation } from 'react-router-dom';
import { Paper, Typography, Container } from '@mui/material';
import styles from './styles';

const Details = () => {
   const location = useLocation();
  const { state } = location;
  return (
    <>
      <div className="details-page-spacer-div"></div>
      <Container sx={styles.container}>
        <div className="title">
          <Typography variant="h4" gutterBottom>
            {state.name}
          </Typography>
        </div>
        <Paper variant="outlined" sx={styles.paper}>
          <div className="container">
            <Typography>Name:</Typography>
            <Typography>{state.name}</Typography>
          </div>
          <div className="container">
            <Typography>ID:</Typography>
            <Typography>{state.id}</Typography>
          </div>
          <div className="container">
            <Typography>Symbol:</Typography>
            <Typography>{state.symbol}</Typography>
          </div>
          <div className="container">
            <Typography>Supply:</Typography>
            <Typography>{state.supply}</Typography>
          </div>
        </Paper>
      </Container>
    </>
  );
}

export default Details
