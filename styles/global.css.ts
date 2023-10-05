import './reset.css';
import '@app/theme/_setup.css';

import theme from '@app/theme';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  width: '100%',
  height: '100%',
  fontFamily: 'Inter, Roboto, -apple-system, Oxygen, Ubuntu, sans-serif',
  color: theme.palette('text.primary'),
  scrollBehavior: 'smooth',
});
