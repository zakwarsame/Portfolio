import { css } from 'styled-components';

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};


const theme = {
  
  colors: {
    main: '#64ffda',//#64ffda #127EB1
    light: '#64ffda', //089ECA
    lighter: '#36A6BA',
    slate: '#8892b0',
    navy: '#0a192f',
    shadowNavy: hex2rgba('#020c1b', 0.7),
    lightTheme: {
      text: '#575757',
      textHighlight: '#020c1b',
      background: '#F5F5F5',
    },
    darkTheme: {
      text: '#dadada',
      textHighlight: '#F0F0F0',
      background: '#020c1b',
    },
  },
  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },
  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },
  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`,
    smaller: 'only screen and (max-width: 31.25em)',
    small: 'only screen and (max-width: 37.5em)',
    medium: 'only screen and (max-width: 56.25em)',
    large: 'only screen and (max-width: 80em)',
    larger: 'only screen and (max-width: 90em)',
    largest: 'only screen and (max-width: 97em)',
  },

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${hex2rgba('#020c1b', 0.7)};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)  ;

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${hex2rgba('#020c1b', 0.7)};
    }
  `,

  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  borderRadius: '6px',
};

export default theme;
