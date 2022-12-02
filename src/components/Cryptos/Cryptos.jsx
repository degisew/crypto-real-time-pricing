import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from '@mui/material';
import { SearchRounded } from "@mui/icons-material";
import Crypto from './Crypto/Crypto';

const Cryptos = () => {
   const data = useSelector((state) => state.crypto.crypto);
   console.log(data);
   const [searchItem, setSearchItem] = useState("");

   const filteredData = data.filter((crypto) => {
     if (searchItem === "") return crypto;
     if (crypto.name.toLowerCase().includes(searchItem.toLowerCase())) {
       return crypto;
     }
     return null;
   });
  return (
    <Container>
      <div className="search-bar">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search crypto...."
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <SearchRounded className="icon" />
      </div>
      <Grid
        container
        justifyContent="center"
        display="flex"
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Crypto data={filteredData} />
      </Grid>
    </Container>
  );
}

export default Cryptos
