import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

import styles from './styles';

const Crypto = ({ data }) => (
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
          <CardContent data-testid="content">
            <Typography variant="h5">{crypto.name}</Typography>
            <Typography variant="body1">{crypto.symbol}</Typography>
            <Typography variant="body2">{crypto.supply}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </>
);

Crypto.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Crypto;
