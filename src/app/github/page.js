// app/page.js

async function getGithubProfile() {
  const githubUsername = 'domov44';
  const token = process.env.GITHUB_ACCESS_TOKEN;

  const response = await fetch(`https://api.github.com/users/${githubUsername}`, {
    headers: {
      Authorization: `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Erreur lors de la récupération des données GitHub:', errorText);
    throw new Error('Erreur lors de la récupération des données GitHub');
  }

  return response.json();
}

export default async function Home() {
  let profile;
  
  try {
    profile = await getGithubProfile();
  } catch (error) {
    return (
      <div>
        <h1>Erreur</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Pseudo: {profile.login}</p>
      <p>Nombre de repos: {profile.public_repos}</p>
      <img 
        src={profile.avatar_url} 
        alt="Photo de profil" 
        width={150} 
        height={150} 
      />
    </div>
  );
}
