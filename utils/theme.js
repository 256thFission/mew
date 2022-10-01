import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 4,
  palette: {
    type: 'light',
    primary: {
      main: '#111d4a',
      light: '#8BBF9F',
    },
    secondary: {
      main: '#f39b6d',
    },
    background: {
      paper: '#F5E0B7',
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
