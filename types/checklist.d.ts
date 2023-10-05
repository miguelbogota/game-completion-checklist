/** A list of achievements for a game to complete. */
type AppChecklist = {
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
type AppChecklistCategory = {
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
type AppChecklistItem = {
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
  /** The percentage of the item. */
  percentage: number;
  /** The url of the image for the item. */
  image: AppChecklistImage;
};

/** Needed properties for a checklist image. */
type AppChecklistImage = {
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
type LocalChecklist = Omit<AppChecklist, '$schema' | 'categories'> & {
  /** Completion percentage of the game (It is calculated by the client). */
  completionPercentage: number;
  /** Property to check if os only a present or an available checklist. */
  isPreset: boolean;
  /** The list of achievements for the game. */
  categories: LocalChecklistCategory[];
};

/**
 * Type for the app state category.
 */
type LocalChecklistCategory = Omit<AppChecklistCategory, 'items'> & {
  /** Local property to handle the state of the dropdown. */
  showItems: true;
  /** The list of items for the achievement. */
  items: LocalChecklistItem[];
};

/**
 * Type for the app state category item.
 */
type LocalChecklistItem = AppChecklistItem & {
  /** Local property to handle the state of the checkbox. */
  checked: boolean;
};
