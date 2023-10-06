// import { useState } from 'react';
import { motion } from 'framer-motion';

import { useAppState } from '@app/state';
import { useSelectedgame } from '@app/components/selected-game';

/**
 * Checklist item component props.
 */
export type ChecklistItemProps = LocalChecklistItem & {
  onChange: (checked: boolean) => void;
  categoryId: string;
};

/**
 * Checklist item component.
 */
export function ChecklistItem(props: ChecklistItemProps) {
  const {
    id,
    title,
    description,
    href,
    // hint,
    image: { alt, src },
    checked,
    categoryId,
  } = props;

  // const [showHint, setShowHint] = useState(false);

  const { game } = useSelectedgame();
  const [toggleItem] = useAppState((state) => state.toggleItem);

  const path = `${game.id}.${categoryId}.${id}`;

  return (
    <motion.li
      className="item"
      // onMouseEnter={() => setShowHint(true)}
      // onMouseLeave={() => setShowHint(false)}
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
    >
      <input id={id} type="checkbox" checked={checked} onChange={() => toggleItem?.(path)} />
      <span className="checkbox-icon" />

      <div className="text">
        <a href={href} target="_blank" rel="noreferrer">
          <img src={src} alt={alt} />
          <h4>{title}</h4>
        </a>

        <label htmlFor={id}>
          {description}
          {/* {showHint && <p className="hint">{hint}</p>} */}
        </label>
      </div>
    </motion.li>
  );
}
