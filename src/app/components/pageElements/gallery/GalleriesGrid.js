"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './GalleriesGrid.module.css';

const GalleriesGrid = ({ galleries }) => {
    const ulRef = useRef(null);
    const liRefs = useRef([]);
    const pictureRefs = useRef([]);

    useEffect(() => {
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

            const initialPosition = { x: 0, y: 0, rotation: 0 };

            const handleLiMouseEnter = () => {
                gsap.killTweensOf(picture);
                gsap.to(picture, {
                    scale: 1.08,
                    duration: 0.8,
                    ease: "power4.out",
                });
            };

            const handleLiMouseMove = (e) => {
                const { width, height, top, left } = li.getBoundingClientRect();
                const x = e.clientX - left - width / 2;
                const y = e.clientY - top - height / 2;

                gsap.to(picture, {
                    x: initialPosition.x + x * 0.2,
                    y: initialPosition.y + y * 0.2,
                    rotation: initialPosition.rotation,
                    duration: 0.8,
                    ease: "power4.out",
                });
            };

            const handleLiMouseLeave = () => {
                gsap.killTweensOf(picture);
                gsap.to(picture, {
                    x: initialPosition.x,
                    y: initialPosition.y,
                    rotation: initialPosition.rotation,
                    scale: 1,
                    duration: 0.8,
                    ease: "power4.out",
                });
            };

            li.addEventListener('mouseenter', handleLiMouseEnter);
            li.addEventListener('mousemove', handleLiMouseMove);
            li.addEventListener('mouseleave', handleLiMouseLeave);

            return () => {
                li.removeEventListener('mouseenter', handleLiMouseEnter);
                li.removeEventListener('mousemove', handleLiMouseMove);
                li.removeEventListener('mouseleave', handleLiMouseLeave);
            };
        });

        return () => {
            window.removeEventListener('mousemove', throttledHandleMouseMove);
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const completeGalleryList = () => {
        const galleryItems = [...galleries];
        while (galleryItems.length < 15) {
            const randomIndex = Math.floor(Math.random() * galleries.length);
            galleryItems.push({ ...galleries[randomIndex], id: `${galleries[randomIndex].id}-duplicate-${galleryItems.length}` });
        }
        return galleryItems;
    };

    const galleryItems = galleries.length >= 15 ? galleries : completeGalleryList();

    return (
        <ul ref={ulRef} className={styles.GalleryGridList}>
            {galleryItems.map((gallery, index) => (
                <li ref={(el) => (liRefs.current[index] = el)}
                    key={gallery.id}
                    className={styles.GalleryGridListItem}
                >
                    <picture className={styles.GalleryPicture} ref={(el) => (pictureRefs.current[index] = el)}>
                        <img
                            src={gallery.pictureUrl}
                            alt={`${gallery.place} - ${gallery.date}`}
                            className={styles.GalleryImage}
                        />
                    </picture>
                </li>
            ))}
        </ul>
    );
};

export default GalleriesGrid;
