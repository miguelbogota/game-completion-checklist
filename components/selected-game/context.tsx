import { createContext, useContext } from 'react';

/**
 * Selected game context
 */
const selectedGameContext = createContext<{ game: LocalChecklist }>({} as { game: LocalChecklist });

/**
 * Selected game provider
 */
export const SelectedGameProvider = selectedGameContext.Provider;

/**
 * Selected game hook
 */
export const useSelectedGame = () => useContext(selectedGameContext);
