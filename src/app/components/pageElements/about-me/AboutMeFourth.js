'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from '../../ui/textual/Title';
import Stack from '../../ui/wrapper/Stack';
import Section from '../../ui/wrapper/Section';
import Text from '../../ui/textual/Text';
import styles from './AboutMeFourthSection.module.css';
import InvisibleLink from '../../ui/button/InvisibleLink';

gsap.registerPlugin(ScrollTrigger);

const AboutMeFourthSection = ({ bento }) => {
  const sectionRef = useRef(null);
  const bentoRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    bento.forEach((_, index) => {
      const parentBentoDiv = bentoRefs.current[index];

      gsap.to(parentBentoDiv, {
        y: index === 0 ? -200 : index === 1 ? -200 : index === 2 ? -40 : -20,
        x: index === 0 ? -50 : index === 1 ? 50 : index === 2 ? -50 : 100,
        rotation: index === 0 ? 15 : index === 1 ? -10 : index === 2 ? -8 : 5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      const handleMouseMove = (e) => {
        const bentoDiv = parentBentoDiv.querySelector(`.${styles.bentoDiv}`);
        const { width, height, top, left } = bentoDiv.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        gsap.to(bentoDiv, {
          x: x * 0.1,
          y: y * 0.1,
          rotation: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      const handleMouseLeave = () => {
        const bentoDiv = parentBentoDiv.querySelector(`.${styles.bentoDiv}`);
        gsap.to(bentoDiv, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      parentBentoDiv.addEventListener('mousemove', handleMouseMove);
      parentBentoDiv.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        parentBentoDiv.removeEventListener('mousemove', handleMouseMove);
        parentBentoDiv.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [bento]);

  return (
    <Section fullWidth highlight>
      <Stack
        ref={sectionRef}
        className="scroll-section"
        position="relative"
        direction="column"
        overflow
        justify="start"
        padding="0px 0px 20vh 0px"
        spacing="100px"
      >
        <Stack
          padding="30vh 0px 0px 0px"
          direction="column"
          width="100%"
          align="center"
          spacing="10vw"
          zIndex="1"
        >
          <Stack width="70vw" justify="center" direction="column" align="center">
            <Title level={2} className="colored font8vw text_align_center w70vw ln0_8">
              WHAT CAN YOU EXPECT FROM ME ?
            </Title>
            <Stack width="40vw" justify="center" direction="column" align="center">
              <Title level={3} className={"default text_align_center step-1"}>
                I can create any type of web project, Website, Web app, Games, using modern frameworks or native technologies.
              </Title>
              <Text textalign="center">
                For simple projects to large-scale productions, build your project with me.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <ul className={styles.listAbout}>
          {bento.map((item, index) => (
            <li
              key={index}
              ref={(el) => (bentoRefs.current[index] = el)}
              className={styles.bentoParentDiv}
            >
              <div className={styles.bentoDiv}>
                {item.fileType.startsWith("image") ? (
                  <img src={item.file} className={styles.image} alt={item.label} />
                ) : item.fileType.startsWith("video") ? (
                  <video
                    src={item.file}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video}
                  ></video>
                ) : null}
                <Stack>
                  <Text>{item.label}</Text>
                </Stack>
                {item.href && (
                  <InvisibleLink lineheight={"0"} href={item.href} target={"_blank"}>{item.href}</InvisibleLink>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Stack>
    </Section>
  );
};

export default AboutMeFourthSection;
