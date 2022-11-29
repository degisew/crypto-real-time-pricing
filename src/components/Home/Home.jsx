import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/reducer';
import Cryptos from '../Cryptos/Cryptos';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <Cryptos/>
    </div>
  )
}

export default Home
