// import type { Theme } from '@emotion/react';

interface ThemeColorsType {
  color: string,
  background: string,
}

export interface ThemeType {
  colors: ThemeColorsType
}

const lightTheme: ThemeType = {
    colors: {
      color: '#000000',
      background: '#eeeeee',
    }
  };

  const darkTheme: ThemeType = {
    colors: {
      color: '#ffffff',
      background: '#222222',
    }
  };

enum ThemeVariant {
    Light = 'light', 
    Dark = 'dark'    
}

export const themes = {
  [ThemeVariant.Light]: lightTheme,
  [ThemeVariant.Dark]: darkTheme
};

