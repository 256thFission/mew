import { Fragment } from 'react';
import Footer from './footer';

export * from '../scroll';

function Layout(props) {
  return (
    <>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
