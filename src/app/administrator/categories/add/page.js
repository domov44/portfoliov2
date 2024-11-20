'use client';
import Hero from '@/app/components/ui/wrapper/Hero';
import FormContainer from '@/app/components/ui/wrapper/FormContainer';
import Bento from '@/app/components/ui/wrapper/Bento';
import Head from 'next/head';
import TextInput from '@/app/components/ui/form/TextInput';
import { useState } from 'react';
import Button from '@/app/components/ui/button/Button';
import { generateClient } from 'aws-amplify/api';
import { createCategory } from '@/graphql/mutations';

const client = generateClient();

function Page() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');

    async function handleCategoryCreation() {
        if (!slug || !name) {
            console.error('Veuillez remplir tous les champs requis et importer un fichier compressé');
            return;
        }
        try {
            await client.graphql({
                query: createCategory,
                variables: {
                    input: {
                        name: name,
                        slug: slug,
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
                <title>Add a project category into database</title>
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
                        <TextInput
                            type="text"
                            label="Slug"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            required
                            variant="blue"
                        />
                        <Button variant="primary" onClick={handleCategoryCreation}>Submit</Button>
                    </Bento>
                </FormContainer>
            </Hero>
        </>
    );
}

export default Page;
