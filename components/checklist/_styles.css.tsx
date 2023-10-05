import { style, globalStyle } from '@vanilla-extract/css';

export const checklist = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0.5rem',
  border: '2px solid #7c7c7c6f',
  backgroundColor: '#41414167',
  letterSpacing: 2,
  wordSpacing: 2,
  cursor: 'pointer',
  borderRadius: '5px',
  boxShadow: '0px 0px 5px 0px #000000',
});

export const completed = style({
  selectors: {
    [`${checklist}&`]: {
      border: '2px solid #42765a',
      backgroundColor: '#42765a67',
    },
  },
});

export const items = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const item = style({
  width: '100%',
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: '#42424289',
  padding: '1rem',
  borderRadius: '4px',
  marginBottom: '0.6rem',
  overflow: 'hidden',

  selectors: {
    ['&:hover']: {
      backgroundColor: '#69696989',
    },
  },
});

export const itemIcon = style({
  display: 'flex',
  height: '1.5rem',
  width: '1.5rem',
  marginRight: '1rem',
  border: '1px solid #c5c5c5',
});

export const itemHint = style({
  position: 'absolute',
  fontSize: '0.8rem',
  color: '#c5c5c5',
  backgroundColor: '#000000',
});

export const header = style({
  position: 'relative',
  width: '100%',
});

export const headerCaption = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  marginBottom: '1rem',
  fontSize: '0.8rem',
  color: '#c5c5c5',
});

export const headerPercentage = style({
  padding: '0.4rem 1rem',
  borderRadius: '3px',
  fontSize: '1.2rem',
  backgroundColor: '#1f5771',
  selectors: {
    [`${completed} &`]: {
      backgroundColor: '#42765a',
    },
  },
});

export const description = style({
  textAlign: 'center',
  marginBottom: '1rem',
  fontSize: '0.8rem',
});

globalStyle(`${item} > input[type='checkbox']`, {
  position: 'absolute',
  left: 0,
  width: '100%',
  height: '100%',
});

globalStyle(`${item} > input[type='checkbox']:checked`, {
  backgroundColor: '#69696989',
});

globalStyle(
  `${item} > input[type='checkbox']:checked ~ a, ${item} > input[type='checkbox']:checked ~ label`,
  {
    textDecoration: 'line-through',
  },
);

globalStyle(`${item} > input[type='checkbox']:checked ~ ${itemIcon}::before`, {
  content: '"\\2713"',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.3rem',
  marginLeft: '4px',
});
