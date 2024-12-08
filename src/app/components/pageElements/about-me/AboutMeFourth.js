'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from '../../ui/textual/Title';
import Stack from '../../ui/wrapper/Stack';
import Section from '../../ui/wrapper/Section';
import Text from '../../ui/textual/Text';
import styles from './AboutMeFourthSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const AboutMeFourthSection = () => {
  const sectionRef = useRef(null);
  const bentoRefs = useRef([]);

  const bentos = [
    { image: "https://media.licdn.com/dms/image/v2/D4D03AQG7_lNmrEXP3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732219068306?e=1738195200&v=beta&t=xupm-35NvNz3RJJtZ97gfrRGUqi3Bf-SWDLkipUizj0", caption: "@rscotet" },
    { image: "https://media.licdn.com/dms/image/v2/D4D03AQG7_lNmrEXP3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732219068306?e=1738195200&v=beta&t=xupm-35NvNz3RJJtZ97gfrRGUqi3Bf-SWDLkipUizj0", caption: "@rscotet" },
    { image: "https://media.licdn.com/dms/image/v2/D4D03AQG7_lNmrEXP3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732219068306?e=1738195200&v=beta&t=xupm-35NvNz3RJJtZ97gfrRGUqi3Bf-SWDLkipUizj0", caption: "@rscotet" },
    { image: "https://media.licdn.com/dms/image/v2/D4D03AQG7_lNmrEXP3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732219068306?e=1738195200&v=beta&t=xupm-35NvNz3RJJtZ97gfrRGUqi3Bf-SWDLkipUizj0", caption: "@rscotet" },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    bentos.forEach((_, index) => {
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
  }, [bentos]);

  return (
    <Section fullWidth highlight>
      <Stack ref={sectionRef} className="scroll-section" position="relative" direction="column" overflow justify="start" padding="0px 0px 20vh 0px" spacing="100px">
        <Stack padding="30vh 0px 0px 0px" direction="column" width="100%" align="center" spacing="10vw" zIndex="1">
          <Stack width="70vw" justify="center" direction="column" align="center">
            <Title level={2} className="colored font8vw text_align_center w70vw ln0_8">
              WHAT CAN YOU EXPECT FROM ME ?
            </Title>
            <Stack width="40vw" justify="center" direction="column" align="center">
              <Title level={3} className={"step-1"} textalign="center">
                I can create any type of web project, Website, Web app, Games, using modern framework or native technologies.
              </Title>
              <Text textalign="center">
                For simple project to large scale productions, build your project with me.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <ul className={styles.listAbout}>
          {bentos.map((bento, index) => (
            <li
              key={index}
              ref={(el) => (bentoRefs.current[index] = el)}
              className={styles.bentoParentDiv}
            >
              <div className={styles.bentoDiv}>
                <img src={bento.image} className={styles.image} alt="" />
                <Stack>
                  <Text>{bento.caption}</Text>
                </Stack>
              </div>
            </li>
          ))}
        </ul>
      </Stack>
    </Section>
  );
};

export default AboutMeFourthSection;
