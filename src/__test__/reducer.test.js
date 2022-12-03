import { fetchData } from '../redux/reducer';
import '@testing-library/jest-dom';

test('should return all', async () => {
  expect(fetchData()).toHaveLength(3);
});
