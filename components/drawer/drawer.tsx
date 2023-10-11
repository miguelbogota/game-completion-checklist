import { motion } from 'framer-motion';

import { useDrawerState } from './state';

import { DrawerToggle } from './toggle';
import { DrawerContent } from './content';
import { DrawerNavigation } from './navigation';
import { DrawerNewGame } from './new-game';
import { DrawerBackdrop } from './backdrop';
import { useAppState } from '@app/state';

/**
 * Drawer menu component.
 */
export function Drawer() {
  const open = useDrawerState((state) => state.open);
  const [games] = useAppState((state) => state.games, []);

  const availableGames = games.filter((game) => !game.isPreset);
  const presetGames = games.filter((game) => game.isPreset);

  return (
    <motion.nav className="drawer" initial={false} animate={open ? 'open' : 'closed'}>
      <DrawerToggle />

      <DrawerContent>
        <DrawerNavigation className="available" games={availableGames} />
        <DrawerNavigation title="Presets" className="presets" games={presetGames} />
        <DrawerNewGame />
      </DrawerContent>

      <DrawerBackdrop />
    </motion.nav>
  );
}
