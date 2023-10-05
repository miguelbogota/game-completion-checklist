import { createContext, useContext } from 'react';

/**
 * Selected game context
 */
const selectedgameContext = createContext<{ game: LocalChecklist }>({} as { game: LocalChecklist });

/**
 * Selected game provider
 */
export const SelectedgameProvider = selectedgameContext.Provider;

/**
 * Selected game hook
 */
export const useSelectedgame = () => useContext(selectedgameContext);
