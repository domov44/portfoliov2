import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from '../../ui/textual/Title';
import Stack from '../../ui/wrapper/Stack';
import Section from '../../ui/wrapper/Section';
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
  transform: translate3d(-10px, -100px, 0px) rotate(10deg);
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

const HomeSecondSection = () => {
  const bentoDivRef = useRef(null);
  const parentBentoDivRef = useRef(null);
  const sectionRef = useRef(null);
  const parentBentoPosition = { x: 0, y: 0, rotation: 0 };
  const bentoPosition = { x: 0, y: 0, rotation: 0 };

  useEffect(() => {
    const parentBentoDiv = parentBentoDivRef.current;
    const bentoDiv = bentoDivRef.current;
    const section = sectionRef.current;

    const scrollTween = gsap.to(parentBentoDiv, {
      rotation: -10,
      x: 10,
      y: 20,
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
    <Section ref={sectionRef} highlight={true}>
      <Container direction={"row"} width={"100%"} maxwidth={"1200px"} align={"center"}>
        <Stack width={"70%"} justify={"center"}>
          <BentoParentdiv ref={parentBentoDivRef}>
            <BentoDiv ref={bentoDivRef} highlight={"highlight"}>
              <Video src="https://ranlus.fr/assets/instagram-card/2.mp4" autoPlay loop muted playsInline />
              <Stack>
                <Text>@rscotet</Text>
              </Stack>
            </BentoDiv>
          </BentoParentdiv>
        </Stack>
        <Stack direction={"column"} width={"30%"} spacing={"20px"}>
          <Title level={3} className={"step-1"}>
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
          <Button className={"step-1"} variant={"primary"} href="/about-me" transition>
            about me
          </Button>
        </Stack>
      </Container>
    </Section>
  );
};

export default HomeSecondSection;
