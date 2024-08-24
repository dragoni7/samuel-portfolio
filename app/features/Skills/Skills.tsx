import { useEffect, useState } from 'react';
import { fetchGitRepos, fetchRepoLanguages } from './github';
import transition from '../../util/transition';
import { PackingGraph } from './PackingGraph';
import { Node } from './Node';
import { languages } from './languages';
import FadeIn from '@/app/components/FadeIn';

const Skills: React.FC = () => {
  const [totalLanguages, setTotalLanguages] = useState<{ [key: string]: number }>({});

  function getWidth(id: string): number {
    const width = document.getElementById('languages')?.clientWidth;
    return width !== undefined ? width : 0;
  }

  useEffect(() => {
    fetchGitRepos()
      .then(async (repos) => {
        const temp: { [key: string]: number } = {};

        for (const repo of repos) {
          if (!repo.fork && repo.owner.login === 'dragoni7') {
            const repoLanguages = await fetchRepoLanguages(repo.name);

            for (const l in repoLanguages) {
              if (l in languages) {
                if (l in temp) {
                  temp[l] += repoLanguages[l];
                } else {
                  temp[l] = repoLanguages[l];
                }
              }
            }
          }
        }

        setTotalLanguages(temp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section id="skills">
      <FadeIn className="md:grid md:grid-rows-1 items-center py-8 px-4 sm:py-16 xl:px-16">
        <div id="languages" className="w-full">
          <h2 className="text-4xl font-bold text-white">My Programming Languages</h2>
          <h2 className="text-2xl font-bold text-[#ADB7BE] py-2">Larger = more experience</h2>
          {Object.keys(totalLanguages).length !== 0 ? (
            <PackingGraph
              width={getWidth('languages')}
              height={600}
              data={Object.keys(totalLanguages).map((key): Node => {
                return { group: key, value: totalLanguages[key] };
              })}
            />
          ) : (
            <p className="text-3xl font-bold p-5">Fetching Repos...</p>
          )}
          <span className="text-1xl font-bold text-[#ADB7BE] py-2">*Languages pulled from my GitHub repos</span>
        </div>
      </FadeIn>
    </section>
  );
};

export default transition(Skills);
