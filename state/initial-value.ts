import hollowKnightPreset from '@app/public/presets/hollow-knight.json';

/**
 * Defaults data for the checklist.
 */
export const defaultGames: LocalChecklist[] = checklistTransformer([
  hollowKnightPreset,
  hollowKnightPreset,
  hollowKnightPreset,
  hollowKnightPreset,
  hollowKnightPreset,
  hollowKnightPreset,
  hollowKnightPreset,
  hollowKnightPreset,
  hollowKnightPreset,
]);

/**
 * Transformer function from json schema to LocalGameChecklist.
 */
function checklistTransformer(defaultGames: AppChecklist[]) {
  if (typeof localStorage !== 'undefined') {
    const localData = localStorage.getItem('state');

    if (localData) {
      return JSON.parse(localData).state.allChecklists as LocalChecklist[];
    }
  }

  return defaultGames.map(
    ({ $schema: _, ...checklist }, i) =>
      ({
        ...checklist,
        id: checklist.id + '-' + (i + 1),
        name: checklist.name + ' ' + (i + 1),
        itemsCompleted: 0,
        itemsCount: checklist.categories.reduce(
          (count, category) => count + category.items.length,
          0,
        ),
        completed: false,
        isPreset: true,
        categories: checklist.categories.map((category) => ({
          ...category,
          id: category.id + '-' + (i + 1),
          showItems: true,
          items: category.items.map((item) => ({
            ...item,
            id: item.id + '-' + (i + 1),
            checked: false,
          })),
        })),
      }) as unknown as LocalChecklist,
  );
}
