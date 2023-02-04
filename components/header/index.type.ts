import { IMode } from '@/constant/display-mode';
import { ISideMenu } from '@/constant/sidebar-menu';

export interface IHeader {
  isToggle: boolean;
  handleToggle: () => void;
  mode: IMode;
  selectedMenu: ISideMenu;
}
