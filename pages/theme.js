import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 4,
  palette: {
    type: 'light',
    primary: {
      main: '#111d4a',
      light: '#6290c8',
    },
    secondary: {
      main: '#f39b6d',
    },
    background: {
      paper: '#dffdff',
      default: '#111d4a',
    },
    text: {
      primary: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: 'Roboto Mono',
  },
  div: {
    fontFamily: 'Roboto Mono',
  },

});
export default theme;
