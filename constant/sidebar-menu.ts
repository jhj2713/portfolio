export const sideMenu = [
  { description: 'Introduce', route: 'introduce' },
  { description: 'Skills', route: 'skills' },
  {
    description: 'Projects',
    route: 'projects',
  },
  { description: 'Experiences', route: 'experiences' },
  { description: 'Contact', route: 'contact' },
];

export const SIDE_MENU = {
  MAIN: 0,
  INTRODUCE: 1,
  SKILLS: 2,
  PROJECTS: 3,
  EXPERIENCES: 4,
  CONTACT: 5,
} as const;

export type ISideMenu = (typeof SIDE_MENU)[keyof typeof SIDE_MENU];

export type IMenuMap = 'main' | 'introduce' | 'skills' | 'projects' | 'experiences' | 'contact';

export const MENU_MAP: { [index: string]: ISideMenu } = {
  main: SIDE_MENU.MAIN,
  introduce: SIDE_MENU.INTRODUCE,
  skills: SIDE_MENU.SKILLS,
  projects: SIDE_MENU.PROJECTS,
  experiences: SIDE_MENU.EXPERIENCES,
  contact: SIDE_MENU.CONTACT,
} as const;
