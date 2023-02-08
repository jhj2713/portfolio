export const SWIPE_MODE = {
  NOT_MOUNTED: 0,
  UP: 1,
  DOWN: 2,
} as const;

export type ISwipeMode = (typeof SWIPE_MODE)[keyof typeof SWIPE_MODE];
