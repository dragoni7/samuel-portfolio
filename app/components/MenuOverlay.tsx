import React, { ReactNode } from 'react';

export default function MenuOverlay(props: { children: ReactNode[] }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {props.children.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  );
}
