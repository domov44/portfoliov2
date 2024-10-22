import { NextResponse } from 'next/server';

export async function GET() {
  const githubUsername = 'domov44'; 

  const response = await fetch(`https://api.github.com/users/${githubUsername}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
    }
  });

  if (!response.ok) {
    return NextResponse.json({ message: 'Erreur lors de la récupération des données GitHub' }, { status: 500 });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
