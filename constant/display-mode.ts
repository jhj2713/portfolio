export const MODE = {
  DARK: 0,
  LIGHT: 1,
} as const;

export type IMode = (typeof MODE)[keyof typeof MODE];
