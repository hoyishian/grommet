import { describe, PropTypes } from 'react-desc';

import { genericProps, getAvailableAtBadge } from '../../utils';

export const doc = Text => {
  const DocumentedText = describe(Text)
    .availableAt(getAvailableAtBadge('Text'))
    .description('Arbitrary text.')
    .usage(
      `import { Text } from 'grommet';
<Text />`,
    );

  DocumentedText.propTypes = {
    ...genericProps,
    color: PropTypes.string.description(
      'A color identifier to use for the text color.',
    ),
    size: PropTypes.oneOfType([
      PropTypes.oneOf([
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
      ]),
      PropTypes.string,
    ]).description(
      `The font size and line height are primarily driven by the chosen tag. But, it can
be adjusted via this size property. The tag should be set for semantic
correctness and accessibility. This size property allows for stylistic
adjustments.`,
    ),
    tag: PropTypes.string
      .description('The DOM tag to use for the element.')
      .defaultValue('span'),
    textAlign: PropTypes.oneOf(['start', 'center', 'end'])
      .description('How to align the text inside the component.')
      .defaultValue('start'),
    truncate: PropTypes.bool
      .description(
        `Restrict the text to a single line and truncate with ellipsis if it
is too long to all fit.`,
      )
      .defaultValue(false),
    weight: PropTypes.oneOfType([
      PropTypes.oneOf(['normal', 'bold']),
      PropTypes.number,
    ]).description('Font weight'),
  };

  return DocumentedText;
};

export const themeDoc = {
  color: {
    description: 'The text color used for Text.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: '#f8f8f8', light: '#444444' }",
  },
  'global.edgeSize': {
    description: 'The possible sizes for margin.',
    type: 'object',
    defaultValue: `{
        none: '0px',
        hair: '1px',
        xxsmall: '3px',
        xsmall: '6px',
        small: '12px',
        medium: '24px',
        large: '48px',
        xlarge: '96px',
        responsiveBreakpoint: 'small',
    }`,
  },
  text: {
    description: `The possible sizes of the text in terms of its font-size and line-height.`,
    type: 'object',
    defaultValue: `{
      xsmall: {
        size: '12px',
        height: '18px',
       },
      small: {
        size: '14px',
        height: '20px',
       },
      medium: {          
        size: '18px',
        height: '24px',
      },
      large: {
        size: '22px',
        height: '28px',
      },
      xlarge: {
        size: '26px',
        height: '32px',
      },
      xxlarge: {
        size: '34px',
        height: '40px',
      },
    }`,
  },
  'text.extend': {
    description: 'Any additional style for Text.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
};
