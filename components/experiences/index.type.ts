import { ISwipeMode } from '@/constant/swipe-mode';
import { Dispatch } from 'react';

export interface IExperiences {
  setPointerColor: Dispatch<string>;
  isUnmount: ISwipeMode;
}
