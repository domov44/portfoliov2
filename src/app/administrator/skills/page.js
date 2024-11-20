'use client';
import { useEffect, useState } from 'react';
import Hero from '@/app/components/ui/wrapper/Hero';
import { generateClient } from 'aws-amplify/api';
import { listSkills } from '@/graphqlCustom/queries';
import fetchS3File from '@/app/utils/fetchS3File';

const client = generateClient();

function Page() {
    const [skills, setSkills] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const skillsResult = await client.graphql({
                    query: listSkills,
                    authMode: 'userPool',
                });
                const skillItems = skillsResult.data?.listSkills?.items || [];

                const skillsWithLogos = await Promise.all(
                    skillItems.map(async (skill) => {
                        if (skill.logo) {
                            try {
                                skill.logoUrl = await fetchS3File(skill.logo);
                            } catch {
                                skill.logoUrl = null;
                            }
                        }
                        return skill;
                    })
                );

                setSkills(skillsWithLogos);
            } catch (error) {
                console.error('Erreur lors de la récupération des skills:', error);
                setError('Impossible de récupérer les skills.');
            }
        };

        fetchSkills();
    }, []);

    return (
        <Hero>
            <h1>All skills</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {skills.length > 0 ? (
                        skills.map((skill) => (
                            <li key={skill.id}>
                                <strong>{skill.name}</strong> (type: {skill.type.name})
                                {skill.logoUrl && (
                                    <div>
                                        <img
                                            src={skill.logoUrl}
                                            alt={`${skill.name} logo`}
                                            style={{ width: '50px', height: '50px' }}
                                        />
                                    </div>
                                )}
                            </li>
                        ))
                    ) : (
                        <p>Aucun skill trouvé</p>
                    )}
                </ul>
            )}
        </Hero>
    );
}

export default Page;
