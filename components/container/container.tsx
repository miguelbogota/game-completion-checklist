'use client';

import { type PropsWithChildren } from 'react';

import * as styles from './_styles.css';

/**
 * Container component.
 */
export function Container(props: PropsWithChildren<{ color?: string }>) {
  const { children, color } = props;

  return (
    <main className={styles.container} style={{ color }}>
      {children}
    </main>
  );
}
