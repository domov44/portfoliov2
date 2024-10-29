// Header.js
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Container from '../wrapper/Container';
import DynamicHour from '@/app/utils/DynamicHour';
import Stack from '../wrapper/Stack';
import Logo from '../Logo';
import InvisibleLink from '../button/InvisibleLink';
import styles from './Header.module.css';

function Header({ isopen, toggleMenu, isAnimating }) {
  const buttonRef = useRef(null);
  const menuTextRef = useRef(null);
  const closeTextRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const menuSpan = menuTextRef.current;
    const closeSpan = closeTextRef.current;

    gsap.set(menuSpan, { yPercent: isopen === 'open' ? -200 : 0 });
    gsap.set(closeSpan, { yPercent: isopen === 'open' ? 0 : 200 });

    const tl = gsap.timeline({ paused: true });
    tl.to(menuSpan, { duration: 0.2, yPercent: -200, ease: 'power2.inOut' })
      .to(closeSpan, { duration: 0.2, yPercent: 0, ease: 'power2.inOut' }, 0);

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [isopen]);

  const handleClick = () => {
    if (isAnimating) return;
    const tl = timelineRef.current;
    tl.play();
    // toggleMenu();
  };

  return (
    <header className={styles.header}>
      <Container direction="row" align="center" width="full" justify="space-between">
        <Stack align="center"  width="33%">
          <InvisibleLink href={"/"} lineheight={"0"}>
            <Logo />
          </InvisibleLink>
        </Stack>
        <Stack align="center" width="33%" justify="center">
          <button
            ref={buttonRef}
            onClick={handleClick}
            className={styles.asideButton}
          >
            <div className={styles.buttonTextWrapper}>
              <span ref={menuTextRef} className={styles.buttonText}>
                menu
              </span>
              <span ref={closeTextRef} className={styles.buttonText}>
                close
              </span>
            </div>
          </button>
        </Stack>
        <Stack align="center" width="33%" justify="end">
          <DynamicHour />
        </Stack>
      </Container>
    </header>
  );
}

export default Header;