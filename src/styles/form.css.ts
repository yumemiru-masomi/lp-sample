import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from './theme.css';
import { body } from './typography.css';

/* input */
export const inputText = recipe({
  base: style([
    body['body-l-regular'],
    {
      width: '100%',
      height: 48,
      border: `1px solid ${theme.color.border['dark']}`,
      borderRadius: theme.radius[8],
      backgroundColor: 'transparent',
      padding: theme.space[3],
      outline: 0,
      caretColor: theme.color.txt.positive,
      selectors: {
        '&:disabled': {
          color: theme.color.txt.disabled,
          cursor: 'not-allowed',
        },
        '&:focus': {
          border: `2px solid ${theme.color.bg.secondary}`,
        },
        '&::placeholder': {
          color: theme.color.txt.disabled,
        },
        '&::-webkit-calendar-picker-indicator': {
          display: 'none',
        },
      },
    },
  ]),
  variants: {
    error: {
      true: {
        border: `2px solid ${theme.color.txt.error}`,
        backgroundColor: theme.color.bg['error-right'],
      },
    },
    date: {
      true: {},
    },
    hasValue: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        date: true,
        hasValue: false,
      },
      style: {
        color: theme.color.txt.disabled,
      },
    },
  ],
  defaultVariants: {
    error: false,
  },
});

export const selectField = recipe({
  base: style([
    body['body-l-regular'],
    {
      width: '100%',
      height: 48,
      border: 0,
      borderBottom: `2px solid ${theme.color.border['interactive-default']}`,
      backgroundColor: 'transparent',
      padding: `${theme.space[2]} ${theme.space[0.5]}`,
      outline: 0,
      caretColor: theme.color.txt.positive,
      selectors: {
        '&:disabled': {
          color: theme.color.txt.disabled,
          cursor: 'not-allowed',
        },
        '&:focus': {
          borderBottom: `2px solid ${theme.color.bg.secondary}`,
        },
        '&::placeholder': {
          color: theme.color.txt.disabled,
        },
      },
    },
  ]),
  variants: {
    error: {
      true: {
        borderBottom: `2px solid ${theme.color.txt.error}`,
      },
    },
  },
  defaultVariants: {
    error: false,
  },
});

globalStyle(`select:invalid`, {
  color: theme.color.txt.disabled,
});

export const textareaField = recipe({
  base: style([
    body['body-m-regular'],
    {
      width: '100%',
      height: 200,
      display: 'block',
      border: `1px solid ${theme.color.border.dark}`,
      backgroundColor: 'transparent',
      padding: theme.space[4],
      outline: 0,
      caretColor: theme.color.txt.positive,
      borderRadius: theme.space[2],
      selectors: {
        '&:disabled': {
          color: theme.color.txt.disabled,
          cursor: 'not-allowed',
        },
        '&:focus': {
          border: `2px solid ${theme.color.bg.secondary}`,
        },
        '&::placeholder': {
          color: theme.color.txt.disabled,
        },
      },
    },
  ]),
  variants: {
    error: {
      true: {
        border: `2px solid ${theme.color.txt.error}`,
        backgroundColor: theme.color.bg['error-right'],
      },
    },
  },
  defaultVariants: {
    error: false,
  },
});

export const formErrorText = style([
  body['body-xs-regular'],
  {
    display: 'none',
    color: theme.color.txt.error,
    marginTop: theme.space[2],
    selectors: {
      [`${inputText.classNames.variants.error.true}:not(:focus) + &`]: {
        display: 'block',
      },
      [`${selectField.classNames.variants.error.true}:not(:focus) + &`]: {
        display: 'block',
      },
      [`${textareaField.classNames.variants.error.true}:not(:focus) + &`]: {
        display: 'block',
      },
    },
  },
]);
