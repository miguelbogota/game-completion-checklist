'use client';

import { Container } from '@app/components/container';
import { CheckList } from '@app/components/checklist';

import { SelectedGameProvider } from './context';
import { SelectedGameTitle } from './title';
import { ResetButton } from './menu';
import { Background } from './background';

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
    <SelectedGameProvider value={{ game }}>
      <ResetButton />
      <Container className="selected-game">
        <SelectedGameTitle />

        <div className="categories">
          {game.categories.map((category) => (
            <CheckList {...category} key={category.id} />
          ))}
        </div>
      </Container>

      <Background {...game['background-image']} />
    </SelectedGameProvider>
  );
}
