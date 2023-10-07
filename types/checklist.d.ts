/** A list of achievements for a game to complete. */
export type _AppChecklist = {
  /** The schema of the data. */
  $schema: string;
  /** The unique identifier for a game. */
  id: string;
  /** The name of the game. */
  name: string;
  /** The url of the background image for the game. */
  'background-image': Omit<AppChecklistImage, 'alt'>;
  /** The thumbnail for the game in the menu. */
  'thumbnail-image': AppChecklistImage;
  /** Object with the properties of the title. */
  title: {
    /** Text to display for the title. */
    text: string;
    /** The url of the image for the title. */
    image: AppChecklistImage;
  };
  /** The list of achievements for the game. */
  categories: AppChecklistCategory[];
};

/** Needed properties for a game checklist. */
export type _AppChecklistCategory = {
  /** The unique identifier for an achievement. */
  id: string;
  /** The title of the achievement. */
  title: string;
  /** The description of the achievement. */
  description: string;
  /** The url of the image for the achievement. */
  image: AppChecklistImage;
  /** The list of items for the achievement. */
  items: AppChecklistItem[];
};

/** Needed properties for a checklist item. */
export type _AppChecklistItem = {
  /** The unique identifier for an item. */
  id: string;
  /** The title of the item. */
  title: string;
  /** The description of the item. */
  description: string;
  /** The url of the item. */
  href: string;
  /** The hint for the item. */
  hint: string;
  /** The url of the image for the item. */
  image: AppChecklistImage;
};

/** Needed properties for a checklist image. */
export type _AppChecklistImage = {
  /** The color of the background in case the url does not work. */
  'background-color'?: string;
  /** The color of the text on top of the image. */
  'text-color'?: string;
  /** The url of the image for the title. */
  src: string;
  /** The alt text for the image. */
  alt: string;
};

/**
 * Type for the app state.
 */
export type _LocalChecklist = Omit<AppChecklist, '$schema' | 'categories'> & {
  /** Count of the items completed (percentage is calculated in the client). */
  itemsCompleted: number;
  /** Count of the items. */
  itemsCount: number;
  /** Property to check if os only a present or an available checklist. */
  isPreset: boolean;
  /** The list of achievements for the game. */
  categories: LocalChecklistCategory[];
};

/**
 * Type for the app state category.
 */
export type _LocalChecklistCategory = Omit<AppChecklistCategory, 'items'> & {
  /** Local property to handle the state of the dropdown. */
  showItems: true;
  /** The list of items for the achievement. */
  items: LocalChecklistItem[];
};

/**
 * Type for the app state category item.
 */
export type _LocalChecklistItem = AppChecklistItem & {
  /** Local property to handle the state of the checkbox. */
  checked: boolean;
};

declare global {
  /** A list of achievements for a game to complete. */
  export type AppChecklist = _AppChecklist;
  /** Needed properties for a game checklist. */
  export type AppChecklistCategory = _AppChecklistCategory;
  /** Needed properties for a checklist item. */
  export type AppChecklistItem = _AppChecklistItem;
  /** Needed properties for a checklist image. */
  export type AppChecklistImage = _AppChecklistImage;
  /** Type for the app state. */
  export type LocalChecklist = _LocalChecklist;
  /** Type for the app state category. */
  export type LocalChecklistCategory = _LocalChecklistCategory;
  /** Type for the app state category item. */
  export type LocalChecklistItem = _LocalChecklistItem;
}
