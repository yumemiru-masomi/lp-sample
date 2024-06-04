import { style } from '@vanilla-extract/css';

import { theme } from './theme.css';

/* text */
export const txtGradation1 = style({
  color: theme.color.txt.high,
  background: `-webkit-linear-gradient(90deg, ${theme.pallete.gradation['1'].start}, ${theme.pallete.gradation['1'].end})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const txtGradation1Dark = style({
  color: theme.color.txt.high,
  background: `-webkit-linear-gradient(90deg, ${theme.pallete.gradation['3'].start}, ${theme.pallete.gradation['3'].end})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

/* background,iconも併用 */
export const bgGradationRight = style({
  background: `linear-gradient(to right, ${theme.pallete.gradation['1'].start}, ${theme.pallete.gradation['1'].end})`,
});

export const bgGradation = style({
  background: `linear-gradient(to right, ${theme.pallete.gradation['2'].start}, ${theme.pallete.gradation['2'].end})`,
});

// icon-gradation-1-darkでもある
export const bgGradationDark = style({
  background: `linear-gradient(to right, ${theme.pallete.gradation['3'].start}, ${theme.pallete.gradation['3'].end})`,
});

export const bgGradationTransparent = style({
  background: `linear-gradient(to right, ${theme.pallete.gradation['alpha']['1'].start}, ${theme.pallete.gradation['alpha']['1'].end})`,
});

/* border */
export const borderGradation1 = style({
  borderImageSource: `linear-gradient( 135deg, ${theme.pallete.gradation['2'].start}, ${theme.pallete.gradation['2'].end})`,
  borderImageSlice: 1,
});

export const borderGradation1Dark = style({
  borderImageSource: `linear-gradient( 135deg, ${theme.pallete.gradation['3'].start}, ${theme.pallete.gradation['3'].end})`,
  borderImageSlice: 1,
});
