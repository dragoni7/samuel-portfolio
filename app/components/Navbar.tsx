'use client';
import React, { useState } from 'react';
import Navlink from './Navlink';
import { Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/16/solid';
import MenuOverlay from './MenuOverlay';

interface NavbarProps {
  onNavigate: (newSection: string) => void;
}

export default function Navbar(props: NavbarProps) {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#070a1a]">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div onClick={() => props.onNavigate('Landing')}>
          <Navlink href="/">
            <HomeIcon className="h-12 w-12" />
          </Navlink>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navOpen ? (
            <button onClick={() => setNavOpen(true)} className="flex items-center px-3 py-2 rouded text-blue-700">
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button onClick={() => setNavOpen(false)} className="flex items-center px-3 py-2 rouded text-blue-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li onClick={() => props.onNavigate('About')}>
              <Navlink href="#about">About</Navlink>
            </li>
            <li onClick={() => props.onNavigate('Skills')}>
              <Navlink href="#skills">Skills</Navlink>
            </li>
            <li onClick={() => props.onNavigate('Projects')}>
              <Navlink href="#projects">Projects</Navlink>
            </li>
            <li onClick={() => props.onNavigate('Contact')}>
              <Navlink href="#contact">Contact</Navlink>
            </li>
          </ul>
        </div>
      </div>
      {navOpen ? (
        <MenuOverlay>
          <div onClick={() => props.onNavigate('About')}>
            <Navlink href="#about">About</Navlink>
          </div>
          <div onClick={() => props.onNavigate('Skills')}>
            <Navlink href="#skills">Skills</Navlink>
          </div>
          <div onClick={() => props.onNavigate('Projects')}>
            <Navlink href="#projects">Projects</Navlink>
          </div>
          <div onClick={() => props.onNavigate('Contact')}>
            <Navlink href="#contact">Contact</Navlink>
          </div>
        </MenuOverlay>
      ) : null}
    </nav>
  );
}
