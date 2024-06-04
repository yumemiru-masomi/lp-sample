import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from './theme.css';

/* heading */
const headingBase = style({
  color: theme.color.txt.high,
  fontWeight: '700',
  margin: 0,
  lineHeight: theme.lineHeight.tight,
});

export const heading = styleVariants({
  'heading-xs-bold': [headingBase, { fontSize: theme.fontSize.md }],
  'heading-s-bold': [headingBase, { fontSize: theme.fontSize.lg }],
  'heading-m-bold': [headingBase, { fontSize: theme.fontSize.xl }],
  'heading-l-bold': [headingBase, { fontSize: theme.fontSize.xxl }],
});

/* body */
const bodyBase = style({
  color: theme.color.txt.high,
  fontWeight: '400',
  margin: 0,
  lineHeight: theme.lineHeight.normal,
});

export const body = styleVariants({
  'body-xxs-regular': [bodyBase, { fontSize: theme.fontSize.xxs }],
  'body-xxs-bold': [bodyBase, { fontSize: theme.fontSize.xxs, fontWeight: '700' }],
  'body-xs-regular': [bodyBase, { fontSize: theme.fontSize.xs }],
  'body-xs-bold': [bodyBase, { fontSize: theme.fontSize.xs, fontWeight: '700' }],
  'body-s-regular': [bodyBase, { fontSize: theme.fontSize.sm }],
  'body-s-bold': [bodyBase, { fontSize: theme.fontSize.sm, fontWeight: '700' }],
  'body-m-regular': [bodyBase, { fontSize: theme.fontSize.md }],
  'body-m-bold': [bodyBase, { fontSize: theme.fontSize.md, fontWeight: '700' }],
  'body-l-regular': [bodyBase, { fontSize: theme.fontSize.lg }],
  'body-l-bold': [bodyBase, { fontSize: theme.fontSize.lg, fontWeight: '700' }],
});

/* label */
const labelBase = style({
  color: theme.color.txt.high,
  fontWeight: '400',
  margin: 0,
  lineHeight: theme.lineHeight.flat,
});

export const label = styleVariants({
  'label-xxxs-regular': [labelBase, { fontSize: theme.fontSize.xxxs }],
  'label-xxxs-bold': [labelBase, { fontSize: theme.fontSize.xxxs, fontWeight: '700' }],
  'label-xxs-regular': [labelBase, { fontSize: theme.fontSize.xxs }],
  'label-xxs-bold': [labelBase, { fontSize: theme.fontSize.xxs, fontWeight: '700' }],
  'label-xs-regular': [labelBase, { fontSize: theme.fontSize.xs }],
  'label-xs-bold': [labelBase, { fontSize: theme.fontSize.xs, fontWeight: '700' }],
  'label-s-regular': [labelBase, { fontSize: theme.fontSize.sm }],
  'label-s-bold': [labelBase, { fontSize: theme.fontSize.sm, fontWeight: '700' }],
  'label-m-regular': [labelBase, { fontSize: theme.fontSize.md }],
  'label-m-bold': [labelBase, { fontSize: theme.fontSize.md, fontWeight: '700' }],
  'label-l-regular': [labelBase, { fontSize: theme.fontSize.lg }],
  'label-l-bold': [labelBase, { fontSize: theme.fontSize.lg, fontWeight: '700' }],
  'label-xl-regular': [labelBase, { fontSize: theme.fontSize.xl }],
  'label-xl-bold': [labelBase, { fontSize: theme.fontSize.xl, fontWeight: '700' }],
  'label-xxl-regular': [labelBase, { fontSize: theme.fontSize.xxl }],
  'label-xxl-bold': [labelBase, { fontSize: theme.fontSize.xxl, fontWeight: '700' }],
  'label-xxxl-regular': [labelBase, { fontSize: theme.fontSize.xxxl }],
  'label-xxxl-bold': [labelBase, { fontSize: theme.fontSize.xxxl, fontWeight: '700' }],
});

/* link */
const linkBase = style({
  color: theme.color.txt.high,
  fontWeight: '400',
  margin: 0,
  lineHeight: theme.lineHeight.flat,
  textDecoration: 'underline',
});

export const link = styleVariants({
  'link-xxxs-regular': [linkBase, { fontSize: theme.fontSize.xxxs }],
  'link-xxxs-bold': [linkBase, { fontSize: theme.fontSize.xxxs, fontWeight: '700' }],
  'link-xxs-regular': [linkBase, { fontSize: theme.fontSize.xxs }],
  'link-xxs-bold': [linkBase, { fontSize: theme.fontSize.xxs, fontWeight: '700' }],
  'link-xs-regular': [linkBase, { fontSize: theme.fontSize.xs }],
  'link-xs-bold': [linkBase, { fontSize: theme.fontSize.xs, fontWeight: '700' }],
  'link-s-regular': [linkBase, { fontSize: theme.fontSize.sm }],
  'link-s-bold': [linkBase, { fontSize: theme.fontSize.sm, fontWeight: '700' }],
  'link-m-regular': [linkBase, { fontSize: theme.fontSize.md }],
  'link-m-bold': [linkBase, { fontSize: theme.fontSize.md, fontWeight: '700' }],
  'link-l-regular': [linkBase, { fontSize: theme.fontSize.lg }],
  'link-l-bold': [linkBase, { fontSize: theme.fontSize.lg, fontWeight: '700' }],
  'link-xl-regular': [linkBase, { fontSize: theme.fontSize.xl }],
  'link-xl-bold': [linkBase, { fontSize: theme.fontSize.xl, fontWeight: '700' }],
  'link-xxl-regular': [linkBase, { fontSize: theme.fontSize.xxl }],
  'link-xxl-bold': [linkBase, { fontSize: theme.fontSize.xxl, fontWeight: '700' }],
});
