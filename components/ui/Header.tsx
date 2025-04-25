import React from 'react';
import Link from 'next/link';
import logo from '@/public/logo.png';
import Container from '../Container';

function Header() {
  return (
    <header>
      <Container className="flex justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          <img src={logo.src} alt="logo" />
        </Link>
        <nav>
          <ul className="flex space-x-10 text-lg font-semibold list-none ">
            <li>
              <Link
                className="no-underline hover:text-current text-neutral-500"
                href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="no-underline hover:text-current text-neutral-500"
                href="/">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
