import { type PropsWithChildren, useState, type ComponentProps } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import clsx from 'clsx';

import { useAppState } from '@app/state';

import { useDrawerState } from './state';

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
  const { id, isPreset, 'background-image': image } = props;

  const [loading, setLoading] = useState(false);

  const { gameId } = useParams();
  const router = useRouter();
  const toggle = useDrawerState((state) => state.toggle);
  const [loadPreset] = useAppState((state) => state.loadPreset);

  const rootClasses = clsx('item', {
    'is-preset': isPreset,
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
      <ItemLink
        id={id}
        isPreset={isPreset}
        {...(image && {
          style: {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${image.src})`,
            ...(image['text-color'] && { color: image['text-color'] }),
            ...(image['background-color'] && { backgroundColor: image['background-color'] }),
          },
        })}
        onButtonClick={() => {
          setLoading(true);
          loadPreset?.(id).then(() => {
            setLoading(false);
            toggle(false);
            router.push(`/?game=${id}`);
          });
        }}
        onLinkClick={() => {
          // Close only if the route is different.
          if (gameId !== id) {
            toggle(false);
          }
        }}
      >
        <ItemCard {...props} loading={loading} />
      </ItemLink>
    </motion.li>
  );
}

/**
 * Drawer menu item card props.
 */
type ItemCardProps = PropsWithChildren<DrawerItemProps> & {
  loading: boolean;
};

/**
 * Drawer menu item card component.
 */
function ItemCard(props: ItemCardProps) {
  const { loading } = props;

  if (loading) {
    return <div>Loading...</div>;
  }

  const { name, itemsCompleted, itemsCount, 'thumbnail-image': image } = props;

  const completionPercentage = Math.round((itemsCompleted / itemsCount) * 100);

  return (
    <div>
      {image && (
        <img
          style={{
            maxHeight: '3rem',
            ...(image['text-color'] && { color: image['text-color'] }),
            ...(image['background-color'] && { backgroundColor: image['background-color'] }),
          }}
          src={image.src}
          alt={image.alt}
        />
      )}
      <div>
        <h4>{name}</h4>
        <span>
          {itemsCompleted}/{itemsCount}
        </span>
        <br />
        <span>{completionPercentage}/100%</span>
      </div>
    </div>
  );
}

/**
 * Drawer menu item link props.
 */
type ItemLinkProps = PropsWithChildren<{
  id: string;
  isPreset: boolean;
  onButtonClick: () => void;
  onLinkClick: () => void;
}> &
  ComponentProps<'button'> &
  Omit<ComponentProps<typeof Link>, 'href'>;

/**
 * Drawer menu item link component.
 */
function ItemLink(props: ItemLinkProps) {
  const { id, isPreset, onButtonClick, onLinkClick, children, ...otherProps } = props;

  return isPreset ? (
    <button {...otherProps} onClick={onButtonClick}>
      {children}
    </button>
  ) : (
    <Link {...otherProps} href={`/?game=${id}`} onClick={onLinkClick}>
      {children}
    </Link>
  );
}
