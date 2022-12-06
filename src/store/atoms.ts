import { atom, selector } from 'recoil';
import { itemsProps } from '../utils/type';

export const CartItemState = atom<itemsProps[]>({
  key: 'CartItems',
  default: [],
});

export const totalPriceState = selector({
  key: 'totalPrice',
  get: ({ get }) =>
    get(CartItemState)
      .map(({ price }) => price)
      .reduce((prev: number, current: number) => prev + current, 0),
});
