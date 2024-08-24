const token = process.env.NEXT_PUBLIC_GIT_TOKEN;

export async function fetchGitRepos() {
  const response = await fetch('https://api.github.com/user/repos?type=all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 200) return await response.json();
}

export async function fetchRepoLanguages(repo: string) {
  const response = await fetch(`https://api.github.com/repos/dragoni7/${repo}/languages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 200) return await response.json();
}
