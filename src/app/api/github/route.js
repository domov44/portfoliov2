import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const githubUsername = 'domov44'; 

  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
      },
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      console.error('GitHub API error:', await response.text());
      return NextResponse.json(
        { message: 'Erreur lors de la récupération des données GitHub' }, 
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      { message: 'Erreur serveur' }, 
      { status: 500 }
    );
  }
}