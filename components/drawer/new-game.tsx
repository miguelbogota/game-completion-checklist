import { motion } from 'framer-motion';

import * as styles from './_styles.css';

/**
 * Drawer new game component.
 */
export function DrawerNewGame() {
  return (
    <motion.button
      className={styles.newGame}
      variants={{
        open: {
          x: 0,
          opacity: 1,
          transition: {
            delay: 0.4,
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
    >
      Load a new game
    </motion.button>
  );
}
