import React from 'react';

interface ProjectFilterButtonProps {
  name: string;
  onClick: (newTag: string) => void;
  isSelected: boolean;
}

export default function ProjectFilterButton(props: ProjectFilterButtonProps) {
  const buttonStyles: string = props.isSelected
    ? 'text-white bg-indigo-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-indigo-600';

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => props.onClick(props.name)}
    >
      {props.name}
    </button>
  );
}
