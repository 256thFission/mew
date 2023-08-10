import { createTheme, NextUIProvider, Text } from '@nextui-org/react';

// 2. Call `createTheme` and pass your custom values
const stitchTheme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      background: '$transparent',
      slate: '#446168',
      redOrange: '#F7824f',
      primary: {
        DEFAULT: '#44afa9',
        foreground: '#000000',
      },
      orange: '#f59b56',
      white: '#fff',
      shadow: '#d9d9d9',
      yellow: '#FCD252',
      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

export default stitchTheme;
