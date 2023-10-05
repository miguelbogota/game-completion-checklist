import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import clsx from 'clsx';

import { useAppState } from '@app/state';

import * as styles from './_styles.css';
import { useDrawerState } from './_state';
import { useState } from 'react';

/**
 * Drawer menu item props.
 */
export type DrawerItemProps = LocalChecklist & {
  // Empty...
};

/**
 * Drawer menu item component.
 */
export function DrawerItem(props: DrawerItemProps) {
  const { id, name, isPreset } = props;

  const [loading, setLoading] = useState(false);

  const { gameId } = useParams();
  const router = useRouter();
  const toggle = useDrawerState((state) => state.toggle);
  const [loadPreset] = useAppState((state) => state.loadPreset);

  const rootClasses = clsx(styles.item, {
    [styles.itemPreset]: isPreset,
  });

  return (
    <motion.li
      className={rootClasses}
      variants={{
        open: {
          x: 0,
          opacity: 1,
          transition: {
            x: {
              stiffness: 1000,
              velocity: -100,
            },
          },
        },
        closed: {
          x: -50,
          opacity: 0,
          transition: {
            x: {
              stiffness: 1000,
            },
          },
        },
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isPreset ? (
        <button
          onClick={() => {
            setLoading(true);
            loadPreset?.(id).then(() => {
              setLoading(false);
              toggle(false);
              router.push(`/${id}`);
            });
          }}
        >
          {loading ? 'Loading...' : name}
        </button>
      ) : (
        <Link
          href={{
            search: `?game=${id}`,
          }}
          onClick={() => {
            // Close only if the route is different.
            if (gameId !== id) {
              toggle(false);
            }
          }}
        >
          {name}
        </Link>
      )}
    </motion.li>
  );
}
