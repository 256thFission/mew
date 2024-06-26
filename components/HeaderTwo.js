import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Dialog } from '@mui/material';
import { OffcanvasData } from './offcanvas-data';
import DarkLogo from './dark-logo';

function HeaderTwo() {
  const [offcanvas, setOffcanvas] = useState(false);
  const showOffcanvas = () => setOffcanvas(!offcanvas);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  const router = useRouter();

  return (
    <>
      <header className="header-section sticky-style-2  ">
        <div className="custom-container container">
          <div className="grid grid-cols-12 items-center leading-[120px] text-main">
            <div className="lg:col-span-2 col-span-3">
              <DarkLogo />
            </div>
             <div className="  text-cyan-600">
            <nav>
              <ul className="main-menu col-4 col-span-4">
                <li
                  className={'col-span-4',
                  router.pathname === '/'
                    ? 'active'
                    : ''}
                >
                  <Link href="/">
                    <a>
                      <span>Home</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={'col-span-1',
                  router.pathname == '/about'
                    ? 'active'
                    : ''}
                >
                  <Link href="/about">
                    <a>
                      <span>About</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={ 'col-span-1 col-start-4',
                                            router.pathname == '/form'
                                              ? 'active'
                                              : ''
                                        }
                >
                  <Link href="/form">
                    <a>
                      <span>Event Creator</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={
                                            router.pathname == '/contact'
                                              ? 'active'
                                              : ''
                                        }
                >
                  <Link href="/contact">
                    <a>
                      <span>Contact</span>
                    </a>
                  </Link>
                </li>

              </ul>
            </nav>
             </div>

            <div />
          </div>
        </div>
      </header>
      <div
        className={
                    offcanvas
                      ? 'offcanvas-menu-wrap active'
                      : 'offcanvas-menu-wrap'
                }
      >
        <nav className="offcanvas-menu">
          <ul
            className="offcanvas-menu-items"
            onClick={showOffcanvas}
          >
            <li className="navbar-toggle flex justify-between items-center pb-[15px] ">
              <div className="logo">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logo/KVULogo.svg"
                      alt="Logo"
                      width={70}
                      height={70}
                    />
                  </a>
                </Link>
              </div>
              <button
                className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all"
                aria-label="Right Align"
              >
                <AiOutlineClose />
              </button>
            </li>
            {OffcanvasData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link href={item.path}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HeaderTwo;
