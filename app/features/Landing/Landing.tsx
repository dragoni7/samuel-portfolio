'use client';
import Link from 'next/link';
import RollDownLabel from './RollDownLabel';
import Image from 'next/image';
import transition from '../../util/transition';
import { motion } from 'framer-motion';
import FadeIn from '@/app/components/FadeIn';

const Landing: React.FC = () => {
  return (
    <section id="Landing">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <FadeIn className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Hello, I'm Samuel</h1>
          <p className="text-[#ADB7BE] overflow-hidden text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            I am a...&nbsp;
          </p>
          <RollDownLabel labels={['Software Engineer', 'Web Developer', 'Fullstack Developer', 'Game Modder']} />
          <div className="fixed bottom-40">
            <div className="flex gap-3 md:gap-4 justify-start items-center mt-10 mb-10">
              <a href="/assets/files/SamuelGibsonResume.pdf" target="_">
                <button className="px-4 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-300 text-black hover:scale-110 font-semibold">
                  Resume
                </button>
              </a>
              <Link href="https://www.linkedin.com/in/samueldgibson/">
                <Image
                  src="/assets/images/linkedin.svg"
                  width={48}
                  height={48}
                  alt="LinkedIn"
                  className="hover:scale-110"
                />
              </Link>
              <Link href="https://github.com/dragoni7">
                <Image
                  src="/assets/images/github.svg"
                  width={48}
                  height={48}
                  alt="GitHub"
                  className="hover:scale-110"
                />
              </Link>
              <Link href="https://www.curseforge.com/members/dragoni_7/projects">
                <Image
                  src="/assets/images/curseforge.svg"
                  width={58}
                  height={58}
                  alt="Curseforge"
                  className="hover:scale-110"
                />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default transition(Landing);
