import theme from '@app/theme';
import { style } from '@vanilla-extract/css';

export const toggle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 50,
  height: 50,
  margin: '1rem',
  backgroundColor: theme.palette('background.sheet'),
  position: 'absolute',
  zIndex: 100,
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',
});

export const togglePath = style({
  selectors: {
    [`${toggle} > svg > &`]: {
      stroke: theme.palette('text.primary'),
    },
  },
});

export const drawer = style({
  width: 'fit-content',
  height: 'fit-content',
  position: 'fixed',
  zIndex: 300,
  top: 0,
  left: 0,
});

export const content = style({
  width: '22rem',
  height: '100vh',
  backgroundColor: theme.palette('background.sheet'),
  padding: '5.5rem 0.8rem 0.8rem',
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
  },
});

export const navigation = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const item = style({
  display: 'flex',
  padding: '1rem',
  cursor: 'pointer',
  backgroundColor: theme.palette('text.disabled'),
  width: '100%',
});

export const itemPreset = style({
  selectors: {
    [`${item}&`]: {
      border: `1px dashed ${theme.palette('text.primary')}`,
    },
    [`${item}&:not(& ~ &)`]: {
      position: 'relative',
      marginTop: '2rem',
    },
  },
});

export const newGame = style({
  marginTop: 'auto',
});

export const backdrop = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette('black', { alpha: 0.3 }),
  zIndex: -1,
});
