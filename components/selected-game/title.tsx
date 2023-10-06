import { useSelectedgame } from './context';

export function SelectedGameTitle() {
  const { game } = useSelectedgame();

  return (
    <div className="title">
      <img src={game.title.image.src} alt={game.title.image.alt} />
      <h1>{game.title.text}</h1>
    </div>
  );
}
