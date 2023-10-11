import { motion } from 'framer-motion';
import clsx from 'clsx';

import { type AppState, useAppState } from '@app/state';

import { DrawerItem } from './item';

/**
 * Drawer navigation props.
 */
export type DrawerNavigationProps = {
  className?: string;
  title?: string;
  games: AppState['games'];
};

/**
 * Drawer navigation component.
 */
export function DrawerNavigation(props: DrawerNavigationProps) {
  const { className, title, games } = props;

  const rootClasses = clsx('navigation', className);

  if (!games.length) {
    return null;
  }

  return (
    <>
      {title && (
        <motion.h3
          className="title"
          initial="closed"
          exit="closed"
          animate="open"
          variants={{
            open: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.2,
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
          {title}
        </motion.h3>
      )}
      <motion.ul
        className={rootClasses}
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
        {games.map((game) => (
          <DrawerItem key={game.id} {...game} />
        ))}
      </motion.ul>
    </>
  );
}

/**
 * Drawer navigation component to be used outside of the drawer.
 */
export function StandAloneNavigation() {
  const [games, loading] = useAppState((state) => state.games, []);

  if (loading) {
    return <motion.div>Loading...</motion.div>;
  }

  const availableGames = games.filter((game) => !game.isPreset);
  const presetGames = games.filter((game) => game.isPreset);

  return (
    <div className="standalone-navigation">
      <DrawerNavigation className="available" games={availableGames} />
      <DrawerNavigation title="Presets" className="presets" games={presetGames} />
    </div>
  );
}
