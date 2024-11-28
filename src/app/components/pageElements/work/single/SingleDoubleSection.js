"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '@/app/components/ui/wrapper/Section';
import styles from './SingleDoubleSection.module.css';

gsap.registerPlugin(ScrollTrigger);

async function SingleDoubleSection({ project }) {
    const sectionRef = useRef(null);
    const imageRefs = useRef([]);

    useEffect(() => {
        if (sectionRef.current) {
            imageRefs.current.forEach((image, index) => {
                if (image) {
                    gsap.to(image, {
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
            });
        }
    }, []);

    return (
        <Section className="h80vh defaultPadding align_center" ref={sectionRef}>
            <div className={styles.wrapper_single}>
                {['https://ranlus.fr/assets/work/hugo-decrypte-mashup/4.jpeg', 'https://ranlus.fr/assets/work/hugo-decrypte-mashup/3.jpeg'].map((src, index) => (
                    <div key={index} className={styles.stack_single}>
                        <figure className={styles.image_section}>
                            <img
                                className={styles.image_bg}
                                ref={(el) => (imageRefs.current[index] = el)}
                                src={src}
                                alt={`Background ${index + 1}`}
                            />
                        </figure>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default SingleDoubleSection;
