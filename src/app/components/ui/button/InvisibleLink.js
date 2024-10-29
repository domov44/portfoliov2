import React from 'react';
import Link from 'next/link';
import styles from './InvisibleLink.module.css';

const InvisibleLink = ({ href, children, lineheight, onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className={styles.linkButton}
        style={{ lineHeight: lineheight || 'normal' }}
    >
        {children}
    </Link>
);

export default InvisibleLink;
