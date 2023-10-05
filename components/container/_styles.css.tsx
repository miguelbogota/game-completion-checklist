import theme from '@app/theme';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: theme.breakpoints.values.lg,
  padding: '1rem',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: 'inherit',
});
