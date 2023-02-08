import { Dispatch, ReactNode } from 'react';

export interface ISwiper {
  children: ReactNode;
  itemCount: number;
  colors: string[];
  setPointerColor: Dispatch<string>;
}
