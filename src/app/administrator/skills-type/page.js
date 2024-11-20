'use client';
import { useEffect, useState } from 'react';
import Hero from '@/app/components/ui/wrapper/Hero';
import { generateClient } from 'aws-amplify/api';
import { listSkillTypes } from '@/graphql/queries';

const client = generateClient();

function Page() {
    const [skillsType, setSkillsType] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchskillsType = async () => {
            try {
                const skillTypeResult = await client.graphql({
                    query: listSkillTypes,
                    authMode: 'userPool'
                });
                const skillItems = skillTypeResult.data?.listSkillTypes?.items || [];
                setSkillsType(skillItems);
            } catch (error) {
                console.error('Erreur lors de la récupération des skills type:', error);
                setError('Impossible de récupérer les skills type.');
            }
        };

        fetchskillsType();
    }, []);

    return (
        <Hero>
            <h1>All skills type</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {skillsType.length > 0 ? (
                        skillsType.map((skillType) => (
                            <li key={skillType.id}>{skillType.name}</li>
                        ))
                    ) : (
                        <p>Aucun skillType type trouvé</p>
                    )}
                </ul>
            )}
        </Hero>
    );
}

export default Page;
