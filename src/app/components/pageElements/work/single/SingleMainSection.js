"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/app/components/ui/button/Button';
import Text from '@/app/components/ui/textual/Text';
import Title from '@/app/components/ui/textual/Title';
import Hero from '@/app/components/ui/wrapper/Hero';
import Section from '@/app/components/ui/wrapper/Section';
import Stack from '@/app/components/ui/wrapper/Stack';
import styles from './SingleMainSection.module.css';
import Container from '@/app/components/ui/wrapper/Container';

gsap.registerPlugin(ScrollTrigger);

async function SingleMainSection({ project }) {
    const sectionRef = useRef(null);
    const imageBgRef = useRef(null);

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

    return (
        <Section className="defaultPadding" ref={sectionRef}>
            <figure className={styles.image_section}>
                <img className={styles.image_bg} ref={imageBgRef} src={"https://ranlus.fr/assets/work/hugo-decrypte-mashup/2.jpeg"} alt="Background" />
            </figure>
        </Section>
    );
}

export default SingleMainSection;
