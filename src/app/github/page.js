async function getGithubProfile() {
  const res = await fetch('http://localhost:3000/api/github', {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données GitHub');
  }

  return res.json();
}

export default async function Home() {
  const profile = await getGithubProfile();

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