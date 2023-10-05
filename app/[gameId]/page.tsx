'use client';

import { useAppState } from '@app/state';
import { Container } from '@app/components/container';
import { GameList } from '@app/components/game-list';
import { Selectedgame } from '@app/components/selected-game';

export default function Page({ params }: { params: { gameId: string } }) {
  const { gameId } = params;

  const [selectedGame, loading] = useAppState((state) =>
    state.games.find((game) => game.id === gameId),
  );

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (!selectedGame || selectedGame.isPreset) {
    return <GameList title="Game not found" />;
  }

  return <Selectedgame game={selectedGame} />;
}
