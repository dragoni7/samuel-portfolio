'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilterButton from './ProjectFilterButton';
import { motion } from 'framer-motion';
import transition from '../transition';

type Project = {
  imgUrl: string;
  title: string;
  description: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};

const projects: Project[] = [
  {
    imgUrl: '',
    title: 'Bolt Preload Analysis',
    description: '',
    tag: ['Academic'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    imgUrl: '',
    title: 'Bullet Hell Game',
    description: '',
    tag: ['Academic'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    imgUrl: '',
    title: 'Steam Reviews Frequent Words',
    description: '',
    tag: ['Academic'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    imgUrl: '',
    title: 'Checkstyle Halstead Plugin',
    description: '',
    tag: ['Academic'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    imgUrl: '',
    title: 'Graph Theorists Sketchpad',
    description: '',
    tag: ['Academic'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    imgUrl: '',
    title: 'BanWho?',
    description: '',
    tag: ['Personal'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    imgUrl: '',
    title: 'Dino Konpeito',
    description: '',
    tag: ['Personal'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    imgUrl: '',
    title: 'Artist Gallery',
    description: '',
    tag: ['Personal'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    imgUrl: '',
    title: 'D2 Loadouts',
    description: '',
    tag: ['Personal'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    imgUrl: '',
    title: 'Video Game Mods',
    description: '',
    tag: ['Personal'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const Projects: React.FC = () => {
  const [tag, setTag] = useState<string>('All');

  function handleTagUpdate(newTag: string) {
    setTag(newTag);
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectFilterButton onClick={handleTagUpdate} name="All" isSelected={tag === 'All'} />
        <ProjectFilterButton onClick={handleTagUpdate} name="Academic" isSelected={tag === 'Academic'} />
        <ProjectFilterButton onClick={handleTagUpdate} name="Personal" isSelected={tag === 'Personal'} />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) =>
          project.tag.some((t) => (tag === 'All' ? true : t === tag)) ? (
            <motion.li key={index} initial="initial">
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ) : (
            false
          )
        )}
      </ul>
    </section>
  );
};

export default transition(Projects);
