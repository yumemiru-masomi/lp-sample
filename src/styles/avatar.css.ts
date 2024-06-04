import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from './theme.css';

/* avatar */
const avatarBase = style({
  objectFit: 'cover',
  borderRadius: theme.radius[1000],
});

export const avatar = styleVariants({
  '16x16': [avatarBase, { width: 16, height: 16 }],
  '20x20': [avatarBase, { width: 20, height: 20 }],
  '24x24': [avatarBase, { width: 24, height: 24 }],
  '32x32': [avatarBase, { width: 32, height: 32 }],
  '40x40': [avatarBase, { width: 40, height: 40 }],
});
