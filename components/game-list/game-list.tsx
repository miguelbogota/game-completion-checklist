'use client';

import { StandAloneNavigation } from '@app/components/drawer';
import { Container } from '@app/components/container';

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
      <div className="game-list">
        <StandAloneNavigation />
      </div>
    </Container>
  );
}
