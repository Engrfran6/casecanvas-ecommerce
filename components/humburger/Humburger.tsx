'use client';
import {MouseEventHandler} from 'react';
import './humburger.css';

type HumburgerProps = {
  menuOpen: boolean;
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
};

const Humburger = ({menuOpen, toggleMenu}: HumburgerProps) => {
  return (
    <button onClick={toggleMenu} className="md:hidden z-50 flex items-center text-gray-800">
      <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </button>
  );
};

export default Humburger;
