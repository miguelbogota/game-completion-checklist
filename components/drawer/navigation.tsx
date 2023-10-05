import { useId } from 'react';
import { motion } from 'framer-motion';

import { useAppState } from '@app/state';

import * as styles from './_styles.css';
import { DrawerItem } from './item';

/**
 * Drawer navigation component.
 */
export function DrawerNavigation() {
  const [games, loading] = useAppState((state) => state.games, []);
  const layoutId = useId();

  const sortedGames = games.sort((a, b) =>
    // Makes the preset games appear at the bottom of the list.
    a.isPreset && !b.isPreset ? 1 : !a.isPreset && b.isPreset ? -1 : 0,
  );

  return loading ? (
    <motion.div layoutId={layoutId}>Loading...</motion.div>
  ) : (
    <motion.ul
      className={styles.navigation}
      layoutId={layoutId}
      initial="closed"
      exit="closed"
      animate="open"
      variants={{
        open: {
          opacity: 1,
          transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
          },
        },
        closed: {
          opacity: 0,
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
          },
        },
      }}
    >
      {sortedGames.map((game) => (
        <DrawerItem key={game.id} {...game} />
      ))}
    </motion.ul>
  );
}

/**
 * Drawer navigation component to be used outside of the drawer.
 */
export function StandAloneNavigation() {
  return <DrawerNavigation />;
}
