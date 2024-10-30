'use client';
import Hero from '@/app/components/ui/wrapper/Hero';
import FormContainer from '@/app/components/ui/wrapper/FormContainer';
import Bento from '@/app/components/ui/wrapper/Bento';
import Head from 'next/head';
import TextInput from '@/app/components/ui/form/TextInput';
import { useState } from 'react';
import Button from '@/app/components/ui/button/Button';
import { generateClient } from 'aws-amplify/api';
import { createProject } from '@/graphql/mutations';

const client = generateClient();

function Page() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');

    const handleSubmit = async () => {
        try {

            await client.graphql({
                query: createProject,
                variables: {
                    input: {
                        name: name.toLowerCase(),
                        slug: slug,
                        top4: false
                    }
                }
            });

            console.log("success")

        } catch (error) {
            console.error("error during submit", error)
        }
    };


    return (
        <>
            <Head>
                <title>Connectez-vous à votre compte Miamze</title>
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
                            onChange={(e) => { setName(e.target.value); }}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="slug"
                            value={slug}
                            onChange={(e) => { setSlug(e.target.value); }}
                            required
                            variant="blue"
                        />
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </Bento>
                </FormContainer>
            </Hero>
        </>
    );
}

export default Page;
