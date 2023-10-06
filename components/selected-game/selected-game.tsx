'use client';

import { Container } from '@app/components/container';
import { CheckList } from '@app/components/checklist';

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
      <Container
        className="selected-game"
        background={{
          color: game['background-image']['background-color'],
          image: game['background-image'].src,
          text: game['background-image']['text-color'],
        }}
      >
        <SelectedGameTitle />

        <div className="categories">
          {game.categories.map((category) => (
            <CheckList {...category} key={category.id} />
          ))}
        </div>
      </Container>
    </SelectedgameProvider>
  );
}
