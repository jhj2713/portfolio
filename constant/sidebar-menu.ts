export const SIDE_MENU = {
  MAIN: 0,
  INTRODUCE: 1,
  SKILLS: 2,
  PROJECTS: 3,
  EXPERIENCES: 4,
  CONTACT: 5,
} as const;

export type ISideMenu = (typeof SIDE_MENU)[keyof typeof SIDE_MENU];
