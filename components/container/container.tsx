'use client';

import clsx from 'clsx';
import { type PropsWithChildren } from 'react';

/**
 * Container props.
 */
export type ContainerProps = PropsWithChildren<{
  className?: string;
  background?: {
    image?: string;
    color?: string;
    text?: string;
  };
}>;

/**
 * Container component.
 */
export function Container(props: ContainerProps) {
  const { children, className, background } = props;

  const rootClasses = clsx('container', className);

  if (!background) {
    return <main className={rootClasses}>{children}</main>;
  }

  const { image, color, text } = background;

  return (
    <div
      className="container-background"
      style={{
        ...(image && { backgroundImage: `url('${image}')` }),
        ...(color && { backgroundColor: color }),
        ...(text && { color: text }),
      }}
    >
      <main className={rootClasses}>{children}</main>
    </div>
  );
}
