'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from '../../ui/textual/Title';
import Stack from '../../ui/wrapper/Stack';
import Section from '../../ui/wrapper/Section';
import TextLink from '../../ui/textual/TextLink';
import styles from './AboutMeSecondSection.module.css';
import Container from '../../ui/wrapper/Container';
import Button from '../../ui/button/Button';
import Text from '../../ui/textual/Text';

gsap.registerPlugin(ScrollTrigger);

const BentoDiv = styled.figure`
  position: relative;
  overflow: hidden;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 22vw;
  background: #1f1d27;
  padding: 10% 10% 20%;
  border-radius: 10px;
  border: 2px solid #2b2930;
  transform-origin: center;
  transform: translate3d(0px, 0px, 0px) rotate(00deg);
`;

const BentoParentdiv = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  transform-origin: center;
  transform: translate3d(-10px, 150px, 0px) rotate(10deg);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

const AboutMeSecondSection = ({ images, background }) => {
    const sectionRef = useRef(null);
    const imageBgRef = useRef(null);

    const bentoDivRef = useRef(null);
    const parentBentoDivRef = useRef(null);
    const parentBentoPosition = { x: 0, y: 0, rotation: 0 };
    const bentoPosition = { x: 0, y: 0, rotation: 0 };

    useEffect(() => {
        if (sectionRef.current && imageBgRef.current) {


            gsap.to(imageBgRef.current, {
                y: '10%',
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: `bottom top`,
                    scrub: true,
                },
            });


        }
    }, []);

    useEffect(() => {
        const parentBentoDiv = parentBentoDivRef.current;
        const bentoDiv = bentoDivRef.current;
        const section = sectionRef.current;

        const scrollTween = gsap.to(parentBentoDiv, {
            rotation: -10,
            x: 10,
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => {
                    parentBentoPosition.x = gsap.getProperty(parentBentoDiv, "x");
                    parentBentoPosition.y = gsap.getProperty(parentBentoDiv, "y");
                    parentBentoPosition.rotation = gsap.getProperty(parentBentoDiv, "rotation");
                },
            },
        });

        const handleMouseMove = (e) => {
            const { width, height, top, left } = bentoDiv.getBoundingClientRect();
            const x = e.clientX - left - width / 2;
            const y = e.clientY - top - height / 2;

            gsap.to(bentoDiv, {
                x: bentoPosition.x + x * 0.1,
                y: bentoPosition.y + y * 0.1,
                rotation: bentoPosition.rotation,
                duration: 0.8,
                ease: "power3.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(bentoDiv, {
                x: bentoPosition.x,
                y: bentoPosition.y,
                rotation: bentoPosition.rotation,
                duration: 0.8,
                ease: "power3.out",
            });
        };

        bentoDiv.addEventListener('mousemove', handleMouseMove);
        bentoDiv.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            bentoDiv.removeEventListener('mousemove', handleMouseMove);
            bentoDiv.removeEventListener('mouseleave', handleMouseLeave);
            scrollTween.kill();
        };
    }, []);

    return (

        <Section fullWidth>
            <Stack width="100%" ref={sectionRef} className="scroll-section" position="relative" direction="column" overflow height="160vh" justify="start" padding="0px 0px 70vh 0px" spacing="100px">
                <Stack padding="50vh 0px 0px 0px" direction="column" width="100%" align="center" spacing="10vw">
                    <Stack width="100%" justify="center">
                        <Title level={2} fontSize="8vw" variant="colored" textalign="center" width="70vw" lineHeight="0.8">
                            IAM A DEVOPS DEVELOPER
                        </Title>
                    </Stack>
                    <Container direction={"row"} width={"full"} maxwidth={"xl"} align={"center"}>
                        <Stack direction={"column"} width={"40%"} spacing={"20px"}>
                            <Title level={3} className={"step-1"}>
                                With me, you can be sure that every project will be carried out with commitment throughout the entire devops cycle.
                            </Title>
                            <Stack direction={"column"}>
                                <Text>
                                    I code your project and deploy it.
                                </Text>
                            </Stack>
                        </Stack>
                        <Stack width={"60%"} justify={"center"}>
                            <BentoParentdiv ref={parentBentoDivRef}>
                                <BentoDiv ref={bentoDivRef}>
                                    <Image src="https://media.licdn.com/dms/image/v2/D4D03AQG7_lNmrEXP3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732219068306?e=1738195200&v=beta&t=xupm-35NvNz3RJJtZ97gfrRGUqi3Bf-SWDLkipUizj0" />
                                    <Stack>
                                        <Text>@rscotet</Text>
                                    </Stack>
                                </BentoDiv>
                            </BentoParentdiv>
                        </Stack>

                    </Container>

                </Stack>
                <figure className={styles.image_section}>
                    <img className={styles.image_bg} ref={imageBgRef} src={"https://ranlus.fr/assets/gallery/15.webp"} alt="Background" />
                </figure>
            </Stack>
        </Section>

    );
};

export default AboutMeSecondSection;
