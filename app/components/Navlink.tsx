import Link from 'next/link';
import React, { ReactNode } from 'react';

export default function Navlink(props: { href: string; children: ReactNode }) {
  return (
    <Link
      href={props.href}
      className={`flex py-2 pl-3 pr-4 text-center items-center text-indigo-500 sm:text-3xl rounded font-bold md:p-0 hover:text-indigo-600 hover:scale-110`}
    >
      {props.children}
    </Link>
  );
}
