/* eslint-disable @typescript-eslint/no-use-before-define */
import { createTheme } from 'oah-ui';
import { DefaultTheme } from 'styled-components';

export default function themeService(theme: DefaultTheme['name']) {
  switch (theme) {
    case 'dark':
    case 'cosmic':
    case 'corporate':
    default:
      return createTheme(theme, shared);
  }
}

const shared: Partial<DefaultTheme> = {
  sidebarHeaderGap: '2rem',
  gridSize: 12,
  fontFamilyPrimary: `-apple-system,BlinkMacSystemFont,
          "Segoe UI",Roboto,"Helvetica Neue",
          Arial,sans-serif,"Apple Color Emoji",
          "Segoe UI Emoji","Segoe UI Symbol"`,
};
