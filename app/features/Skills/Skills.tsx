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
        <div className="grid-cols-1 items-center space-y-10">
          <div id="languages" className="w-full">
            {Object.keys(totalLanguages).length !== 0 ? (
              <>
                <h2 className="text-4xl font-bold text-white">My Programming Languages</h2>
                <h2 className="text-2xl font-bold text-[#ADB7BE] py-2">Larger = more experience</h2>
                <PackingGraph
                  width={getWidth('languages')}
                  height={600}
                  data={Object.keys(totalLanguages).map((key): Node => {
                    return { group: key, value: totalLanguages[key] };
                  })}
                />
                <span className="text-1xl font-bold text-[#ADB7BE] py-2">*Languages pulled from my GitHub repos</span>
              </>
            ) : (
              <div className="md:grid md:grid-cols-1 text-center">
                <p className="text-3xl font-bold p-5">Fetching My Repos...</p>
                <div role="status" className="text-center">
                  <svg
                    aria-hidden="true"
                    className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
          {/*<div id="frameworks" className="w-full">
            <h2 className="text-4xl font-bold text-white">Frameworks I've Used</h2>
          </div>*/}
        </div>
      </FadeIn>
    </section>
  );
};

export default transition(Skills);
