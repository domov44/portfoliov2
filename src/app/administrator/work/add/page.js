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
import UploadGallery from '@/app/components/pageElements/administrator/gallery/add/UploadGallery';
import { uploadData } from 'aws-amplify/storage';
import Accordion from '@/app/components/ui/wrapper/Accordion';
import IconButton from '@/app/components/ui/button/IconButton';
import { CiTrash } from 'react-icons/ci';
import Stack from '@/app/components/ui/wrapper/Stack';

const client = generateClient();

function Page() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [github, setGithub] = useState('');
    const [role, setRole] = useState('');
    const [context, setContext] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [href, setHref] = useState('');
    const [selectedThumbnailFile, setSelectedThumbnailFile] = useState(null);
    const [selectedVideoFile, setSelectedVideoFile] = useState(null);
    const [featuredOrder, setFeaturedOrder] = useState('');

    const [lines, setLines] = useState([{ id: 1, images: [] }]);

    const addLine = () => {
        const newLine = { id: lines.length + 1, images: [] };
        setLines([...lines, newLine]);
    };

    const addImageToLine = (lineId) => {
        setLines(lines.map(line =>
            line.id === lineId ? { ...line, images: [...line.images, null] } : line
        ));
    };

    const removeImageFromLine = (lineId, index) => {
        setLines(lines.map(line =>
            line.id === lineId ? { ...line, images: line.images.filter((_, i) => i !== index) } : line
        ));
    };

    const removeLine = (lineId) => {
        setLines(lines.filter(line => line.id !== lineId));
    };

    const handleThumbnailSelect = (file) => {
        setSelectedThumbnailFile(file);
    };

    const handleVideoSelect = (file) => {
        setSelectedVideoFile(file);
    };

    const uploadFileToS3 = async (file, folder = 'works') => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const key = `${folder}/${name}/${year}/${month}/${file.name}`;

        try {
            await uploadData({
                path: `public/${key}`,
                data: file,
                options: {
                    contentType: file.type,
                },
            });
            return { key };
        } catch (error) {
            throw new Error("Erreur lors de l'upload du fichier");
        }
    };

    const generateJson = async () => {
        try {
            const rows = await Promise.all(
                lines.map(async (line) => {
                    const pictureKeys = await Promise.all(
                        line.images.map(async (image) => {
                            if (image) {
                                const { key } = await uploadFileToS3(image);
                                return key;
                            }
                            return null;
                        })
                    );

                    return { pictures: pictureKeys.filter(picture => picture !== null) };
                })
            );

            const jsonData = { rows };
            console.log("Generated JSON: ", jsonData.rows);

            return jsonData;
        } catch (error) {
            console.error("Erreur lors de la génération du JSON", error);
        }
    };

    const handleSubmit = async () => {
        try {
            const { key: thumbnailKey } = await uploadFileToS3(selectedThumbnailFile);

            let videoKey = null;
            if (selectedVideoFile) {
                const uploadResult = await uploadFileToS3(selectedVideoFile);
                videoKey = uploadResult.key;
            }

            const jsonData = await generateJson();
            if (!jsonData) {
                console.error("Erreur de génération du JSON.");
                return;
            }

            await client.graphql({
                query: createProject,
                variables: {
                    input: {
                        name: name.toLowerCase(),
                        slug: slug.toLowerCase(),
                        thumbnail: thumbnailKey,
                        video: videoKey,
                        github: github.toLowerCase(),
                        role: role.toLowerCase(),
                        context: context.toLowerCase(),
                        description: description,
                        date: date,
                        href: href.toLowerCase(),
                        featuredOrder: featuredOrder,
                        globalPartitionKey: "projects",
                        images: JSON.stringify(jsonData.rows),
                    },
                },
            });

            console.log("success");

        } catch (error) {
            console.error("error during submit", error);
        }
    };

    return (
        <>
            <Head>
                <title>Add a project</title>
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
                        <TextInput
                            type="text"
                            label="GitHub URL"
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="Role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="Context"
                            value={context}
                            onChange={(e) => setContext(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="text"
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            variant="blue"
                        />
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                        <TextInput
                            type="text"
                            label="Link of the project"
                            value={href}
                            onChange={(e) => setHref(e.target.value)}
                            required
                            variant="blue"
                        />
                        <TextInput
                            type="number"
                            label="Order"
                            value={featuredOrder}
                            onChange={(e) => setFeaturedOrder(e.target.value)}
                            required
                            variant="blue"
                        />
                        <UploadGallery
                            onFileSelect={handleThumbnailSelect}
                            maxSize={2 * 1048576}
                            acceptedTypes="image/png, image/jpeg, image/jpg, image/avif, image/webp"
                        />
                        <UploadGallery
                            onFileSelect={handleVideoSelect}
                            maxSize={3 * 1048576}
                            acceptedTypes="video/mp4, video/webm, video/avi"
                        />

                        {lines.map((line) => (
                            <Stack key={line.id} width="100%">
                                <Accordion title={`Ligne ${line.id}`}>
                                    {line.images.map((image, index) => (
                                        <Stack key={index}>
                                            <UploadGallery
                                                onFileSelect={(file) => {
                                                    const newLines = lines.map(l => {
                                                        if (l.id === line.id) {
                                                            const updatedImages = [...l.images];
                                                            updatedImages[index] = file;
                                                            return { ...l, images: updatedImages };
                                                        }
                                                        return l;
                                                    });
                                                    setLines(newLines);
                                                }}
                                                maxSize={2 * 1048576}
                                                acceptedTypes="image/png, image/jpeg, image/jpg, image/avif, image/webp"
                                            />
                                            <IconButton variant={"danger"} onClick={() => removeImageFromLine(line.id, index)}>
                                                <CiTrash />
                                            </IconButton>
                                        </Stack>
                                    ))}
                                    <IconButton variant={"action"} onClick={() => addImageToLine(line.id)}>
                                        Ajouter une image
                                    </IconButton>
                                </Accordion>
                                <IconButton variant={"danger"} onClick={() => removeLine(line.id)}>
                                    <CiTrash />
                                </IconButton>
                            </Stack>
                        ))}

                        <IconButton variant={"action"} onClick={addLine}>
                            Ajouter une ligne d'image
                        </IconButton>
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </Bento>
                </FormContainer>
            </Hero>
        </>
    );
}

export default Page;
