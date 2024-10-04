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
    'https://ranlus.fr/assets/home-trail/1.jpeg',
    'https://ranlus.fr/assets/home-trail/2.jpeg',
    'https://ranlus.fr/assets/home-trail/3.jpeg',
    'https://ranlus.fr/assets/home-trail/4.jpeg',
    'https://ranlus.fr/assets/home-trail/6.jpeg',
    'https://ranlus.fr/assets/home-trail/7.jpeg',
    'https://ranlus.fr/assets/home-trail/8.jpeg',
    'https://ranlus.fr/assets/home-trail/9.jpeg',
    'https://ranlus.fr/assets/home-trail/10.jpeg',
    'https://ranlus.fr/assets/home-trail/11.jpeg',
    'https://ranlus.fr/assets/home-trail/13.jpeg',
    'https://ranlus.fr/assets/home-trail/14.jpeg',
    'https://ranlus.fr/assets/home-trail/15.jpeg',
];

const Home = () => {
    const [visibleImages, setVisibleImages] = useState([]);
    const heroRef = useRef(null);
    const lastImagePosition = useRef({ x: 0, y: 0, time: performance.now() });
    const zIndexCounter = useRef(1);

    useEffect(() => {
        const heroElement = heroRef.current;
        images.forEach((src, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = src;
            imgElement.style.position = 'absolute';
            imgElement.style.opacity = 0;
            imgElement.style.pointerEvents = 'none';
            imgElement.style.width = '214px';
            imgElement.style.height = '120px';
            imgElement.style.borderRadius = '10px';
            imgElement.classList.add(`image-${index}`);
            heroElement.appendChild(imgElement);
        });
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!heroRef.current) return;

        const { clientX: x, clientY: y } = e;
        const { left, top } = heroRef.current.getBoundingClientRect();

        const adjustedX = x - left;
        const adjustedY = y - top;

        if (adjustedX >= 0 && adjustedX <= heroRef.current.clientWidth && adjustedY >= 0 && adjustedY <= heroRef.current.clientHeight) {
            const timeNow = performance.now();
            const timeDelta = timeNow - lastImagePosition.current.time;

            const deltaX = adjustedX - lastImagePosition.current.x;
            const deltaY = adjustedY - lastImagePosition.current.y;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            const velocity = distance / timeDelta || 1;

            if (distance >= 100 && visibleImages.length < 50) {
                const randomIndex = Math.floor(Math.random() * images.length);
                const randomImageClass = `.image-${randomIndex}`;
                const imgElement = heroRef.current.querySelector(randomImageClass);

                if (imgElement && !visibleImages.includes(randomIndex)) {
                    imgElement.style.left = `${adjustedX - imgElement.width / 2}px`;
                    imgElement.style.top = `${adjustedY - imgElement.height / 2}px`;
                    imgElement.style.opacity = 1;
                    imgElement.style.zIndex = zIndexCounter.current++;

                    const translateDistance = Math.min(1500, Math.max(200, velocity ** 2 * 10));
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
                                        setVisibleImages(prev => prev.filter(img => img !== randomIndex));
                                    }
                                });
                            }
                        }
                    );

                    lastImagePosition.current = { x: adjustedX, y: adjustedY, time: timeNow };
                    setVisibleImages(prev => [...prev, randomIndex]);
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
