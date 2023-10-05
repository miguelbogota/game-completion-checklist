import theme from '@app/theme';
import { style, globalStyle } from '@vanilla-extract/css';

export const background = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1,
  display: 'block',
  width: '100vw',
  height: '100vh',
  userSelect: 'none',
  overflow: 'hidden',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
});

export const selectedGame = style({});

export const title = style({
  color: 'inherit',
});

globalStyle(`${title} img`, {
  height: '10rem',
  objectFit: 'contain',
});

globalStyle(`${title} h1`, {
  paddingTop: '1rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: '1.4rem',
  color: 'inherit',
});

export const categories = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginTop: '3rem',
  gap: '0.7rem',
  width: '100%',
});
