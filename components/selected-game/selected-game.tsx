'use client';

import { Container } from '@app/components/container';
import { CheckList } from '@app/components/checklist';

import * as styles from './_styles.css';

import { SelectedgameProvider } from './context';
import { SelectedGameTitle } from './title';

/**
 * Selected game props.
 */
export type SelectedGameProps = {
  game: LocalChecklist;
};

/**
 * Selected game component.
 */
export function Selectedgame(props: SelectedGameProps) {
  const { game } = props;

  return (
    <SelectedgameProvider value={{ game }}>
      <div
        className={styles.background}
        style={{
          backgroundColor: game['background-image']['background-color'] ?? '#000000',
          backgroundImage: `url('${game['background-image'].src}')`,
        }}
      />
      <Container color={game['background-image']['text-color']}>
        <SelectedGameTitle />

        <div className={styles.categories}>
          {game.categories.map((category) => (
            <CheckList {...category} key={category.id} />
          ))}
        </div>
      </Container>
    </SelectedgameProvider>
  );
}
