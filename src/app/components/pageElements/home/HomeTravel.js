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
    opacity: 1;
`;

const Picture = styled.picture`
    height: 27rem;
    width: 21rem;
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
    opacity: 0.6;
    transform: translate3d(0px, -10%, 0px);
    will-change: transform;
`;

const ImageSection = styled.figure`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 190vh;
    overflow: hidden;
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
    const sectionRef = useRef(null);
    const imageBgRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current && imageBgRef.current) {
            const sectionHeight = sectionRef.current.offsetHeight;
            const computedStyle = window.getComputedStyle(sectionRef.current);
            const paddingTop = parseFloat(computedStyle.paddingTop);
            const paddingBottom = parseFloat(computedStyle.paddingBottom);
            const heightWithoutPadding = sectionHeight - paddingTop - paddingBottom;

            imageRefs.current.forEach((image, index) => {
                if (index === 0) {
                    gsap.set(image, { zIndex: 1 });
                } else {
                    gsap.set(image, { zIndex: -1 });
                }
            });

            gsap.to(imageBgRef.current, {
                y: '10%',
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: `bottom top`,
                    scrub: true,
                },
            });

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top',
                end: () => `${heightWithoutPadding} bottom`,
                onUpdate: (self) => {
                    const progress = self.progress || 0;
                    const totalItems = images.current.length;
                    const indexToHide = Math.floor(progress * (totalItems - 1));

                    imageRefs.current.forEach((image, index) => {
                        if (index < indexToHide) {
                            gsap.set(image, { zIndex: -1 });
                        } else if (index === indexToHide) {
                            gsap.set(image, { zIndex: 1 });
                        } else {
                            gsap.set(image, { zIndex: 0 });
                        }
                    });
                },
                scrub: true,
            });
        }
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
            <Section overflow padding="0px" fullWidth>
                <Stack ref={sectionRef} className="scroll-section" position="relative" direction={"column"} overflow height={"260vh"} justify={"start"} padding={"0px 0px 70vh 0px"} spacing={"100px"} width={"100%"}>
                    <Stack justify={"space-between"} align={"center"} width={"100%"} zIndex={2} position={"sticky"} top={"30vh"} padding="0px 30px">
                        <Stack width={"33.3%"}>
                            <Title level={5} className="step-1">TRAVEL</Title>
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
                        <ImageBg ref={imageBgRef} src='https://ranlus.fr/assets/gallery/18.webp'></ImageBg>
                    </ImageSection>
                </Stack>
            </Section>
        </>
    );
};

export default HomeTravel;
