import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { useDrawerState } from './state';

const Link = motion(NextLink);

/**
 * Drawer new game component.
 */
export function DrawerNewGame() {
  const toggle = useDrawerState((state) => state.toggle);
  const pathname = usePathname();

  return (
    <Link
      href="/new-game"
      onClick={() => {
        // Close only if the route is different.
        if (pathname !== '/new-game') {
          toggle(false);
        }
      }}
      className="new-game"
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
      Load a new game
    </Link>
  );
}
