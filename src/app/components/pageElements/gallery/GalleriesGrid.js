"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './GalleriesGrid.module.css';

const GalleriesGrid = ({ galleries }) => {
    const [hoveredGallery, setHoveredGallery] = useState({ place: "hover something", date: "You need to dot it" });
    const ulRef = useRef(null);
    const liRefs = useRef([]);
    const pictureRefs = useRef([]);
    const imgRefs = useRef([]);

    useEffect(() => {
        if (!ulRef.current) return;

        const ulElement = ulRef.current;
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let gridWidth = ulElement.scrollWidth;
        let gridHeight = ulElement.scrollHeight;

        const updateDimensions = () => {
            viewportWidth = window.innerWidth;
            viewportHeight = window.innerHeight;
            gridWidth = ulElement.scrollWidth;
            gridHeight = ulElement.scrollHeight;
        };

        window.addEventListener("resize", updateDimensions);

        const animationConfig = {
            duration: 1.2,
            ease: "power4.out",
        };

        imgRefs.current.forEach((img) => {
            gsap.set(img, { scale: 1.3 });
        });

        const handleMouseMove = (e) => {
            const mouseXRatio = e.clientX / viewportWidth;
            const mouseYRatio = e.clientY / viewportHeight;

            const targetX = Math.min(0, Math.max(-(gridWidth - viewportWidth),
                -(gridWidth - viewportWidth) * (mouseXRatio * 0.95)));
            const targetY = Math.min(0, Math.max(-(gridHeight - viewportHeight),
                -(gridHeight - viewportHeight) * (mouseYRatio * 0.95)));

            gsap.to(ulElement, {
                x: targetX,
                y: targetY,
                ...animationConfig,
                overwrite: true,
            });

            imgRefs.current.forEach((img, index) => {
                const rect = img.getBoundingClientRect();
                const imgCenterX = rect.left + rect.width / 2;
                const imgCenterY = rect.top + rect.height / 2;

                const deltaX = (imgCenterX - viewportWidth / 2) / viewportWidth;
                const deltaY = (imgCenterY - viewportHeight / 2) / viewportHeight;

                gsap.to(img, {
                    x: deltaX * -45,
                    y: deltaY * -45,
                    overwrite: true,
                    duration: 0.8,
                    ease: "power4.out",
                });
            });
        };

        let lastTime = 0;
        const throttleDelay = 16;

        const throttledHandleMouseMove = (e) => {
            const now = Date.now();
            if (now - lastTime >= throttleDelay) {
                handleMouseMove(e);
                lastTime = now;
            }
        };

        window.addEventListener('mousemove', throttledHandleMouseMove);

        liRefs.current.forEach((li, index) => {
            const picture = pictureRefs.current[index];
            const galleryData = galleries[index];

            const handleLiMouseEnter = () => {
                setHoveredGallery({ place: galleryData.place, date: galleryData.date });
                gsap.killTweensOf(picture);
                gsap.to(picture, {
                    scale: 1.08,
                    duration: 1.8,
                    ease: "power4.out",
                });
            };

            const handleLiMouseLeave = () => {
                setHoveredGallery({ place: "hover something", date: "You need to dot it" });
                gsap.killTweensOf(picture);
                gsap.to(picture, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 1.8,
                    ease: "power4.out",
                });
            };

            li.addEventListener('mouseenter', handleLiMouseEnter);
            li.addEventListener('mouseleave', handleLiMouseLeave);

            return () => {
                li.removeEventListener('mouseenter', handleLiMouseEnter);
                li.removeEventListener('mouseleave', handleLiMouseLeave);
            };
        });

        return () => {
            window.removeEventListener('mousemove', throttledHandleMouseMove);
            window.removeEventListener("resize", updateDimensions);
        };
    }, [galleries]);

    return (
        <>
            <ul ref={ulRef} className={styles.GalleryGridList}>
                {galleries.map((gallery, index) => (
                    <li ref={(el) => (liRefs.current[index] = el)}
                        key={gallery.id}
                        className={styles.GalleryGridListItem}
                    >
                        <picture className={styles.GalleryPicture} ref={(el) => (pictureRefs.current[index] = el)}>
                            <img
                                ref={(el) => (imgRefs.current[index] = el)}
                                src={gallery.pictureUrl}
                                alt={`${gallery.place} - ${gallery.date}`}
                                className={styles.GalleryImage}
                            />
                        </picture>
                    </li>
                ))}
            </ul>
            <div className={styles.GalleryInformationSection}>
                <h1 className='step-2'>
                    {hoveredGallery.place}
                </h1>
                <p>{hoveredGallery.date}</p>
            </div>
        </>
    );
};

export default GalleriesGrid;
