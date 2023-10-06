/**
 * Background props.
 */
export type BackgroundProps = LocalChecklist['background-image'];

/**
 * Background component.
 *
 * Components updates the background of the page to match the one of the game.
 */
export function Background(props: BackgroundProps) {
  const { src, 'background-color': backgroundColor, 'text-color': textColor } = props;

  if (!src && !backgroundColor && !textColor) {
    return null;
  }

  return (
    <style jsx global>{`
      html {
        ${src && `background-image: url('${src}') !important;`}
        ${backgroundColor && `background-color: ${backgroundColor} !important;`}
        ${textColor && `color: ${textColor} !important;`}
      }
    `}</style>
  );
}
