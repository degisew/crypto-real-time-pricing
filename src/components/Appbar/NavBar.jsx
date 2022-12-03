import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';
import {
  ArrowBackIosSharp,
  Settings,
  KeyboardVoice,
} from '@mui/icons-material';
import styles from './styles';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <AppBar sx={styles.appbar}>
        <Toolbar sx={styles.toolbar}>
          {location.pathname !== '/' ? (
            <ArrowBackIosSharp onClick={() => navigate(-1)} />
          ) : (
            <div />
          )}
          <div className="appbar-icon-div" data-testid="appbar-icon-div">
            <KeyboardVoice />
            <Settings />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
