"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '@/app/components/ui/wrapper/Section';
import styles from './SingleMainSection.module.css';

gsap.registerPlugin(ScrollTrigger);

function SingleMainSection({ image }) {
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
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }
    }, []);

    return (
        <Section className="h80vh defaultPadding align_center" ref={sectionRef}>
            <figure className={styles.image_section}>
                <img
                    className={styles.image_bg}
                    ref={imageBgRef}
                    src={image}
                    alt="Background"
                />
            </figure>
        </Section>
    );
}

export default SingleMainSection;
