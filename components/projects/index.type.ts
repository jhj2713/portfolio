import { ISwipeMode } from '@/constant/swipe-mode';
import { Dispatch } from 'react';

export interface IProjects {
  setPointerColor: Dispatch<string>;
  isUnmount: ISwipeMode;
}
