'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import logo from '@/public/logo.png';
import Container from '../Container';
import Image from 'next/image';

const headerNavMenu = [
  {
    title: 'Home',
    href: '#!',
  },
  {
    title: 'About',
    href: '#!',
  },
];

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <Container className="lg:flex lg:justify-between relative ">
        <Link href="/" className="text-2xl font-bold  ">
          <Image
            src={logo}
            alt="logo"
            className="justify-self-center lg:w-44 w-26"
          />
        </Link>
        <nav className="">
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              style={{
                display: isNavOpen ? 'none' : 'block',
              }}
              className="HAMBURGER-ICON space-y-2 absolute top-0 right-4 z-50 cursor-pointer"
              role="button"
              aria-label="Menu"
              tabIndex={0}
              onClick={() => setIsNavOpen((prev) => !prev)}>
              <span className="block h-0.5 w-5  bg-white"></span>
              <span className="block h-0.5 w-5  bg-white"></span>
              <span className="block h-0.5 w-5  bg-white"></span>
            </div>

            <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
              <div
                className="absolute top-10 right-4 cursor-pointer space-y-2"
                onClick={() => setIsNavOpen(false)}>
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <span className="absolute block h-0.5 w-5 bg-white transform rotate-45 transition-transform duration-300"></span>
                  <span className="absolute block h-0.5 w-5 bg-white transform -rotate-45 transition-transform duration-300"></span>
                </div>
              </div>
              <ul className=" list-none space-y-6">
                {headerNavMenu.map((item) => (
                  <li key={item.title}>
                    <Link
                      className="text-white text-xl font-semibold relative after:absolute after:bottom-0 after:left-0 after:bg-white after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                      href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <ul className="lg:flex space-x-10 text-lg font-semibold list-none hidden">
            {headerNavMenu.map((item) => (
              <li key={item.title}>
                <Link
                  className="no-underline hover:text-current text-neutral-500"
                  href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
