import * as styles from './_styles.css';

import { useSelectedgame } from './context';

export function SelectedGameTitle() {
  const { game } = useSelectedgame();

  return (
    <div className={styles.title}>
      <img src={game.title.image.src} alt={game.title.image.alt} />
      <h1>{game.title.text}</h1>
    </div>
  );
}
