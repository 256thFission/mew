import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Text, Link, Button,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import DarkLogo from './dark-logo';
import stitchTheme from '../utils/stitchTheme';

function HeaderNew() {
  const [offcanvas, setOffcanvas] = useState(false);
  const showOffcanvas = () => setOffcanvas(!offcanvas);
  const [activeLink, setActiveLink] = useState('home');
  const [activeColor, setActiveColor] = useState('primary');

  // useEffect(() => {
  //   window.addEventListener('scroll', isSticky);
  //   return () => {
  //     window.removeEventListener('scroll', isSticky);
  //   };
  // });

  // const isSticky = (e) => {
  //   const header = document.querySelector('.header-section');
  //   const scrollTop = window.scrollY;
  //   scrollTop >= 250
  //     ? header.classList.add('is-sticky')
  //     : header.classList.remove('is-sticky');
  // };

  return (
    <Navbar isBordered variant="sticky" color="red" className=" min-width-100vx"
    css = {{
        'box-shadow': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    }}>
      <Navbar.Brand>
        <DarkLogo />
        {/* <Text b color="inherit" hideIn="xs"> */}
        {/*  ACME */}
        {/* </Text> */}
      </Navbar.Brand>
      <Navbar.Content activeColor="primary" hideIn="xs"
      css={{
         fontSize: '17px',

      }}
      >
        <Navbar.Link

          href="/"
          css={{
            color: '$slate',
            '&:hover': {
              color: '$primary',
            },
            '&:active': {
              color: '$redOrange',
            },
            padding: '10'
          }}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          onClick={() => setActiveLink('multiform'),
          console.log(activeLink)}
          href="/multiform"
          activeColor={activeColor}
          css={{
            color: '$slate',
            '&:hover': {
              color: '$primary',
            },
            ...(activeLink === 'multiform' && { color: '$redOrange !important' }),
          }}
        >
          Event Creator
        </Navbar.Link>
        <Navbar.Link
          onClick={() => setActiveLink('about')}
          href="/about"
          css={{
            color: '$slate',
            '&:hover': {
              color: '$primary',
            },
          }}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="/contact"
          css={{
            color: '$slate',
            '&:hover': {
              color: '$primary',
            },
          }}
        >
          Contact
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button
            auto
            flat
            as={Link}
            href="/contact "
            css={{
              color: '$yellow',
              'background-color': '$redOrange',
              'margin-right':  '$5',
              'text-color': '$slate',
            }}
          >
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

export default HeaderNew;
