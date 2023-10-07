import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

import { useAppState } from '@app/state';
import { useSelectedgame } from '@app/components/selected-game';

import { ChecklistItem } from './item';
import { ChecklistHeader } from './header';

/**
 * CheckList component props.
 */
export type CheckListProps = LocalChecklistCategory & {
  // Empty...
};

/**
 * CheckList component.
 */
export function CheckList(props: CheckListProps) {
  const { id, items, showItems, description, image, title } = props;

  const { game } = useSelectedgame();
  const [toggleCategory] = useAppState((state) => state.toggleCategory);

  const percentage = items.length;
  const percentageCompleted = items.reduce((acc, item) => acc + (item.checked ? 1 : 0), 0);
  const isCompleted = percentage === percentageCompleted;
  const path = `${game.id}.${id}`;

  return (
    <button
      className={clsx('checklist', isCompleted && 'is-completed')}
      onClick={() => {
        toggleCategory?.(path);
      }}
    >
      <ChecklistHeader {...{ description, image, title, percentage, percentageCompleted }} />

      <motion.ul
        className="items"
        initial={{ height: showItems ? 'auto' : 0 }}
        animate={{ height: showItems ? 'auto' : 0 }}
        exit={{ height: showItems ? 'auto' : 0 }}
        transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
      >
        <AnimatePresence initial={false}>
          {showItems &&
            items.map((item) => (
              <ChecklistItem
                {...item}
                key={item.id}
                categoryId={id}
                onChange={() => {
                  const newData = items.map((newItem) =>
                    newItem.id === item.id ? { ...newItem, checked: !newItem.checked } : newItem,
                  );
                  const _percent = newData.length;
                  const _percentCompleted = newData.reduce(
                    (acc, item) => acc + (item.checked ? 1 : 0),
                    0,
                  );
                  const _isCompleted = _percent === _percentCompleted;
                  if (_isCompleted) {
                    // handleClose();
                  }
                  // setItems(newData);
                }}
              />
            ))}
        </AnimatePresence>
      </motion.ul>
    </button>
  );
}
