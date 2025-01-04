"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '@/app/components/ui/wrapper/Section';
import styles from './SingleVideoSection.module.css';

gsap.registerPlugin(ScrollTrigger);

function SingleVideoSection({ video }) {
    const sectionRef = useRef(null);
    const imageBgRef = useRef(null);

    console.log(video)

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
        <Section className="h100vh defaultPadding" ref={sectionRef}>
            <figure className={styles.image_section}>
                <video
                    className={styles.image_bg}
                    ref={imageBgRef}
                    src={video}
                    autoPlay loop muted playsInline
                />
            </figure>
        </Section>
    );
}

export default SingleVideoSection;
