import { IMode } from '@/constant/display-mode';
import { ISideMenu } from '@/constant/sidebar-menu';
import { ISwipeMode } from '@/constant/swipe-mode';
import { Dispatch } from 'react';

export interface IHeader {
  mode: IMode;
  selectedMenu: ISideMenu;
  setPageIndex: Dispatch<ISideMenu>;
  setIsUnmount: Dispatch<ISwipeMode>;
}
