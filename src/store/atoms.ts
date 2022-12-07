import { atom, selector } from 'recoil';
import { itemsProps } from '../utils/type';

export const CartItemState = atom({
  key: 'CartItems',
  default: [],
});

//
