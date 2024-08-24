'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilterButton from './ProjectFilterButton';
import { motion } from 'framer-motion';
import transition from '../../util/transition';
import FadeIn from '@/app/components/FadeIn';

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
    imgUrl: '/assets/images/ThorSolutions.png',
    title: 'Bolt Preload Analysis',
    description:
      'Python application for generating a prediction for when a particular bolt will require maintenance due to preload loss. Driven by data collected during physical tests requested by client. Part of the multi-disciplinary Boeing Scholars program and WSU Business Plan Competition.',
    tag: ['Academic'],
    gitUrl: 'https://github.com/dragoni7/Bolt-Preload-Analysis',
    previewUrl: '/',
  },
  {
    imgUrl: '/assets/images/BulletHell.png',
    title: 'Bullet Hell Game',
    description:
      'A bullet hell 2D shooter game created with the Monogame framework. Developed in a team with the intention of demonstrating understanding of multiple software design patterns and model view controller architecture.',
    tag: ['Academic'],
    gitUrl: 'https://github.com/dragoni7/DesignPatternShooter',
    previewUrl: '/',
  },
  {
    imgUrl: '/assets/images/SteamReviewsWords.png',
    title: 'Steam Reviews Frequent Words',
    description:
      'Python program for discovering frequent negative and positive words from Steam store reviews data set. Utilizes several data mining methodologies to reduce, clean, and preprocess a review dataset. Repo includes technical documentation on methodologies and results.',
    tag: ['Academic'],
    gitUrl: 'https://github.com/dragoni7/Steam-Reviews-Frequent-Words',
    previewUrl: '/',
  },
  {
    imgUrl: '/assets/images/Checkstyle.png',
    title: 'Checkstyle Halstead Plugin',
    description:
      'Plugin for Eclipse Checkstyle that adds checks for Halstead metrics and more. Involves a test engine covering white and black box tests to ensure check accuracy',
    tag: ['Academic'],
    gitUrl: 'https://github.com/dragoni7/CheckStyle-Plugin-Project',
    previewUrl: '/',
  },
  {
    imgUrl: '/assets/images/GraphSketchpad.png',
    title: 'Graph Theorists Sketchpad',
    description:
      'A WinForms sketchpad application enabling the drawing of different types of graphs and display of graph information.',
    tag: ['Academic'],
    gitUrl: 'https://github.com/dragoni7/Graph-Theorists-Sketchpad',
    previewUrl: '/',
  },
  {
    imgUrl: '/assets/images/BanWho.png',
    title: 'BanWho?',
    description:
      'Full-Stack data analytic web app designed for players of the video game League of Legends utilizing data from the public API of Riot Games. Hosted on Azure, utilizing Quartz background jobs to retrieve, filter and aggregate API data into an Azure database.',
    tag: ['Personal'],
    gitUrl: 'https://github.com/dragoni7/BanWho',
    previewUrl: 'https://banwho.info/',
  },
  {
    imgUrl: '/assets/images/DinoKonpeito.png',
    title: 'Dino Konpeito',
    description:
      'A simple arcade style game about a dinosaur collecting falling konpeitos. Developed with the .NET Godot engine in collaboration with an artist.',
    tag: ['Personal'],
    gitUrl: 'https://github.com/dragoni7/DinoKonpeito',
    previewUrl: '/',
  },
  {
    imgUrl: '/assets/images/ArtistGallery.png',
    title: 'Artist Gallery',
    description:
      'Volunteer web dev work for artist client. Utilizes Azure static web app hosting, Azure functions, and the Azure data api builder to provide data upload and retrieval from database and blob storage.',
    tag: ['Personal'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    imgUrl: '/assets/images/D2Loadouts.png',
    title: 'D2 Loadouts',
    description:
      'Web app written in designed to aid players of the game Destiny determine, equip, and share optimal loadouts.',
    tag: ['Personal'],
    gitUrl: 'https://github.com/dragoni7/d2loadouts',
    previewUrl: 'https://d2loadouts.com/',
  },
  {
    imgUrl: '/assets/images/Minecraft.png',
    title: 'Video Game Mods',
    description:
      'Various mods developed for games such as Minecraft. Uploaded on Curseforge with over 900k user downloads.',
    tag: ['Personal'],
    gitUrl: 'https://github.com/stars/dragoni7/lists/game-mods-and-projects',
    previewUrl: 'https://www.curseforge.com/members/dragoni_7/projects',
  },
];

const Projects: React.FC = () => {
  const [tag, setTag] = useState<string>('All');

  function handleTagUpdate(newTag: string) {
    setTag(newTag);
  }

  return (
    <section id="projects">
      <FadeIn>
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
      </FadeIn>
    </section>
  );
};

export default transition(Projects);
