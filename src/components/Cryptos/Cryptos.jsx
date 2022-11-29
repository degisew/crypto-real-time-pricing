import React from 'react'
import { Container, Grid } from '@mui/material';
import Crypto from './Crypto/Crypto';

const Cryptos = () => {
  return (
    <Container>
        <div className="spacer-div" />
      <Grid
        container
        justifyContent="center"
        display="flex"
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Crypto />
      </Grid>
    </Container>
  );
}

export default Cryptos
