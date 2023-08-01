import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // spacing: 4,
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
  Button: {
    backgroundColor: '#3c52b2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    },

  },

});
export default theme;
