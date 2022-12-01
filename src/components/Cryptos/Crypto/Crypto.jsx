import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import styles from './styles';
const Crypto = () => {
    const data = useSelector((state) => (state.crypto.crypto));
    console.log(data);

  return (
    <>
      {data.map((crypto) => (
        <Grid
          item
          sx={styles.grid}
          xs={6}
          md={4}
          key={crypto.id}
          component={Link}
          to="/details"
          state={crypto}
        >
          <Card sx={styles.card}>
            <CardContent>
              <Typography variant="h5">{crypto.name}</Typography>
              <Typography variant="body1">{crypto.symbol}</Typography>
              <Typography variant="body2">{crypto.supply}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default Crypto
