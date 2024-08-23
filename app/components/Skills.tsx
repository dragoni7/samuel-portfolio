import { useEffect, useState } from 'react';
import { fetchGitRepos, fetchRepoLanguages } from '../util/github';
import transition from '../util/transition';
import { PackingGraph } from './PackingGraph';
import { Node } from '../util/Node';

const Skills: React.FC = () => {
  const [totalLanguages, setTotalLanguages] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    fetchGitRepos()
      .then(async (repos) => {
        const temp: { [key: string]: number } = {};

        for (const repo of repos) {
          if (!repo.fork && repo.owner.login === 'dragoni7') {
            const languages = await fetchRepoLanguages(repo.name);

            for (const language in languages) {
              if (language in temp) {
                temp[language] += languages[language];
              } else {
                temp[language] = languages[language];
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
    <section>
      {Object.keys(totalLanguages).length !== 0 ? (
        <PackingGraph
          width={1000}
          height={500}
          data={Object.keys(totalLanguages).map((key): Node => {
            return { group: key, value: totalLanguages[key] };
          })}
        />
      ) : null}
    </section>
  );
};

export default transition(Skills);
