'use client';

import { useAppState } from '@app/state';
import { Container } from '@app/components/container';
import { Selectedgame } from '@app/components/selected-game';
import { GameList } from '@app/components/game-list';

export default function Home({ searchParams }: { searchParams: { game: string } }) {
  const { game: gameId } = searchParams;

  const [selectedGame, loading] = useAppState((state) =>
    state.games.find((game) => game.id === gameId),
  );

  if (!gameId) {
    return <GameList title="Welcome" />;
  }

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (!selectedGame || selectedGame.isPreset) {
    return <GameList title="Game not found" />;
  }

  return <Selectedgame game={selectedGame} />;
}
