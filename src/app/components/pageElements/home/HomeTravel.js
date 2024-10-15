'use client';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from '../../ui/textual/Title';
import Stack from '../../ui/wrapper/Stack';
import Section from '../../ui/wrapper/Section';
import TextLink from '../../ui/textual/TextLink';

gsap.registerPlugin(ScrollTrigger);

const ImageList = styled.ul`
    margin: 0;
    height: 22rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0;
    list-style: none;
    pointer-events: none;
`;

const ImageItem = styled.li`
    position: absolute;
    opacity: 1;  /* Initial opacity set to 1 */
`;

const Picture = styled.picture`
    height: 22rem;
    width: 17rem;
    display: block;
    margin: 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
`;

const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
`;

const ImageSection = styled.figure`
    width: 100%;
    height: 160vh;
    margin: 0;
    background: black;
`;

const imagesData = [
    'https://ranlus.fr/assets/gallery/4.webp',
    'https://ranlus.fr/assets/gallery/6.webp',
    'https://ranlus.fr/assets/gallery/13.webp',
    'https://ranlus.fr/assets/gallery/14.webp',
    'https://ranlus.fr/assets/gallery/16.webp',
    'https://ranlus.fr/assets/gallery/5.webp',
    'https://ranlus.fr/assets/gallery/18.webp',
    'https://ranlus.fr/assets/gallery/17.webp',
];

const HomeTravel = () => {
    const imageRefs = useRef([]);
    const images = useRef(imagesData);

    useEffect(() => {
        imageRefs.current = imageRefs.current.slice(0, images.current.length);

        ScrollTrigger.create({
            trigger: '.scroll-section',
            start: 'top top', 
            end: 'bottom bottom',
            onUpdate: (self) => {
                const progress = self.progress || 0;
                console.log('Scroll progress:', progress);

                const totalItems = images.current.length;
                const indexToHide = Math.floor(progress * (totalItems - 1));

                imageRefs.current.forEach((image, index) => {
                    if (index < indexToHide) {
                        gsap.set(image, { opacity: 0, zIndex: -1 });
                    } else if (index === indexToHide) {
                        gsap.set(image, { opacity: 1, zIndex: 1 });
                    } else {
                        gsap.set(image, { opacity: 1, zIndex: 0 });
                    }
                });
            },
            scrub: true,
        });
    }, []);

    return (
        <>
            <Section>
                <Stack width="100%" justify="center">
                    <Title level={2} fontSize="8vw" variant="colored" textalign="center">
                        BEYOND CODE. CAPTURING MOMENTS
                    </Title>
                </Stack>
            </Section>
            <Section className="scroll-section" overflow height={"170vh"} justify={"start"} margin={"0px 0px 500px 0px"} padding={"0px"} spacing={"100px"}>
                <Stack justify={"space-between"} align={"center"} width={"100%"} zIndex={2} position={"sticky"} top={"20vh"} bottom={"20vh"}>
                    <Stack width={"33.3%"}>
                        <TextLink href={"https://github.com/domov44"}>@domov44</TextLink>
                    </Stack>
                    <Stack width={"33.3%"} justify={"center"}>
                        <ImageList>
                            {images.current.map((src, index) => (
                                <ImageItem
                                    key={index}
                                    ref={el => imageRefs.current[index] = el}
                                >
                                    <Picture>
                                        <Image src={src} />
                                    </Picture>
                                </ImageItem>
                            ))}
                        </ImageList>
                    </Stack>
                    <Stack width={"33.3%"} justify={"end"}>
                        <TextLink href={"https://www.linkedin.com/in/ronan-scotet-concepteur-web/"}>@ronanscotet</TextLink>
                    </Stack>
                </Stack>
                <ImageSection>
                    <ImageBg src='https://ranlus.fr/assets/gallery/18.webp'></ImageBg>
                </ImageSection>
            </Section>
        </>
    );
};

export default HomeTravel;
