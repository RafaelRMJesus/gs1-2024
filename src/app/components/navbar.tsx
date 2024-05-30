"use client"

import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar bg-gray-900 px-96 fixed top-0 w-full z-50 transition-shadow ${shadow ? 'shadow-lg' : ''}`}>
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl"><span className="text-sky-400">Blue</span>Cycle</a>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          <li>
            <a>Item 4</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <div className="navbar-start">
        <a className="btn btn-link text-xl bg-gray-900 text-white flex items-center justify-center">...</a>
      </div>
      </div>
    </div>
  );
};
