import { customers } from './customers';
import { OrderType } from '../types';

export const orders: Array<OrderType> = [
  {
    id: 1,
    current_state: 'OPEN',
    line_items: ['Television', 'Television2'],
    creation: '1677696808822',
    last_update: '1677696808822',
    customer_id: customers[0].id,
  },
];
