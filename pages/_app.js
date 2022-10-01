import '../styles/globals.css';
import { createTheme } from '@mui/material';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { ScrollToTop } from '../components/scroll';
import '@fontsource/roboto-mono';
import HeaderTwo from '../components/HeaderTwo';
import { AuthUserProvider } from '../utils/AuthUserProvider';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <themeprovider>
        {/* <Layout> */}
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <link rel="shortcut icon" href="../favicon.ico" />
        </Head>
        <HeaderTwo />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />

        {/* </Layout> */}
      </themeprovider>
    </AuthUserProvider>

  );
}

export default MyApp;
