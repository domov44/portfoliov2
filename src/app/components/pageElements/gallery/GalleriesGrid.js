"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './GalleriesGrid.module.css';

const GalleriesGrid = ({ galleries }) => {
    const ulRef = useRef(null);

    useEffect(() => {
        const ulElement = ulRef.current;

        const updateDimensions = () => {
            viewportWidth = window.innerWidth;
            viewportHeight = window.innerHeight;
            gridWidth = ulElement.scrollWidth;
            gridHeight = ulElement.scrollHeight;
        };

        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let gridWidth = ulElement.scrollWidth;
        let gridHeight = ulElement.scrollHeight;

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
            {galleryItems.map((gallery) => (
                <li key={gallery.id} className={styles.GalleryGridListItem}>
                    <img
                        src={gallery.pictureUrl}
                        alt={`${gallery.place} - ${gallery.date}`}
                        className={styles.GalleryImage}
                    />
                </li>
            ))}
        </ul>
    );
};

export default GalleriesGrid;
