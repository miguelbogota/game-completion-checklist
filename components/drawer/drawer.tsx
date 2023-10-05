import { motion } from 'framer-motion';

import * as styles from './_styles.css';
import { useDrawerState } from './_state';

import { DrawerToggle } from './toggle';
import { DrawerContent } from './content';
import { DrawerNavigation } from './navigation';
import { DrawerNewGame } from './new-game';
import { DrawerBackdrop } from './backdrop';

/**
 * Drawer menu component.
 */
export function Drawer() {
  const open = useDrawerState((state) => state.open);

  return (
    <motion.nav className={styles.drawer} initial={false} animate={open ? 'open' : 'closed'}>
      <DrawerToggle />

      <DrawerContent>
        <DrawerNavigation />
        <DrawerNewGame />
      </DrawerContent>

      <DrawerBackdrop />
    </motion.nav>
  );
}
