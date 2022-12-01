import React from 'react'
import { AppBar, Toolbar } from "@mui/material";
import {
  ArrowBackIosSharp,
  Settings,
  KeyboardVoice,
} from "@mui/icons-material";
import styles from './styles';

const NavBar = () => {
  return (
    <div>
      <AppBar sx={styles.appbar}>
        <Toolbar sx={styles.toolbar}>
          <ArrowBackIosSharp />
          <div className="appbar-icon-div">
            <KeyboardVoice />
            <Settings />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
