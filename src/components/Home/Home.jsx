import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/reducer';
import Cryptos from '../Cryptos/Cryptos';

const Home = () => {
  const data = useSelector((state) => state.crypto.crypto);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0) dispatch(fetchData());
  }, [data.length, dispatch]);
  return (
    <div>
      <Cryptos />
    </div>
  );
};

export default Home;
