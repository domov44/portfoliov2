import React, { useState, useEffect, useCallback, useRef } from 'react';
import { generateClient } from 'aws-amplify/api';
import Title from '@/components/ui/textual/Title';
import Hero from '@/components/ui/wrapper/Hero';
import Button from '@/components/ui/button/Button';
import { gsap } from 'gsap';
import Stack from '@/components/ui/wrapper/Stack';
import TextLink from '@/components/ui/textual/TextLink';
import Text from '@/components/ui/textual/Text';
import Section from '@/components/ui/wrapper/Section';
import Container from '@/components/ui/wrapper/Container';
import Bento from '@/components/ui/wrapper/Bento';

const client = generateClient();

const images = [
    'https://www.ronanscotet.com/uploads/ImageProjets/miamalo.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/carte-de-pres-nexus-corp.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/ERP-Reltim-v2.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/pres-uptopixel.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/naotri.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/Musee-des-blindes.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/kiliron-shopz.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/pres-zechifoumi-v2.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/pres-carrefour-bio.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/pres-country-check.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/carte-de-pres-atlantic-cards.svg',
    'https://www.ronanscotet.com/uploads/ImageProjets/carte-de-pres-nexus-corp.svg',
    "https://www.ronanscotet.com/uploads/ImageProjets/bruteforce.svg",
    "https://www.ronanscotet.com/uploads/ImageProjets/pres-International-horizons.svg",
    "https://www.ronanscotet.com/uploads/ImageProjets/blog-laravel.svg",
    "https://www.ronanscotet.com/uploads/ImageProjets/tape-taupe.svg",
    "https://www.ronanscotet.com/uploads/ImageProjets/club-reltim.svg",
    "https://www.ronanscotet.com/uploads/ImageProjets/carte-de-pres-reltim.svg",
    "https://www.ronanscotet.com/uploads/ImageProjets/currencyconverter.svg",
    "https://www.ronanscotet.com/uploads/ImageProjets/pres-green-horizons.svg"


];

const Home = () => {
    const [visibleImages, setVisibleImages] = useState([]);
    const heroRef = useRef(null);
    const lastImagePosition = useRef({ x: 0, y: 0, time: performance.now() });

    const handleMouseMove = useCallback((e) => {
        if (!heroRef.current) return;

        const { clientX: x, clientY: y } = e;
        const { left, top, right, bottom } = heroRef.current.getBoundingClientRect();

        if (x >= left && x <= right && y >= top && y <= bottom) {
            const timeNow = performance.now();
            const timeDelta = timeNow - lastImagePosition.current.time;

            const deltaX = x - lastImagePosition.current.x;
            const deltaY = y - lastImagePosition.current.y;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            const velocity = distance / timeDelta || 1;

            if (distance >= 120 && visibleImages.length < 50) {
                const randomIndex = Math.floor(Math.random() * images.length);
                const randomImage = images[randomIndex];

                if (!visibleImages.includes(randomImage)) {
                    const imgElement = document.createElement('img');
                    imgElement.src = randomImage;
                    imgElement.style.position = 'absolute';

                    imgElement.style.left = `${x - 150}px`;
                    imgElement.style.top = `${y - 150}px`;

                    imgElement.style.pointerEvents = 'none';
                    imgElement.style.width = '300px';
                    imgElement.style.height = '300px';
                    imgElement.style.clipPath = 'circle(0% at 50% 50%)';
                    document.body.appendChild(imgElement);

                    const translateDistance = Math.min(500, Math.max(30, velocity ** 2 * 10));
                    const translateX = -deltaX / distance * translateDistance;
                    const translateY = -deltaY / distance * translateDistance;

                    gsap.fromTo(imgElement,
                        {
                            clipPath: 'circle(0% at 50% 50%)',
                            x: translateX,
                            y: translateY
                        },
                        {
                            clipPath: 'circle(75% at 50% 50%)',
                            x: 0,
                            y: 0,
                            duration: 1,
                            ease: 'power2.out',
                            onComplete: () => {
                                gsap.to(imgElement, {
                                    opacity: 0,
                                    duration: 0.5,
                                    onComplete: () => {
                                        document.body.removeChild(imgElement);
                                        setVisibleImages(prev => prev.filter(img => img !== randomImage));
                                    }
                                });
                            }
                        }
                    );

                    lastImagePosition.current = { x, y, time: timeNow };

                    setVisibleImages(prev => [...prev, randomImage]);
                }
            }
        }
    }, [visibleImages]);

    useEffect(() => {
        const currentHero = heroRef.current;
        if (!currentHero) return;

        currentHero.addEventListener('mousemove', handleMouseMove);

        return () => {
            currentHero.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <>
            <Hero ref={heroRef}>
                <Stack direction={"column"} width={"100%"} height={"calc(70vh - 80px)"} justify={"space-between"}>
                    <Stack justify={"space-between"} width={"100%"} zIndex={2}>
                        <Stack width={"33,3%"}>
                            <TextLink href={"https://github.com/domov44"}>@domov44</TextLink>
                        </Stack>
                        <Stack width={"33,3%"} align={"center"}>
                            <Title level={6}>Devops developer & lead dev</Title>
                        </Stack>
                        <Stack width={"33,3%"} align={"end"}>
                            <TextLink href={"https://www.linkedin.com/in/ronan-scotet-concepteur-web/"}>ronanscotet</TextLink>
                        </Stack>
                    </Stack>
                    <Title level={1}>Ronan Scotet</Title>
                </Stack>
            </Hero>
            <Section>
                <Container direction={"row"} width={"100%"} maxwidth={"1200px"}>
                    <Stack width={"70%"} justify={"center"}>
                        <Bento highlight={"highlight"}>
                            block 1
                        </Bento>
                    </Stack>
                    <Stack direction={"column"} width={"30%"} spacing={"20px"}>
                        <Title level={2} className={"step-1"}>
                            What do I do as a devops developer & as a lead developer?
                        </Title>
                        <Stack direction={"column"}>
                            <Text>
                                I manage web applications from A to Z, throughout the devops cycle.
                            </Text>
                            <Text>
                                I automate and secure your project.
                            </Text>
                        </Stack>
                        <Button className={"step-1"} variant={"primary"}>about me</Button>
                    </Stack>
                </Container>
            </Section>
        </>
    );
}

export default Home;
