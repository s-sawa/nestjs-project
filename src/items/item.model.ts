import { ItemStatus } from './item-status.enum';

ItemStatus;
export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  status: ItemStatus;
}
