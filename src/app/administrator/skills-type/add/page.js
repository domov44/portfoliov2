'use client';
import Hero from '@/app/components/ui/wrapper/Hero';
import FormContainer from '@/app/components/ui/wrapper/FormContainer';
import Bento from '@/app/components/ui/wrapper/Bento';
import Head from 'next/head';
import TextInput from '@/app/components/ui/form/TextInput';
import { useState } from 'react';
import Button from '@/app/components/ui/button/Button';
import { generateClient } from 'aws-amplify/api';
import { createSkillType } from '@/graphql/mutations';

const client = generateClient();

function Page() {
    const [name, setName] = useState('');

    async function handleSkillTypeCreation() {
        if (!name) {
            console.error('Veuillez remplir tous les champs requis et importer un fichier compressé');
            return;
        }
        try {
            await client.graphql({
                query: createSkillType,
                variables: {
                    input: {
                        name: name,
                    }
                }
            });
            console.log("success");

        } catch (error) {
            console.error("Erreur lors de la soumission", error);
        }
    }

    return (
        <>
            <Head>
                <title>Add a skill type into database</title>
                <meta name="description" content="Description de la page" />
                <meta property="og:image" content="URL_de_votre_image" />
            </Head>
            <Hero>
                <FormContainer>
                    <Bento width="450px" highlight="highlight" padding="40px"
                        responsive={{
                            mobilePadding: "20px"
                        }}>
                        <TextInput
                            type="text"
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            variant="blue"
                        />
                        <Button variant="primary" onClick={handleSkillTypeCreation}>Submit</Button>
                    </Bento>
                </FormContainer>
            </Hero>
        </>
    );
}

export default Page;
