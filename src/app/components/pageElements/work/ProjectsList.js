"use client"
import styles from './ProjectsList.module.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import InvisibleLink from '../../ui/button/InvisibleLink';

gsap.registerPlugin(ScrollTrigger);

function ProjectsList({ projects }) {
    const sectionRef = useRef(null);
    const projectRowRef = useRef(null);

    useEffect(() => {
        if (!projects?.length) return;

        const section = sectionRef.current;
        const projectRow = projectRowRef.current;

        if (!section || !projectRow) return;

        gsap.to(projectRow, {
            x: () => -(projectRow.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${projectRow.scrollWidth - window.innerWidth}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                pinSpacing: true
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [projects]);

    return (
        <section ref={sectionRef} className={styles.Section}>
            {projects && projects.length > 0 ? (
                <div ref={projectRowRef} className={styles.ProjectRow}>
                    {projects.map((project) =>
                        project.thumbnailUrl ? (
                            <article key={project.id} className={styles.ProjectArticle}>
                                <figure>
                                    <img alt={project.name} src={project.thumbnailUrl} />
                                </figure>
                                <InvisibleLink lineheight={"0"} href={`/work/${project.slug}`} transition>View project</InvisibleLink>
                            </article>
                        ) : null
                    )}
                </div>
            ) : (
                <p>No projects found</p>
            )}
        </section>
    );
}

export default ProjectsList;