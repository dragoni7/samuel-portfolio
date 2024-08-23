import Image from 'next/image';
import transition from '../transition';

const About: React.FC = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/assets/images/wsu-logo.png" width={450} height={450} alt="WSU Logo" />
        <div className="bg-indigo-500 rounded-md px-7 pb-7">
          <br />
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Washington State University Graduate of 2023 BA in Software Engineering.
            <br />
            Boeing Scholars and WSU Business Plan Competition participant of 2022-2023.
            <br />
            As a software engineer, I am passionate about creating quality products throughout all stages of development
            and designing well architectured codebases. In my free time, I enjoy modding video games, game development,
            learning new tech stacks, and keeping up with the latest technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default transition(About);
