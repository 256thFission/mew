import '../styles/globals.css';
import { createTheme } from '@mui/material';
import Head from 'next/head';
import '@fontsource/roboto-mono';
import MultiStep from 'react-multistep';
import { NextUIProvider } from '@nextui-org/react';
import HeaderTwo from '../components/HeaderTwo';
import { AuthContextProvider } from '../context/AuthContext';
import HeaderNew from '../components/HeaderNew';
import stitchTheme from '../utils/stitchTheme';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <themeprovider>
        <NextUIProvider theme={stitchTheme}>

          {/* <Layout> */}
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="shortcut icon" href="../favicon.ico" />
          </Head>
          <HeaderNew/>
        </NextUIProvider>

        <Component {...pageProps} />

        {/* </Layout> */}

      </themeprovider>

    </AuthContextProvider>

  );
}

export default MyApp;
