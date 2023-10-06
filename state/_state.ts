/* eslint-disable @typescript-eslint/no-empty-function */

import { useEffect } from 'react';
import { create as createState } from 'zustand';
import { persist } from 'zustand/middleware';

import { defaultGames } from './initial-value';

/**
 * AppState type.
 */
export type AppState = {
  /** All of the available game checklists the user has. */
  games: LocalChecklist[];
  /** Property to validate if the state is loading. */
  loading: boolean;
  /** Loads a preset checklist. */
  loadPreset: (presetId: string) => Promise<void>;
  /** Toggles a category dropdown. */
  toggleCategory: (path: string) => void;
  /** Toggles a checklist item. */
  toggleItem: (path: string) => void;
  /** Resets the selected checklist (Makes all the items unchecked). */
  resetChecklist: (checklistId: string) => Promise<void>;
  /** Removes a checklist. */
  removeChecklist: (checklistId: string) => Promise<void>;
  /** Adds a new checklist. */
  loadNewChecklist: (checklist: AppChecklist) => Promise<void>;
  /** Edit a checklist */
  editChecklist: (checklist: AppChecklist) => Promise<void>;
};

/**
 * AppState store.
 */
const useInnerAppState = createState<AppState>()(
  persist(
    (set, get) => ({
      games: defaultGames,
      loading: true,
      loadPreset: (presetId) =>
        new Promise((resolve) =>
          setTimeout(() => {
            const newGames = get().games.map((game) => ({
              ...game,
              isPreset: game.id === presetId ? false : game.isPreset,
            }));
            set({ games: newGames });
            resolve();
          }, 1000),
        ),
      toggleCategory: (path) => {
        const [gameId, categoryId] = path.split('.');

        const newGames = get().games.map((game) => {
          if (game.id !== gameId) {
            return game;
          }

          const newCategories = game.categories.map(
            (category) =>
              (category.id !== categoryId
                ? category
                : { ...category, showItems: !category.showItems }) as LocalChecklistCategory,
          );

          return {
            ...game,
            categories: newCategories,
          };
        });
        set({ games: newGames });
      },
      toggleItem: (path) => {
        const [gameId, categoryId, itemId] = path.split('.');
        const newGames = get().games.map((game) => {
          if (game.id !== gameId) {
            return game;
          }

          const newCategories = game.categories.map((category) => {
            if (category.id !== categoryId) {
              return category;
            }

            const newItems = category.items.map(
              (item) =>
                (item.id !== itemId
                  ? item
                  : { ...item, checked: !item.checked }) as LocalChecklistItem,
            );

            return {
              ...category,
              items: newItems,
            };
          });

          return {
            ...game,
            categories: newCategories,
          };
        });
        set({ games: newGames });
      },
      resetChecklist: (checklistId) =>
        new Promise((resolve) =>
          setTimeout(() => {
            const newGames = get().games.map((game) => {
              if (game.id !== checklistId) {
                return game;
              }

              const newCategories = game.categories.map((category) => {
                const newItems = category.items.map(
                  (item) => ({ ...item, checked: false }) as LocalChecklistItem,
                );

                return {
                  ...category,
                  items: newItems,
                };
              });

              return {
                ...game,
                categories: newCategories,
              };
            });
            set({ games: newGames });
            resolve();
          }, 1000),
        ),
      removeChecklist: async () => {},
      loadNewChecklist: async () => {},
      editChecklist: async () => {},
    }),
    {
      name: 'state',
      partialize: (state) => ({
        allChecklists: state.games,
      }),
    },
  ),
);

export function useAppState<T>(callback: (state: AppState) => T): [T | null, boolean];
export function useAppState<T>(callback: (state: AppState) => T, initialValue: T): [T, boolean];
export function useAppState<T>(
  callback: (state: AppState) => T,
  initialValue?: T,
): [T | null, boolean] {
  const result = useInnerAppState(callback);
  const loading = useInnerAppState((state) => state.loading);

  // Set loading to false after the hydration.
  useEffect(() => {
    useInnerAppState.setState({ loading: false });
  }, []);

  return [loading ? initialValue ?? null : result, loading];
}
