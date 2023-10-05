'use client';

import { StandAloneNavigation } from '@app/components/drawer';
import { Container } from '@app/components/container';

import * as styles from './_styles.css';

/**
 * Game item props.
 */
export type GameListProps = {
  title: string;
};

/**
 * Game item component.
 */
export function GameList(props: GameListProps) {
  const { title } = props;

  return (
    <Container>
      <h1>{title}</h1>
      <p>Select a game from the menu:</p>
      <div className={styles.gameList}>
        <StandAloneNavigation />
      </div>
    </Container>
  );
}
