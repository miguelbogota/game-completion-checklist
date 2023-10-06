/// This file will contain the menu for the selected game.
/// It will contain the reset button.

import { useState } from 'react';

import { useAppState } from '@app/state';
import { useSelectedgame } from '@app/components/selected-game';

/**
 * Reset button component
 *
 * Resets all the items of the current checklist.
 */
export function ResetButton() {
  const [loading, setLoading] = useState(false);

  const [resetChecklist] = useAppState((state) => state.resetChecklist);
  const { game } = useSelectedgame();

  return (
    <button
      className="reset-button"
      onClick={() => {
        if (!confirm('Are you sure you want to reset the checklist?')) {
          return;
        }

        setLoading(true);
        resetChecklist?.(game.id).finally(() => setLoading(false));
      }}
    >
      {loading ? 'Resetting...' : 'Reset'}
    </button>
  );
}
