export enum FontWeight {
  Bold = 700,
  Bolder = 600,
  Regular = 400,
}

export enum Breakpoints {
  Mobile = "480px",
  Tablet = "768px",
  Desktop = "1920px",
}

export const TYPOGRAPHY = {
  desktop: {
    headline1: {
      fontSize: "56px",
      fontWeight: FontWeight.Bold,
      lineHeight: "80px",
    },
    headline2: {
      fontSize: "40px",
      fontWeight: FontWeight.Bold,
      lineHeight: "44px",
    },
    body: {
      fontSize: "22px",
      fontWeight: FontWeight.Regular,
      lineHeight: "32px",
    },
    subline: {
      fontSize: "16px",
      fontWeight: FontWeight.Bolder,
      lineHeight: "20px",
    },
  },
  mobile: {
    headline1: {
      fontSize: "32px",
      fontWeight: FontWeight.Bold,
      lineHeight: "48px",
    },
    headline2: {
      fontSize: "28px",
      fontWeight: FontWeight.Bold,
      lineHeight: "36px",
    },
    body: {
      fontSize: "16px",
      fontWeight: FontWeight.Regular,
      lineHeight: "24px",
    },
    subline: {
      fontSize: "16px",
      fontWeight: FontWeight.Bolder,
      lineHeight: "20px",
    },
  },
};

export const SPACING = {
  mobile: {
    L1: "60px",
    L2: "48px",
    L3: "36px",
    L4: "32px",
    L5: "28px",
    L6: "24px",
    L7: "16px",
    L8: "8px",
    L9: "3px",
  },
  tablet: {
    L1: "76px",
    L2: "56px",
    L3: "48px",
    L4: "40px",
    L5: "32px",
    L6: "24px",
    L7: "16px",
    L8: "8px",
    L9: "3px",
  },
  desktop: {
    L1: "88px",
    L2: "64px",
    L3: "48px",
    L4: "40px",
    L5: "32px",
    L6: "24px",
    L7: "16px",
    L8: "8px",
    L9: "3px",
  },
} as const;

export enum ThemeVariant {
  Dark = "dark",
  Light = "light",
}

const darkTheme = {
  colors: {
    background: "#313037",
    backgroundSecondary: "#fff",
    backgroundButton: "#333",
    text: "#F1F1F1",
    textSecondary: "#fff",
    backgroundDisabled: "#bbb",
    border: "#DADADA",
    error: "#FD3419",
    primary: "#DDCE55",
    textDisabled: "#b2b2b2",
    textInvert: "#313037",
  },
};

const lightTheme = {
  colors: {
    background: "#F6F6F6",
    backgroundSecondary: "#0000ff",
    text: "#323537",
    textSecondary: "#0000ff",
    backgroundButton: "#0000ff",
    backgroundDisabled: "#BBB",
    border: "#DADADA",
    error: "#FD3419",
    primary: "#2231AA",
    textDisabled: "#8D8E97",
    textInvert: "#FFF",
  },
};

export const appTheme = {
  [ThemeVariant.Dark]: darkTheme,
  [ThemeVariant.Light]: lightTheme,
};
