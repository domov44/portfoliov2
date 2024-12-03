'use client';
import Hero from '@/app/components/ui/wrapper/Hero';
import FormContainer from '@/app/components/ui/wrapper/FormContainer';
import Bento from '@/app/components/ui/wrapper/Bento';
import Head from 'next/head';
import TextInput from '@/app/components/ui/form/TextInput';
import { useState, useEffect } from 'react';
import Button from '@/app/components/ui/button/Button';
import { generateClient } from 'aws-amplify/api';
import { updateProject } from '@/graphql/mutations';
import { ProjectBySlug } from '@/graphql/queries';
import UploadGallery from '@/app/components/pageElements/administrator/gallery/add/UploadGallery';
import { uploadData } from 'aws-amplify/storage';
import { notFound } from 'next/navigation';

const client = generateClient();

function Page({ params }) {
    const { slug } = params;

    const [projectId, setProjectId] = useState(null);
    const [name, setName] = useState('');
    const [slugField, setSlug] = useState('');
    const [github, setGithub] = useState('');
    const [role, setRole] = useState('');
    const [context, setContext] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [href, setHref] = useState('');
    const [selectedThumbnailFile, setSelectedThumbnailFile] = useState(null);
    const [selectedVideoFile, setSelectedVideoFile] = useState(null);
    const [featuredOrder, setFeaturedOrder] = useState('');

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const projectResult = await client.graphql({
                    query: ProjectBySlug,
                    variables: { slug },
                    authMode: 'userPool',
                });

                const projectData = projectResult.data.ProjectBySlug;

                const project = (projectData && projectData.items && projectData.items.length > 0)
                    ? projectData.items[0]
                    : null;

                if (project) {
                    setProjectId(project.id);
                    setName(project.name || '');
                    setSlug(project.slug || '');
                    setGithub(project.github || '');
                    setRole(project.role || '');
                    setContext(project.context || '');
                    setDescription(project.description || '');
                    setDate(project.date || '');
                    setHref(project.href || '');
                    setFeaturedOrder(project.featuredOrder || '');
                } else {
                    notFound();
                }
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProject();
    }, [slug]);

    const handleThumbnailSelect = (file) => {
        setSelectedThumbnailFile(file);
    };

    const handleVideoSelect = (file) => {
        setSelectedVideoFile(file);
    };

    const uploadFileToS3 = async (file, type = 'works') => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const key = `${type}/${name}/${year}/${month}/${file.name}`;

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

    const handleSubmit = async () => {
        try {
            let thumbnailKey = null;
            let videoKey = null;

            if (selectedThumbnailFile) {
                const uploadResult = await uploadFileToS3(selectedThumbnailFile);
                thumbnailKey = uploadResult.key;
            }

            if (selectedVideoFile) {
                const uploadResult = await uploadFileToS3(selectedVideoFile);
                videoKey = uploadResult.key;
            }

            const input = {
                id: projectId,
                ...(name && { name: name.toLowerCase() }),
                ...(slugField && { slug: slugField.toLowerCase() }),
                ...(thumbnailKey && { thumbnail: thumbnailKey }),
                ...(videoKey && { video: videoKey }),
                ...(github && { github: github.toLowerCase() }),
                ...(role && { role: role.toLowerCase() }),
                ...(context && { context: context.toLowerCase() }),
                ...(description && { description }),
                ...(date && { date: date }),
                ...(href && { href: href.toLowerCase() }),
                ...(featuredOrder && { featuredOrder: featuredOrder }),
            };

            await client.graphql({
                query: updateProject,
                variables: { input },
            });

            console.log('Project updated successfully!');
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    return (
        <>
            <Head>
                <title>Éditez votre projet</title>
                <meta name="description" content="Modification du projet existant" />
                <meta property="og:image" content="URL_de_votre_image" />
            </Head>
            <Hero>
                <FormContainer>
                    <Bento
                        width="450px"
                        highlight="highlight"
                        padding="40px"
                        responsive={{
                            mobilePadding: '20px',
                        }}
                    >
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
                            value={slugField}
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
                            acceptedTypes="video/mp4, video/webm, video/ogg, video/mvk"
                        />
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Bento>
                </FormContainer>
            </Hero>
        </>
    );
}

export default Page;
