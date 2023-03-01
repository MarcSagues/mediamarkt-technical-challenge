import { orders } from '../data/orders';

/**
 * @param limit - limit the number of orders returned
 * @returns an array of orders
 */

export const query = {
  order: async ({ limit }: { limit: number }) => {
    return limit ? orders.slice(0, limit) : orders;
  },
};
