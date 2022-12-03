import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Grid, Card, CardContent, Typography,
} from '@mui/material';

it('render', () => {
  const CustomJSX = () => (
    <Grid
      item
      xs={6}
      md={4}
    >
      <Card>
        <CardContent data-testid="content">
          <Typography variant="h5">crypto</Typography>
          <Typography variant="body1">crypto</Typography>
          <Typography variant="body2">crypto</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
  render(<CustomJSX />);
  const tag = screen.getByTestId('content');
  expect(tag).toBeInTheDocument();
});
