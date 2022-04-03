import { ThemeProvider, createTheme } from '@mui/material/styles';

import propTypes from 'prop-types';
import {
  PRIMARY, PRIMARYLIGHT, PRIMARYTEXT, SECONDARY, SECONDARYLIGHT, SECONDARYTEXT,
} from './ThemeColors';

const buttonTheme = {
  backgroundColor: '#a0877e',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#d1b7ad',
  },
};
const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY,
      light: PRIMARYLIGHT,
      contrastText: PRIMARYTEXT,
    },
    secondary: {
      main: SECONDARY,
      light: SECONDARYLIGHT,
      contrastText: SECONDARYTEXT,

    },
  },
  components: {

    MuiButton: {
      styleOverrides: {
        outlined: buttonTheme,
        contained: buttonTheme,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: SECONDARYLIGHT,
          width: 'min(200px,70vw)',

        },
      },
    },
  },
});
const MyTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

MyTheme.propTypes = {
  children: propTypes.instanceOf(Object).isRequired,
};

export default MyTheme;
