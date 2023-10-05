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
        completionPercentage: 0,
        isPreset: true,
        categories: checklist.categories.map((category) => ({
          ...category,
          showItems: true,
          items: category.items.map((item) => ({
            ...item,
            checked: false,
          })),
        })),
      }) as unknown as LocalChecklist,
  );
}
