'use client';
import Hero from '@/app/components/ui/wrapper/Hero';
import FormContainer from '@/app/components/ui/wrapper/FormContainer';
import Bento from '@/app/components/ui/wrapper/Bento';
import Head from 'next/head';
import TextInput from '@/app/components/ui/form/TextInput';
import { useState } from 'react';
import Button from '@/app/components/ui/button/Button';
import { generateClient } from 'aws-amplify/api';
import { createGallery } from '@/graphql/mutations';

const client = generateClient();

function Page() {
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async () => {
        try {
            await client.graphql({
                query: createGallery,
                variables: {
                    input: {
                        place: place.toLowerCase(),
                        date: date
                    }
                }
            });

            console.log("success");

        } catch (error) {
            console.error("error during submit", error);
        }
    };

    return (
        <>
            <Head>
                <title>Add a trip into database</title>
                <meta place="description" content="Description de la page" />
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
                            label="Place"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            required
                            variant="blue"
                        />
                        <input type='date'  onChange={(e) => setDate(e.target.value)}/>
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </Bento>
                </FormContainer>
            </Hero>
        </>
    );
}

export default Page;
