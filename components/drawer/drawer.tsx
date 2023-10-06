import { motion } from 'framer-motion';

import { useDrawerState } from './state';

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
    <motion.nav className="drawer" initial={false} animate={open ? 'open' : 'closed'}>
      <DrawerToggle />

      <DrawerContent>
        <DrawerNavigation />
        <DrawerNewGame />
      </DrawerContent>

      <DrawerBackdrop />
    </motion.nav>
  );
}
